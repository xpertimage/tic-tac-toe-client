const store = require('../store')
const signUpSuccess = function (response) {
  $('#error-message').text('Thank you for signing up')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function (response) {
  $('#error-message').text('Sign up failed, try again')
}

const signInSuccess = function (response) {
  // if the User is succesful at signing in then
  // store the HTTP response from the server in the 'user'
  // variable. The token will be used in any other HTTP
  // requests during this session.
  $('#change-password').css('visibility', 'visible')
  $('#sign-out').css('visibility', 'visible')
  $('#start-game').css('visibility', 'visible')
  $('#sign-in').css('visibility', 'hidden')
  $('#sign-up').css('visibility', 'hidden')
  // $('.container').css('visibility', 'visible')
  store.user = response
  // Show the change-password form and the sign-out button
  $('#error-message').text('Thank you for signing in')
  $('#sign-in').trigger('reset')
}

const signInFailure = function (response) {
  $('#error-message').text('Sign in failed, please try again')
}

const changePasswordSuccess = function (response) {
  $('#error-message').text('Password changed.')
  $('#changePassword').trigger('reset')
}
const changePasswordFailure = function (response) {
  $('#error-message').text('Password change failed. Please try again.')
}

const signOutSuccess = function (response) {
  $('#change-password').css('visibility', 'hidden')
  $('#sign-out').css('visibility', 'hidden')
  $('#error-message').text('Thanks for playing. You are now signed out')
}

const signOutFailure = function (response) {
  $('#error-message').text('Sign Out failed')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
