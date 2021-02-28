
const hideAll = function () {
  $('#sign-out').hide()
  $('#sign-in').hide()
  $('#change-password').hide()
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  $('#start-game').hide()
  $('.container').hide()
  $('.backButton').hide()
  $('#sign-up').hide()
  $('#settings').hide()
  $('#history').hide()
  $('#game-history').text('')
  $('#winner-message').text('')
  $('#0,#1,#2,#3,#4,#5,#6,#7,#8').css('color', 'black')
}
const form1 = function () {
  hideAll()
  $('#sign-up-button').show()
  $('#sign-in-button').show()
}
const form2 = function () {
  hideAll()
  $('#sign-up').show()
}
const form3 = function () {
  hideAll()
  $('#sign-in').show()
}
const form4 = function () {
  hideAll()
  $('#sign-out').show()
  $('#settings').show()
  $('#start-game').show()
}
const form4a = function () {
  hideAll()
  $('#sign-out').show()
  $('#start-game').show()
  $('.container').show()
  $('#0,#1,#2,#3,#4,#5,#6,#7,#8').removeAttr('disabled')
  $('#0,#1,#2,#3,#4,#5,#6,#7,#8').text('')
}
const form5 = function () {
  hideAll()
  $('#change-password').show()
  $('#sign-out').show()
  $('#history').show()
  $('.backButton').show()
  $('.game-history').show()
}
const form6 = function () {
  hideAll()
  $('#sign-out').show()
  $('#sign-up').show()
}
const form7 = function () {
  hideAll()
  $('#sign-out').show()
  $('#sign-up').show()
}
const form8 = function () {
  hideAll()
  $('#sign-up').show()
  $('#sign-in').show()
}

module.exports = {
  hideAll,
  form1,
  form2,
  form3,
  form4,
  form4a,
  form5,
  form6,
  form7,
  form8
}
