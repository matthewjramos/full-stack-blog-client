const store = require('./store.js')
const handlebars = require('./playlists.handlebars')
const playlistEvents = require('./events.js')

// Auth starts
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
  // figure out why this isnt working
  $('#content').html('Failed to sign out.', error)
}

// Auth ends

// Playlist starts

const createPlaylistSuccess = function (response) {
  $('#content').html('Playlist created successfully!')
  $('#display').html(response.playlist.title)
  console.log('playlist is ', response.playlist.title)
  console.log('playlist is ', response.playlist)
  // $('.update-playlist').on('submit', playlistEvents.updatePlaylist)
  // $('.delete-playlist').on('submit', playlistEvents.deletePlaylist)
}

const createPlaylistError = function (error) {
  $('#content').html('Playlist creation unsuccessful', error)
  console.log('error is ', (error))
}

// use handlebars for below
const getPlaylistSuccess = function (response) {
  $('#content').html('Playlists retrieved successfully!')
  $('#display').text(response.playlists)
  console.log('playlist lists is ', response.playlists)
  const showPlaylistsHtml = handlebars({ playlists: response.playlists })
  $('#content').append(showPlaylistsHtml)
}
// use handlebars for above

const getPlaylistError = function (error) {
  $('#content').html('Playlist retrieval unsuccessful', error)
  console.log('error is ', (error))
}

// WIP starts

const deletePlaylistSuccess = function (response) {
  $('#content').html('Playlist deleted successfully!')
  $('#display').text(response)
  console.log('playlist lists is ', response.playlist)
}
const deletePlaylistError = function (error) {
  $('#content').html('Cannot delete playlist', error)
  console.log('error is ', (error))
}

const findPlaylistSuccess = function (response) {
  data.id = response.id
  $('#content').html('Playlist found successfully!')
  // $('#display').text(response.playlist)
  console.log('playlist lists is ', response.playlist)
  console.log('data.id is ', data.id)
}
const findPlaylistError = function (error) {
  $('#content').html('Playlist find unsuccessful', error)
  console.log('error is ', (error))
}

const updatePlaylistSuccess = function (response) {
  $('#content').html('Playlist updated successfully!')
  $('#display').text(response.playlist)
  console.log('playlist lists is ', response.playlist)
}
const updatePlaylistError = function (error) {
  $('#content').html('Playlist update unsuccessful', error)
  console.log('error is ', (error))
}

// WIP ends

// Playlist ends

module.exports = {
  // Auth starts
  signInSuccess: signInSuccess,
  signInError: signInError,
  signUpSuccess: signUpSuccess,
  signUpError: signUpError,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordError: changePasswordError,
  signOutSuccess: signOutSuccess,
  signOutError: signOutError,
  // Auth ends
  // Playlist starts
  createPlaylistSuccess: createPlaylistSuccess,
  createPlaylistError: createPlaylistError,
  getPlaylistSuccess: getPlaylistSuccess,
  getPlaylistError: getPlaylistError,
  deletePlaylistSuccess: deletePlaylistSuccess,
  deletePlaylistError: deletePlaylistError,
  findPlaylistSuccess: findPlaylistSuccess,
  findPlaylistError: findPlaylistError,
  updatePlaylistSuccess: updatePlaylistSuccess,
  updatePlaylistError: updatePlaylistError
  // Playlist ends
}
