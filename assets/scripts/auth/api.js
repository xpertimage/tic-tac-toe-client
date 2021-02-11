const config = require('./../config')
const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const signOut = function (loggedInToken) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out:' + loggedInToken
  })
}

module.exports = {
  signUp,
  signIn
}
