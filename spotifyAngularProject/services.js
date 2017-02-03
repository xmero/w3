angular.module('SpotifyFactories', [])

.factory("SpotifyFactory", function($http) {

  function searchArtist(searchQuery) {

    var url = "https://api.spotify.com/v1/search?type=artist&query=<%ARTIST-NAME%>";
    url = url.replace('<%ARTIST-NAME%>', searchQuery)

    return $http.get(url)
  }