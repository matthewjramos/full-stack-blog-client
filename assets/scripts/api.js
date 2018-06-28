const store = require('./store.js')


const signUp = function (data) {
  console.log('sign up')
  console.log('sign up data is ', data)
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-up',
    data: data
  })
}

const signIn = function (data) {
  console.log('sign in')
  console.log('sign in data is ', data)
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  console.log('change password')
  console.log('change pass data is ', data)
  console.log('store is ', store)
  console.log('token is ', store.user.token)
  return $.ajax({
    method: 'PATCH',
    url: 'http://localhost:4741/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  console.log('sign out')
  console.log('token is ', store.user.token)
  return $.ajax({
    method: 'DELETE',
    url: 'http://localhost:4741/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword
}
