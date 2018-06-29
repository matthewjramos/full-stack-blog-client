const store = require('./store.js')
// const playlistEvents = require('./events.js')

const signInSuccess = function (response) {
  store.user = response.user
  $('#content').html('Signed in successfully!')
  console.log('store user is ', store.user)
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

module.exports = {
  signInSuccess: signInSuccess,
  signInError: signInError,
  signUpSuccess: signUpSuccess,
  signUpError: signUpError
}
