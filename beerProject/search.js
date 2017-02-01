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
          var listBeers = response
          var tplOption = "<option value='<%BEER-ID%>'><%BEER-NAME%></option>"
          var optionsBeers = listBeers.map(function (beer) {
            var currentOption = tplOption.replace('<%BEER-ID%>', beer.id)
            currentOption = currentOption.replace('<%BEER-NAME%>', beer.name)
            return currentOption
          })
          optionsBeers.unshift('<option disabled selected>Select a Beer</option>')
          $('#list-beers').html(optionsBeers.join(''))
          $('#select-beer').removeClass('hidden')
          $('#show-details').addClass('hidden')
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
          // var detailBeer = Object.keys(displayDetail).map(function (elem) {
          //   return "<li value='" + elem + "'>" + elem + ' : ' + displayDetail[elem] + '</li>'
          // })
          var defaultImg = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSsqPa2ecenjefSjqHWav-B-u59xZjQGVnEst_406IR3XmELfmSKg'
          var displayImg = displayDetail.labels ? displayDetail.labels['medium'] : defaultImg

          $('#list-details-name').html(displayDetail['name'])
          $('#list-details-abv').html('Alcohol by volume: ' + displayDetail['abv'])
          $('#list-details-description').html(displayDetail['description'])
          $('#list-details-label').attr('src', displayImg)
          $('#show-details').removeClass('hidden')
        })
})

