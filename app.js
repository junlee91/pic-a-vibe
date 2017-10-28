/**
 * Created by seholim on 10/28/17.
 */
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
const Clarifai = require('clarifai');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



/*

// instantiate a new Clarifai app passing in your api key.
const clarifai = new Clarifai.App({
    apiKey: 'ba6f72aba3a14dfdb182df5ed331c34c'
});


// predict the contents of an image by passing in a url
clarifai.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
    function(response) {
        console.log(response);
    },
    function(err) {
        console.error(err);
    }
);

*/



app.listen(8000);