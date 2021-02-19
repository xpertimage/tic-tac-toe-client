'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

// use require without a reference to ensure a file is bundled
// require('./example')
// Jquery function to prevent the jquery commands from executing
// until the complete HTML page loads.
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#start-game').on('click', gameEvents.onStartGame)

  // Code below to handle clicking on the game board
  $('.container').on('click', gameEvents.onSquareClick)
})
