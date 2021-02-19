const store = require('../store')
const startGameSuccess = function (response) {
  $('#error-message').text('Let the games begin!')
  store.game = response
  console.log(store.game.game.cells)
}

const startGameFailure = function (response) {
  $('#error-message').text('Game Start failed, try again')
}
module.exports = {
  startGameSuccess,
  startGameFailure
}
