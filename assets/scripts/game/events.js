const api = require('./api')
// require the ui file, so we can update the dom after an API request
const ui = require('./ui')
const store = require('../store')
// Boolean variable used as a flag to switch between 'X' and 'O'
let whosTurn = 'X'
let myArray = []
// checkForWinner is called with each move / click
// to see if either party won with the last move
const checkForWinner = function (arg) {
  let myIndex
  function isOccupiedByArg (element) {return element === arg}
  for (let i=0; i<9; i++){
    if (store.game.cells[i] === arg) {myArray.push(i)}
    console.log('Arg= ' + arg)
    console.log('Index ' + i + store.game.cells[i])
  }
  console.log('MyArray:' + myArray)
  if (JSON.stringify(myArray) === JSON.stringify([0,1,2]) || JSON.stringify(myArray) === JSON.stringify([3,4,5])
  || JSON.stringify(myArray) === JSON.stringify([6,7,8]) || JSON.stringify(myArray) === JSON.stringify([0,3,6])
  || JSON.stringify(myArray) === JSON.stringify([1,4,7]) || JSON.stringify(myArray) === JSON.stringify([2,5,8])
  || JSON.stringify(myArray) === JSON.stringify([0,4,8]) || JSON.stringify(myArray) === JSON.stringify([2,4,6]))
   {
     console.log ('Winner Winner Chicken Dinner!!')
   }
  myArray=[]
  }


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
    checkForWinner(whosTurn)
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
