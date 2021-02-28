const store = require('../store')
const display = require('../forms')

const startGameSuccess = function (response) {
  $('#error-message').text('Let the games begin!')
  store.game = response.game
  display.form4a()
}

const startGameFailure = function (response) {
  $('#error-message').text('Game Start failed, try again')
}

const updateGameSuccess = function (response) {
  $('#error-message').text('Game stored on server successfully!')
  store.game = response.game

//  $('.container').css('visibility', 'visible')
}

const updateGameFailure = function (response) {
  $('#error-message').text('Game Update failed, try again')
}

const gameHistorySuccess = function (response) {
  // $('#error-message').text('Game history retrieved!')
  $('#error-message').text('Total games played = ' + Object.keys(response.games).length)
  // Loop through the games array of objects to process each one.
  const gameHistoryReadable = response.games.map(item => {
  // gamesTemp is the string that we will use to build the game
  // object in a format suitable to display in html
    let gamesTemp = ''
    // Loop through each object key value pair of an individual game object
    for (const [key, value] of Object.entries(item)) {
      if (key !== '_id' && key !== '__v' && key !== 'owner') {
        gamesTemp += key + ': ' + value + '<br />'
      }
    }
    gamesTemp += '<br />'
    return gamesTemp
  })
  $('.game-history').html('')
  $('.game-history').html(gameHistoryReadable)
}

const gameHistoryFailure = function (response) {
  $('#error-message').text('Game history failed, try again')
}

module.exports = {
  updateGameSuccess,
  updateGameFailure,
  startGameSuccess,
  startGameFailure,
  gameHistorySuccess,
  gameHistoryFailure
}
