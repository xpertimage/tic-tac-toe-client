const store = require('./store')

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
  $('.backButton').css('visibility', 'hidden')
  $('#sign-up').css('visibility', 'hidden')
  $('#settings').css('visibility', 'hidden')
  $('#winner-message').text('')
  $('#0,#1,#2,#3,#4,#5,#6,#7,#8').css('color', 'black')
}
const form1 = function () {
  hideAll()
  $('#sign-up-button').css('visibility', 'visible')
  $('#sign-in-button').css('visibility', 'visible')
  // // This is used for the 'Back' Button functionality
  // store.form.push(form1)
}
const form2 = function () {
  hideAll()
  $('#sign-up').css('visibility', 'visible')
  // // This is used for the 'Back' Button functionality
  // store.form.push(form2)
}
const form3 = function () {
  hideAll()
  $('#sign-in').css('visibility', 'visible')
  // // This is used for the 'Back' Button functionality
  // store.form.push(form3)
}
const form4 = function () {
  hideAll()
  $('#sign-out').css('visibility', 'visible')
  $('#settings').css('visibility', 'visible')
  $('#start-game').css('visibility', 'visible')
  // // This is used for the 'Back' Button functionality
  // store.form.push(form4)
}
const form4a = function () {
  hideAll()
  $('#sign-out').css('visibility', 'visible')
  $('#start-game').css('visibility', 'visible')
  $('.container').css('visibility', 'visible')
  $('#0,#1,#2,#3,#4,#5,#6,#7,#8').removeAttr('disabled')
  $('#0,#1,#2,#3,#4,#5,#6,#7,#8').text('')
  // // This is used for the 'Back' Button functionality
  // store.form.push(form4a)
}
const form5 = function () {
  hideAll()
  $('#change-password').css('visibility', 'visible')
  $('#sign-out').css('visibility', 'visible')
  $('.backButton').css('visibility', 'visible')
  // // This is used for the 'Back' Button functionality
  // store.form.push(form5)
}
const form6 = function () {
  hideAll()
  $('#sign-up').css('visibility', 'visible')
  // // This is used for the 'Back' Button functionality
  // store.form.push(form6)
}
const form7 = function () {
  hideAll()
  $('#sign-up').css('visibility', 'visible')
  // // This is used for the 'Back' Button functionality
  // store.form.push(form7)
}
const form8 = function () {
  hideAll()
  $('#sign-up').css('visibility', 'visible')
  $('#sign-in').css('visibility', 'visible')
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
