const api = require('./api')
// require the ui file, so we can update the dom after an API request
const ui = require('./ui')
const store = require('../store')
// Boolean variable used as a flag to switch between 'X' and 'O'
let whosTurn = 'X'

// const checkForWinner = function (arg) {
//   store.game.cells.forEach(element) {
//   if (element === arg) {}
// }
// }

const onSquareClick = function (event) {
  event.preventDefault()
  console.log(event.target)
  // If the button/ square clicked has no text then place the appropriate
  // mark in the square
  if ($(event.target).text() === '') {
    $(event.target).text(whosTurn)
    // Add the appropriate mark (X or O) to the correct index
    // in the Game Cells array.
    store.game.cells[event.target.id] = whosTurn
    // Alternate between 'X' and 'O'
    if (whosTurn === 'X') { whosTurn = 'O' } else { whosTurn = 'X' }
    // console.log(store.game.cells)

  }

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
