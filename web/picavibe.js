// Declare app
'use strict';
console.log("angularjs.js is connected");
var picaVibe = angular.module('picaVibe', []);

picaVibe.controller('mainController',
    function mainController($scope, $http) {
        $http({
            url: "/search/forest",
            method: "GET"
        }).then(function successCallback(response) {
            console.log(response);

        }, function errorCallback(response) {
            console.log("Ooops your http request failed.");
        });
    });


// controller, control data here. do the ajax call.


/*

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("welcome.htm")
        .then(function(response) {
            $scope.myWelcome = response.data;
        });
});

    */