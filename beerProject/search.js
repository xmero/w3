/* eslint no-undef: "off" */

$('#search-beer form').on('submit', function (e) {
  e.preventDefault()
  var urlSearch = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=<%QUERY%>'
  var valueSearched = $(this).find('input').val()
  var urlFilled = urlSearch.replace('<%QUERY%>', valueSearched)

  $.ajax({
    url: urlFilled
  })
        .done(function (response) {
          var listBeer = response
          var optionsBeer = listBeer.map(function (elem) {
            return "<option value='" + elem.id + "'>" + elem.name + '</option>'
          })
          $('#list-beers').html(optionsBeer.join(''))
          $('#select-beer').removeClass('hidden')
        })
})

$('#select-beer form').on('change', function (e) {
  e.preventDefault()
  var urlSearch = 'https://quiet-inlet-67115.herokuapp.com/api/beer/<%ID-BEER%>'
  var valueSearched = $(this).find('select').val()
  var urlFilled = urlSearch.replace('<%ID-BEER%>', valueSearched)

  $.ajax({
    url: urlFilled
  })
        .done(function (response) {
          console.log(response)
          var displayDetail = response
          var detailBeer = Object.keys(displayDetail).map(function (elem) {
            return "<li value='" + elem + "'>" + elem + ' : ' + displayDetail[elem] + '</li>'
          })
          $('#list-details').html(detailBeer.join(''))
          $('#show-details').removeClass('hidden')
        })
})

