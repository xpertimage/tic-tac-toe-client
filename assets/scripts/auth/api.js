const config = require('./../config')
// Set the HTTP header so that it always
// contains the Authorization token for
// all server HTTP request in this session
// const headerSetup = function () {
//   return $.ajaxSetup({
//     beforeSend: function (xhr) {
//       xhr.setRequestHeader('Authorization', 'Bearer t-', store.user.token)
//     }
//   })
// }

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

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    data: {}
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
