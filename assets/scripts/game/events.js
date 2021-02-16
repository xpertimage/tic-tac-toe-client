const api = require('./api')
// require the ui file, so we can update the dom after an API request
const ui = require('./ui')
const store = require('../store')

const squareClick = function (event) {
  event.preventDefault()
  console.log('SquareClick - Event=' , event)
  // send data to api for sign up
  // api.signUp(data)
  //   .then(ui.signUpSuccess)
  //   .catch(ui.signUpFailure)
}
module.exports = {
  squareClick
}
