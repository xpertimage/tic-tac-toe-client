const api = require('./api')
// require the ui file, so we can update the dom after an API request
const ui = require('./ui')
const store = require('../store')
// Boolean variable used as a flag to switch between 'X' and 'O'
let whosTurn = 'X'
let myArray = []
// checkForWinner is called with each move / click
// to see if either party won with the last move
const checkForWinner = function (index, value) {
  // console.log('Game.Events.js.checkForWinner!')
  // let myIndex
  // function isOccupiedByArg (element) { return element === arg }
  for (let i = 0; i < 9; i++) {
    if (store.game.cells[i] === value) { myArray.push(i) }
  }
  if (JSON.stringify(myArray) === JSON.stringify([0, 1, 2]) || JSON.stringify(myArray) === JSON.stringify([3, 4, 5]) ||
  JSON.stringify(myArray) === JSON.stringify([6, 7, 8]) || JSON.stringify(myArray) === JSON.stringify([0, 3, 6]) ||
  JSON.stringify(myArray) === JSON.stringify([1, 4, 7]) || JSON.stringify(myArray) === JSON.stringify([2, 5, 8]) ||
  JSON.stringify(myArray) === JSON.stringify([0, 4, 8]) || JSON.stringify(myArray) === JSON.stringify([2, 4, 6])) {
    $('#error-message').text('Winner Winner Chicken Dinner!!')
    // Disable the game board buttons
    $('#0, #1, #2, #3, #4, #5, #6, #7, #8').attr('disabled', 'disabled')
    onUpdateGame(index, whosTurn, true)
  } else {
    onUpdateGame(index, whosTurn, false)
  }

  myArray = []
}

const onSquareClick = function (event) {
  event.preventDefault()
  // If the button/ square clicked has no text then place the appropriate
  // mark in the square
  if ($(event.target).text() === '') {
    $(event.target).text(whosTurn)
    // Add the appropriate mark (X or O) to the correct index
    // in the Game Cells array. Target.id represents the index
    store.game.cells[event.target.id] = whosTurn
    checkForWinner(event.target.id, whosTurn)
    // Alternate between 'X' and 'O'
    if (whosTurn === 'X') { whosTurn = 'O' } else { whosTurn = 'X' }
  }
}
const onStartGame = function (event) {
  event.preventDefault()
  $('.container').css('visibility', 'visible')
  api.startGame(event)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const onUpdateGame = function (index, value, over) {
  event.preventDefault()
  api.updateGame(index, value, over)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}



module.exports = {
  onUpdateGame,
  onSquareClick,
  onStartGame
}
