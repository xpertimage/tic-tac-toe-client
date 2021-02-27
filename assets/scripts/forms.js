const store = require('./store')

const hideAll = function () {
  // Hide all page elements that we don't want
  // displayed
  // $('#sign-out').css('visibility', 'hidden')
  // $('#sign-in').css('visibility', 'hidden')
  // $('#change-password').css('visibility', 'hidden')
  // $('#sign-up-button').css('visibility', 'hidden')
  // $('#sign-in-button').css('visibility', 'hidden')
  // $('#start-game').css('visibility', 'hidden')
  // $('.container').css('visibility', 'hidden')
  // $('.backButton').css('visibility', 'hidden')
  // $('#sign-up').css('visibility', 'hidden')
  // $('#settings').css('visibility', 'hidden')
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
  $('#winner-message').text('')
  $('#0,#1,#2,#3,#4,#5,#6,#7,#8').css('color', 'black')
}
const form1 = function () {
  hideAll()
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  // // This is used for the 'Back' Button functionality
  // store.form.push(form1)
}
const form2 = function () {
  hideAll()
  $('#sign-up').show()
  // // This is used for the 'Back' Button functionality
  // store.form.push(form2)
}
const form3 = function () {
  hideAll()
  $('#sign-in').show()
  // // This is used for the 'Back' Button functionality
  // store.form.push(form3)
}
const form4 = function () {
  hideAll()
  $('#sign-out').show()
  $('#settings').show()
  $('#start-game').show()
  // // This is used for the 'Back' Button functionality
  // store.form.push(form4)
}
const form4a = function () {
  hideAll()
  $('#sign-out').show()
  $('#start-game').show()
  $('.container').show()
  $('#0,#1,#2,#3,#4,#5,#6,#7,#8').removeAttr('disabled')
  $('#0,#1,#2,#3,#4,#5,#6,#7,#8').text('')
  // // This is used for the 'Back' Button functionality
  // store.form.push(form4a)
}
const form5 = function () {
  hideAll()
  $('#change-password').show()
  $('#sign-out').show()
  $('.backButton').show()
  // // This is used for the 'Back' Button functionality
  // store.form.push(form5)
}
const form6 = function () {
  hideAll()
  $('#sign-up').show()
  // // This is used for the 'Back' Button functionality
  // store.form.push(form6)
}
const form7 = function () {
  hideAll()
  $('#sign-up').show()
  // // This is used for the 'Back' Button functionality
  // store.form.push(form7)
}
const form8 = function () {
  hideAll()
  $('#sign-up').show()
  $('#sign-in').show()
  // // This is used for the 'Back' Button functionality
  // store.form.push(form8)
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
