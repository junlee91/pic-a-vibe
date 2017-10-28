
picaVibe.controller('freeSoundController',
    function freeSoundController($scope, $http) {
        var clientSecret = "GpZKE6sqHZGYDthQstHOZnIZAcp8TUpbBJ9vOW0n";
        var clientId = "cZ7SiCJuAIK9gxZVKx47";
        var keyword = "forest";
        $http({
            url: "https://freesound.org/apiv2/search/text/?token=" + clientSecret + "&query=" + keyword,
            method: "GET"
        }).then(function(res) {
            $scope.sound = res.body;
            console.log(res.data);
        }, function(err) {
            console.log(err);
        });
    });
