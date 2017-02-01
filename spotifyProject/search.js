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
    var tplOption = "<option value='<%ARTIST-ID%>'><%ARTIST-NAME%></option>"
    var optionsArtists = listArtists.map(function (artist) {
      var currentOption = tplOption.replace('<%ARTIST-ID%>', artist.id)
      currentOption = currentOption.replace('<%ARTIST-NAME%>', artist.name)
      return currentOption
    })
    optionsArtists.unshift('<option disabled selected>Select an artist</option>')
    $('#list-artists').html(optionsArtists.join(''))
    $('#select-artist').removeClass('hidden')
    $('#select-album,#select-track').addClass('hidden')
  })
})

$('#list-artists').on('change', function () {
  var idArtistSelected = $(this).val()
  var urlAlbums = 'https://api.spotify.com/v1/artists/<%ID-ARTIST%>/albums'
  var urlFilled = urlAlbums.replace('<%ID-ARTIST%>', idArtistSelected)

  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    var listAlbums = response.items
    var tplOption = "<option value='<%ALBUM-ID%>'><%ALBUM-NAME%></option>"
    var optionsAlbums = listAlbums.map(function (album) {
      var currentOption = tplOption.replace('<%ALBUM-ID%>', album.id)
      currentOption = currentOption.replace('<%ALBUM-NAME%>', album.name)
      return currentOption
    })
    optionsAlbums.unshift('<option disabled selected>Select an album</option>')
    $('#list-albums').html(optionsAlbums.join(''))
    $('#select-album').removeClass('hidden')
    $('#select-track').addClass('hidden')
  })
})

$('#list-albums').on('change', function () {
  var idAlbumSelected = $(this).val()
  var urlTracks = 'https://api.spotify.com/v1/albums/<%ID-ALBUM%>/tracks'
  var urlFilled = urlTracks.replace('<%ID-ALBUM%>', idAlbumSelected)

  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    var listTracks = response.items
    var tplLi = "<li><a target='_blank' href='<%PREVIEW-URL%>'><%TRACK-NAME%></a></li>"
    var lisHtmlTracks = listTracks.map(function (track) {
      var currentLi = tplLi.replace('<%PREVIEW-URL%>', track.preview_url)
      currentLi = currentLi.replace('<%TRACK-NAME%>', track.name)
      return currentLi
    })
    $('#list-tracks').html(lisHtmlTracks.join(''))
    $('#select-track').removeClass('hidden')
  })
})
