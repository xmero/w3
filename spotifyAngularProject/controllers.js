angular.module('SpotifyControllers',['SpotifyFactory'])

.controller('SearchController', function($scope, $http) 

    $scope.searchArtist = function(e) {
        e.preventDefault()
    }

    var url = "https://api.spotify.com/v1/search?type=artist&query=<%ARTIST-NAME%>"
    url = url.replace('<%ARTIST-NAME%>', $scope.search)
    return $http.get(url)
})
