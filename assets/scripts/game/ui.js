const store = require('../store')

const startGameSuccess = function (response) {
  $('#error-message').text('Let the games begin!')
  store.game = response.game
  console.log(store.game)
}

const startGameFailure = function (response) {
  $('#error-message').text('Game Start failed, try again')
}

module.exports = {
  startGameSuccess,
  startGameFailure
}
