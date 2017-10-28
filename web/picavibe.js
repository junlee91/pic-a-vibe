// Declare app
'use strict';
console.log("angularjs.js is connected");
var picaVibe = angular.module('picaVibe', []);

picaVibe.controller('mainController',
    function mainController($scope, $http) {
        $http.get("/search/river")
            .then(function(response) {
                $scope.imgObj = response.data;
            })


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