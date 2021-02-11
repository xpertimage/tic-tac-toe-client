
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
  user.userToken = response.user.token
  user.email = response.user.email
  user.createdAt = response.user.createdAt
  $('#error-message').text('Thank you for signing in')
  $('#sign-up').trigger('reset')
}

const signInFailure = function (response) {
  $('#error-message').text('Sign in failed, please try again')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
