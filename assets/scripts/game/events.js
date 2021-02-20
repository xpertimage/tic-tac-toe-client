const api = require('./api')
// require the ui file, so we can update the dom after an API request
const ui = require('./ui')
const store = require('../store')
// Boolean variable used as a flag to switch between 'X' and 'O'
let xORo = true

const onSquareClick = function (event) {
  event.preventDefault()
  console.log(event.target)
  // If the button/ square clicked has no text then place the appropriate
  // mark in the square
  if ($(event.target).text() === '') {
    if (xORo) {
      $(event.target).text('X')
      xORo = false
    } else {
      $(event.target).text('O')
      xORo = true
    }
  }
  api.squareClick(event)
  event.target.disabled = true

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
