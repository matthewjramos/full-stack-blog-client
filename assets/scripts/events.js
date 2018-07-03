
const getFormFields = require('../../lib/get-form-fields.js')
// const store = require('./store.js')
const api = require('./api.js')
const ui = require('./ui.js')
const handlebars = require('./playlists.handlebars')

// Playlist starts

const createPlaylist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createPlaylistSubmit(data)
    .then(ui.createPlaylistSuccess)
    .catch(ui.createPlaylistError)
  console.log('clicked create playlist')
  console.log('event is ', (event))
  console.log(getFormFields(event.target))
}

const getPlaylist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getPlaylistSubmit(data)
    .then(ui.getPlaylistSuccess)
    .catch(ui.getPlaylistError)
  // $('.update-playlist').on('submit', updatePlaylist)
  // $('.delete-playlist').on('submit', deletePlaylist)
  console.log('clicked get playlist')
  console.log('event is ', (event))
}

const findPlaylist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.findPlaylistSubmit(data)
  console.log('clicked find playlist')
  console.log('event target html is ', (event.target).innerHTML)
}

const showUpdatePlaylist = function (event) {
  console.log('clicked show update button')
  console.log(event.target)
  $('.update-playlist').show()
}
const updatePlaylist = function (event) {
  event.preventDefault()
  console.log('clicked update playlist')
  const data = getFormFields(event.target)
  const playlistId = $(event.target).closest('ul').attr('data-id')
  api.updatePlaylistSubmit(data, playlistId)
    .then(ui.updatePlaylistSuccess)
    .then(ui.getPlaylistSuccess)
    .catch(ui.updatePlaylistError)

  $(event.target).trigger('reset')
  console.log('clicked update playlist')
  console.log('event is ', (event))
}

const deletePlaylist = function (event) {
  event.preventDefault()
  console.log('clicked delete playlist')
  console.log('event is ', (event))
  const playlistId = $(event.target).closest('ul').attr('data-id')
  api.deletePlaylistSubmit(playlistId)
    .then(ui.deletePlaylistSuccess)
    .then(ui.getPlaylistSuccess)
    .catch(ui.deletePlaylistError)
}

// Auth starts

const signInSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInError)
  $(event.target).trigger('reset')
  console.log('clicked sign in')
  console.log('event is ', (event))
}

const signUpSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpError)
  $(event.target).trigger('reset')
  console.log('clicked sign up')
  console.log('event is ', (event))
}
const signOutSubmit = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutError)
  console.log('clicked sign out')
  console.log('event is ', (event))
}

const changePasswordSubmit = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError)
  $(event.target).trigger('reset')
  console.log('clicked change pass')
  console.log('event is ', (event))
}

// Auth ends

module.exports = {
  createPlaylist: createPlaylist,
  getPlaylist: getPlaylist,
  findPlaylist: findPlaylist,
  showUpdatePlaylist: showUpdatePlaylist,
  updatePlaylist: updatePlaylist,
  deletePlaylist: deletePlaylist,
  signInSubmit: signInSubmit,
  signUpSubmit: signUpSubmit,
  signOutSubmit: signOutSubmit,
  changePasswordSubmit: changePasswordSubmit
}
