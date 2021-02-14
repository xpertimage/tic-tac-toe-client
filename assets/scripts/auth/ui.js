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

  // After a succesful sign-in set the HTTP header in ajax
  // to contain the user token for all other HTTP communications
  // $.ajaxSetup({
  //   headers: { Authorization: 'Bearer ' + response.user.token }
  // })
  store.user = response
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
