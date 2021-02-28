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
  $('#error-message').text('Game history retrieved!')
  const longString = JSON.stringify(response.games, null, 2)
  $('.game-history').text('')
  $('.game-history').text(longString)
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
