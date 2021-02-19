const api = require('./api')
// require the ui file, so we can update the dom after an API request
const ui = require('./ui')
const store = require('../store')

const onSquareClick = function (event) {
  event.preventDefault()
  // console.log('SquareClick - Event=', event)
  // send data to api for sign up
  api.squareClick(event)
  //   .then(ui.signUpSuccess)
  //   .catch(ui.signUpFailure)
}
const onStartGame = function (event) {
  event.preventDefault()
  console.log('Start Game Button')
  $('.container').css('visibility', 'visible')
  api.startGame(event)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

module.exports = {
  onSquareClick,
  onStartGame
}
