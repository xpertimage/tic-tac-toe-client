const config = require('./../config')
const store = require('./../store')
const squareClick = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    // Include the old and new passwords
    data: data,
    // Include the token received upon sign-in as
    // authorization
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateGame = function (index, value, over) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    data: {
      game:
      {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    },
    // Include the token received upon sign-in as
    // authorization
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const startGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data: {},
    // Include the token received upon sign-in as
    // authorization
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  startGame,
  updateGame,
  squareClick
}
