'use strict';

var https = require('https');
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');


var rootPath = path.normalize(__dirname);
var Clarifai = require('clarifai');
var clarifai = new Clarifai.App({
    apiKey: 'b1008dff763a48408afe1443101d3c41'
});


// Replace the subscriptionKey string value with your valid subscription key.
var subscriptionKey = 'e8a773af38224a4599c100eb52314f48';


rootPath += "/web";
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath));

app.get('/', function(req, res) {
    res.sendFile(rootPath+ '/main.html');
});

app.get('/search/:searchText', function(req, res) {
    // Verify the endpoint URI.  At this writing, only one endpoint is used for Bing
// search APIs.  In the future, regional endpoints may be available.  If you
// encounter unexpected authorization errors, double-check this host against
// the endpoint for your Bing Web search instance in your Azure dashboard.
    var host = 'api.cognitive.microsoft.com';
    var bingPath = '/bing/v7.0/images/search';
    var term = req.params.searchText;
    var response_handler = function (response) {
        var body = '';
        response.on('data', function (d) {
            body += d;
        });
        response.on('end', function () {
            console.log('\nRelevant Headers:\n');
            for (var header in response.headers)
                // header keys are lower-cased by Node.js
                if (header.startsWith("bingapis-") || header.startsWith("x-msedge-"))
                    console.log(header + ": " + response.headers[header]);
            body = JSON.stringify(JSON.parse(body), null, '  ');
            console.log('\nJSON Response:\n');
            res.send(body);
        });
        response.on('error', function (e) {
            console.log('Error: ' + e.message);
        });
    };

    var bing_web_search = function (search) {
        console.log('Searching the Web for: ' + term);
        var request_params = {
            method : 'GET',
            hostname : host,
            path : bingPath + '?q=' + encodeURIComponent(search),
            headers : {
                'Ocp-Apim-Subscription-Key' : subscriptionKey,
            }
        };

        var req = https.request(request_params, response_handler);
        req.end();
    };

    if (subscriptionKey.length === 32) {
        bing_web_search(term);
    } else {
        console.log('Invalid Bing Search API subscription key!');
        console.log('Please paste yours into the source code.');
    }
});


app.get('/analyze/:url', function(req, res) {
    console.log("this is the backend!!");
    var url = req.params["url"];
    console.log(url);

    clarifai.models.predict(Clarifai.GENERAL_MODEL, url).then(
        function(response) {
            res.setHeader('Content-Type', 'application/json');
            console.log(response);
            res.send(response);
        },
        function(err) {
            console.log(err);
        }
    );
});


// instantiate a new Clarifai app passing in your api key.
// predict the contents of an image by passing in a url

app.listen(8000);
console.log("app listening at http://localhost:8000");