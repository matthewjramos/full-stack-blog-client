const store = require('./store.js')
// const playlistEvents = require('./events.js')

const signInSuccess = function (response) {
  store.user = response.user
  $('#content').html('Signed in successfully!')
  console.log('store user is ', store.user)
  console.log('token is ', store.user.token)
}
const signInError = function (error) {
  $('#content').html('Sign in unsuccessful, please try again!', (error))
}

const signUpSuccess = function (response) {
  $('#content').html('Signed up successfully!')
}
const signUpError = function (error) {
  $('#content').html('Sign up unsuccessful, please try again.', (error))
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#content').html('Password changed successfully!')
}
const changePasswordError = function (error) {
  $('#content').html('Password change unsuccessful, please try again.', (error))
}

const signOutSuccess = function (signOutResponse) {
  delete store.user
  $('#content').html('Signed out successfully!')
}

const signOutError = function (error) {
  $('#content').html('Sign out failure, please try again. ', error)
}

module.exports = {
  signInSuccess: signInSuccess,
  signInError: signInError,
  signUpSuccess: signUpSuccess,
  signUpError: signUpError,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordError: changePasswordError,
  signOutSuccess: signOutSuccess,
  signOutError: signOutError
}
