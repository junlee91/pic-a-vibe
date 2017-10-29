
picaVibe.controller('eventController',
	function eventController($scope, $http){
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


            }, function errorCallback(response) {
                console.log("Ooops your http request failed.");
            });

		}
	});

