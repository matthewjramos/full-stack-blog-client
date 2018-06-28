
const getFormFields = require('../../lib/get-form-fields.js')
const store = require('./store.js')
const api = require('./api.js')


const createPlaylist = function(event) {
  event.preventDefault()
  console.log('clicked create playlist')
  console.log('event is ', (event))
}

const getPlaylist = function(event) {
  event.preventDefault()
  console.log('clicked get playlist')
  console.log('event is ', (event))
}

const findPlaylist = function(event) {
  event.preventDefault()
  console.log('clicked find playlist')
  console.log('event is ', (event))
}

const updatePlaylist = function(event) {
  event.preventDefault()
  console.log('clicked update playlist')
  console.log('event is ', (event))
}

const deletePlaylist = function(event) {
  event.preventDefault()
  console.log('clicked delete playlist')
  console.log('event is ', (event))
}

const signInSubmit = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
  console.log('clicked sign in')
  console.log('event is ', (event))
}

const signUpSubmit = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
  console.log('clicked sign up')
  console.log('event is ', (event))
}
const signOutSubmit = function(event) {
  event.preventDefault()
  api.signOut()
  console.log('clicked sign out')
  console.log('event is ', (event))
}

const changePasswordSubmit = function(event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePassword(data)
  console.log('clicked change pass')
  console.log('event is ', (event))
}

module.exports = {
  createPlaylist: createPlaylist,
  getPlaylist: getPlaylist,
  findPlaylist: findPlaylist,
  updatePlaylist: updatePlaylist,
  deletePlaylist: deletePlaylist,
  signInSubmit: signInSubmit,
  signUpSubmit: signUpSubmit,
  signOutSubmit: signOutSubmit,
  changePasswordSubmit: changePasswordSubmit
}
