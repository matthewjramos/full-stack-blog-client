
const getFormFields = require('../../lib/get-form-fields.js')
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
  $(event.target).trigger('reset')
}

const getPlaylist = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  api.getPlaylistSubmit()
    .then(ui.getPlaylistSuccess)
    .catch(ui.getPlaylistError)
    // .then(api.getSongSubmit)
    // .then(ui.getSongSuccess)
    // .catch(ui.getSongError)
}
const findPlaylist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.findPlaylistSubmit(data)
}
const showUpdatePlaylist = function (event) {
  $('.update-playlist').show()
}
const updatePlaylist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const playlistId = $(event.target).closest('ul').attr('data-id')
  api.updatePlaylistSubmit(data, playlistId)
    .then(ui.updatePlaylistSuccess)
    .catch(ui.updatePlaylistError)
  $(event.target).trigger('reset')
}
const deletePlaylist = function (event) {
  event.preventDefault()
  const playlistId = $(event.target).closest('ul').attr('data-id')
  api.deletePlaylistSubmit(playlistId)
    .then(ui.deletePlaylistSuccess)
    .catch(ui.deletePlaylistError)
}
// Playlist ends

// Song starts
const createSong = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createSongSubmit(data)
    .then(ui.createSongSuccess)
    .catch(ui.createSongError)
  $(event.target).trigger('reset')
}

const getSong = function (event) {
  event.preventDefault()
  api.getSongSubmit()
    .then(ui.getSongSuccess)
    .catch(ui.getSongError)
}

const deleteSong = function (event) {
  event.preventDefault()
  const playlistId = $(event.target).closest('ul').attr('data-id')
  api.deleteSongSubmit(playlistId)
    .then(ui.deleteSongSuccess)
    .catch(ui.deleteSongError)
}

// Song ends

// Auth starts
const signInSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInError)
  $(event.target).trigger('reset')
}
const signUpSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpError)
  $(event.target).trigger('reset')
}
const signOutSubmit = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutError)
}
const changePasswordSubmit = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError)
  $(event.target).trigger('reset')
}
// Auth ends

module.exports = {
  // Playlist starts
  createPlaylist: createPlaylist,
  getPlaylist: getPlaylist,
  findPlaylist: findPlaylist,
  showUpdatePlaylist: showUpdatePlaylist,
  updatePlaylist: updatePlaylist,
  deletePlaylist: deletePlaylist,
  // Playlist ends

  // Song starts
  createSong: createSong,
  getSong: getSong,
  deleteSong: deleteSong,
  // Song ends

  // Auth starts
  signInSubmit: signInSubmit,
  signUpSubmit: signUpSubmit,
  signOutSubmit: signOutSubmit,
  changePasswordSubmit: changePasswordSubmit
  // Auth ends
}
