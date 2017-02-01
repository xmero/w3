/* eslint no-undef: "off" */

$('#search-artists form').on('submit', function (e) {
  e.preventDefault()
  var urlSearch = 'https://api.spotify.com/v1/search?type=artist&query=<%ARTIST-NAME%>'
  var valueSearched = $(this).find('input').val()
  var urlFilled = urlSearch.replace('<%ARTIST-NAME%>', valueSearched)

  $.ajax({
    url: urlFilled
  })
        .done(function (response) {
          var listArtists = response.artists.items
          var optionsArtists = listArtists.map(function (elem) {
            return "<option value='" + elem.id + "'>" + elem.name + '</option>'
          })
          $('#list-artists').html(optionsArtists.join(''))
          $('#select-artist').removeClass('hidden')
        })
})

$('#select-artist form').on('submit', function (e) {
  e.preventDefault()
  var urlSearch = 'https://api.spotify.com/v1/artists/<%ID-ARTIST%>/albums'
  var valueSearched = $(this).find('select').val()
  var urlFilled = urlSearch.replace('<%ID-ARTIST%>', valueSearched)

  $.ajax({
    url: urlFilled
  })
        .done(function (response) {
          var listAlbums = response.items
          var optionsAlbums = listAlbums.map(function (elem) {
            return "<option value='" + elem.id + "'>" + elem.name + '</option>'
          })
          $('#list-albums').html(optionsAlbums.join(''))
          $('#select-album').removeClass('hidden')
        })
})

$('#select-album form').on('change', function (e) {
  e.preventDefault()
  var urlSearch = 'https://api.spotify.com/v1/albums/<%ID-ALBUM%>/tracks'
  var valueSearched = $(this).find('select').val()
  var urlFilled = urlSearch.replace('<%ID-ALBUM%>', valueSearched)

  $.ajax({
    url: urlFilled
  })
    .done(function (response) {
      // console.log(response)
      var listSongs = response.items
      var optionSongs = listSongs.map(function (elem) {
        return "<li> <a href='" + elem.preview_url + "'>" + elem.name + '</a></li>'
      })
      $('#list-songs').html(optionSongs.join(''))
      $('#select-song').removeClass('hidden')
    })
})
