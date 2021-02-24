const hideAll = function () {
  // Hide all page elements that we don't want
  // displayed
  $('#sign-out').css('visibility', 'hidden')
  $('#sign-in').css('visibility', 'hidden')
  $('#change-password').css('visibility', 'hidden')
  $('#sign-up-button').css('visibility', 'hidden')
  $('#sign-in-button').css('visibility', 'hidden')
  $('#start-game').css('visibility', 'hidden')
  $('.container').css('visibility', 'hidden')
  $('#sign-up').css('visibility', 'hidden')
  $('#settings').css('visibility', 'hidden')
}
const form1 = function () {
  hideAll()
  $('#sign-up-button').css('visibility', 'visible')
  $('#sign-in-button').css('visibility', 'visible')
}
const form2 = function () {
  hideAll()
  $('#sign-up').css('visibility', 'visible')
}
const form3 = function () {
  hideAll()
  $('#sign-in').css('visibility', 'visible')
}
const form4 = function () {
  hideAll()
  $('#sign-out').css('visibility', 'visible')
  $('#settings').css('visibility', 'visible')
  $('#start-game').css('visibility', 'visible')
  // $('.container').css('visibility', 'visible')
}
const form5 = function () {
  hideAll()
  $('#sign-up').css('visibility', 'visible')
}
const form6 = function () {
  hideAll()
  $('#sign-up').css('visibility', 'visible')
}
const form7 = function () {
  hideAll()
  $('#sign-up').css('visibility', 'visible')
}
const form8 = function () {
  hideAll()
  $('#sign-up').css('visibility', 'visible')
}
module.exports = {
  hideAll,
  form1,
  form2,
  form3,
  form4,
  form5,
  form6,
  form7,
  form8
}
