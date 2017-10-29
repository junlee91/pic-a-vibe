'use strict';
var picaVibe = angular.module('picaVibe', []);

picaVibe.controller('mainController',
    function mainController($scope, $http) {
        $scope.userInput;
        $scope.loadPhotos = function() {

            $http({
                url: "/search/" + $scope.userInput,
                method: "GET"
            }).then(function successCallback(response) {
                console.log(response);
                var array = response.data.value;
                $scope.res = array;

            }, function errorCallback(response) {
                console.log("Ooops your http request failed.");
            });
        };

        $scope.onclick = function(obj){
            $scope.encodeURL = encodeURIComponent(obj);
            console.log(obj);
            console.log($scope.encodeURL);

            $http({
                url: "/analyze/" + $scope.encodeURL,
                method: "GET"
            }).then(function successCallback(response) {
                console.log(response);
                var arr = [];
                arr = response.data.outputs[0].data;
                getSounds(arr);


            }, function errorCallback(response) {
                console.log("Ooops your http request failed.");
            });

        };


        console.log("free sound controller");
        var files = {
            "forest": ["216216__crickets.wav", "223640tree2.wav", "231537__forest.wav", "362253__leaves2.mp3"],
            "bird": ["339326__bird.wav", "398736__bird2.wav"],
            "chicken": ["178096__chickens.mp3"],
            "river": ["24511__river.ogg", "145395__river2.wav", "178652_river_train.wav", "182514__frogs.wav"],
            "leaves": ["362253__leaves2.mp3", "405134__leaves.wav"],
            "cloud": ["76942__wind-chimes.wav", "324048__wind2.mp3", "331682__wind-chimes.mp3", "377639__bells.mp3"],
            "cafe": ["133097__people chatting.wav", "149466__coffee.wav", "165280__cafe.wav", "324336__people.wav", "334153_glass.mp3"],
            "fall": ["365921__waterfall2.wav"],
            "water fall": ["365921__waterfall2.wav", "380764__waterfall.wav"],
            "winter": ["160600__snow2.wav", "336763__snow.wav"],
            "ice": ["336763__snow.wav"],
            "snow": ["160600__snow2.wav","336763__snow.wav"],
            "coffee": ["133097__people chatting.wav", "149466__coffee.wav", "165280__cafe.wav", "334153_glass.mp3"],
            "stream": ["339324__stream.wav", "365921__stream2.wav"],
            "water": ["339324__stream.wav", "365921__stream2.wav"],
            "tree": ["216216__crickets.wav", "223640tree2.wav", "231537__forest.wav", "362253__leaves2.mp3"],
            "door": ["168650__door.wav", "386770__door creaking.wav"],
            "train": ["157873__train.wav"],
            "rain": ["344430__rain.mp3"],
            "star": ["62487__campfire.wav", "62489__night.wav", "257941__night.wav"],
            "dog": ["155382__dogs.wav", "365089__dogs.wav"],
            "puppy": ["365089__dogs.wav", "155382__dogs.wav"],
            "dogs": ["155382__dogs.wav"],
            "elephant": ["139875__elephant.wav"],
            "elephants": ["139875__elephant.wav"],
            "fire": ["62487__campfire.wav"],
            "city": ["76377__city.mp3", "/77199_hip_hop.wav"],
            "wave": ["191444_beach.mp3", "320306_beach.wav", "395391__waves.wav"],
            "sea": ["191444_beach.mp3", "320306_beach.wav"],
            "sea shore": ["191444_beach.mp3", "320306_beach.wav"],
            "barbeque": ["269089__summer-barbecue.mp3"],
            "space": ["43029_space.wav", "396239_space_alien.wav"],
            "beach": ["191444_beach.mp3", "320306_beach.wav"],
            "phone": ["50646_phone_ring.wav", "77723_phone_ring.mp3"],
            "telephone": ["50646_phone_ring.wav", "77723_phone_ring.mp3"],
            "text message": ["50646_phone_ring.wav", "77723_phone_ring.mp3"],
            "soda": ["386887_soda.wav"],
            "coke": ["386887_soda.wav"],
            "clock": ["343130__time ticking.wav"],
            "buildings": ["76377__city.mp3", "/77199_hip_hop.wav"],
            "animals": ["139875__elephant.wav"],
            "people": ["149466__coffee.wav", "324336__people.wav"],
            "crickets": ["352514__crickets.wav"],
            "night": ["216216__crickets.wav", "257941__night.wav"],
            "night sky": ["62487__campfire.wav", "62489__night.wav", "257941__night.wav"],
            "cat": ["169983__cats.wav"],
            "cats": ["169983__cats.wav"],
            "paper": ["220828__paper.mp3", "234016__writing.wav", "398271__writing.wav"],
            "books": ["220828__paper.mp3", "234016__writing.wav", "398271__writing.wav"],
            "book": ["220828__paper.mp3", "234016__writing.wav", "398271__writing.wav"],
            "pencil": ["220828__paper.mp3", "234016__writing.wav", "398271__writing.wav"],
            "desk": ["220828__paper.mp3", "234016__writing.wav", "398271__writing.wav"],
            "zoo": ["401190__zoo.wav"]
        };

        //var clientSecret = "GpZKE6sqHZGYDthQstHOZnIZAcp8TUpbBJ9vOW0n";
        //var clientId = "cZ7SiCJuAIK9gxZVKx47";


        var getSounds = function(arr) {
            console.log("inside of the get sounds function");
            console.log(arr);
            var keywords = arr.concepts;
            console.log(keywords);
            var length = keywords.length;
            var categories = Object.keys(files);
            var matched = [];
            $scope.fileNames = [];
            for(i=0; i<length; i++){
                for(var j=0; j<53; j++) {

                    if(categories[j] === keywords[i].name) {
                        matched.push(keywords[i].name);
                        var ran = Math.floor(Math.random() * files[keywords[i].name].length);
                        if($scope.fileNames.includes(files[keywords[i].name][ran]) === false){
                            $scope.fileNames.push(files[keywords[i].name][ran]);
                            break;
                        }

                    }
                }
            }
            var matchedLength = matched.length;
            for(var i=0; i<matchedLength; i++){
                console.log("matched: " + matched[i]);
            }

            var fileNameLength = $scope.fileNames.length;
            for(var i=0; i<fileNameLength; i++) {
                $scope.fileNames[i] = "vendor/sound/" + $scope.fileNames[i];
                console.log("fileNames: " + $scope.fileNames[i]);
            }
        }

    });
