const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const rootPath = path.normalize(__dirname);
console.log(rootPath);
const Clarifai = require('clarifai');
const clarifai = new Clarifai.App({
    apiKey: 'ba6f72aba3a14dfdb182df5ed331c34c'
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/web/main.html'));
    res.setHeader('Content-Type', 'application/json');
    // predict the contents of an image by passing in a url
    clarifai.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
        function(response) {
            console.log(response);
        },
        function(err) {
            console.error(err);
        }
    );
});

// instantiate a new Clarifai app passing in your api key.







app.listen(8000);
console.log("app listening at http://localhost:8000");