const api = require('./api')
// require the ui file, so we can update the dom after an API request
const ui = require('./ui')
const store = require('../store')
// const display = require('../forms')
// Boolean variable used as a flag to switch between 'X' and 'O'
let whosTurn = 'X'
let myArray = []
// let marks = ''
let winner = false
// checkForWinner is called with each move / click
// to see if either party won with the last move
// The index argument represents the square clicked on as in:
// starting at the top left corner = 0 moving left to right
// top to bottom with the bottom right square =8.
// The value argument is either 'X' or 'O'
const checkForWinner = function (index, value) {
  winner = false
  myArray = []
  // Populate myArray with the index of each location where 'value' (X or O) is
  // found.
  for (let i = 0; i < 9; i++) {
    if (store.game.cells[i] === value) { myArray.push(i) }
  }
  // Check for all possible winning combinations.
  if ((myArray.indexOf(0) !== -1) && (myArray.indexOf(1) !== -1) && (myArray.indexOf(2) !== -1)) {
    winner = true
    $('#0,#1,#2').css('color', 'red')
  }
  if ((myArray.indexOf(3) !== -1) && (myArray.indexOf(4) !== -1) && (myArray.indexOf(5) !== -1)) {
    winner = true
    $('#3,#4,#5').css('color', 'red')
  }
  if ((myArray.indexOf(6) !== -1) && (myArray.indexOf(7) !== -1) && (myArray.indexOf(8) !== -1)) {
    winner = true
    $('#6,#7,#8').css('color', 'red')
  }
  if ((myArray.indexOf(0) !== -1) && (myArray.indexOf(3) !== -1) && (myArray.indexOf(6) !== -1)) {
    winner = true
    $('#0,#3,#6').css('color', 'red')
  }
  if ((myArray.indexOf(1) !== -1) && (myArray.indexOf(4) !== -1) && (myArray.indexOf(7) !== -1)) {
    winner = true
    $('#1,#4,#7').css('color', 'red')
  }
  if ((myArray.indexOf(2) !== -1) && (myArray.indexOf(5) !== -1) && (myArray.indexOf(8) !== -1)) {
    winner = true
    $('#2,#5,#8').css('color', 'red')
  }
  if ((myArray.indexOf(0) !== -1) && (myArray.indexOf(4) !== -1) && (myArray.indexOf(8) !== -1)) {
    winner = true
    $('#0,#4,#8').css('color', 'red')
  }
  if ((myArray.indexOf(2) !== -1) && (myArray.indexOf(4) !== -1) && (myArray.indexOf(6) !== -1)) {
    winner = true
    $('#2,#4,#6').css('color', 'red')
  }
  if (winner) {
    $('#winner-message').text(value + '  is the Winner Winner Chicken Dinner!!')
    // Disable the game board buttons
    $('#0,#1,#2,#3,#4,#5,#6,#7,#8').attr('disabled', 'disabled')
    onUpdateGame(index, whosTurn, true)
  } else {
    onUpdateGame(index, whosTurn, false)
  }
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
  whosTurn = 'X'
  event.preventDefault()
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
