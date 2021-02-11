'use strict'
const user = {
  userToken: undefined,
  email: undefined,
  id: undefined,
  createdAt: undefined,
  updatedAt: undefined
}
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  // console.log('Inside app.js.')
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
module.exports = {
  user
}
