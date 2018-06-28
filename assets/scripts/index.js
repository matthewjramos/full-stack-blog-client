'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
 const playlistEvents = require('./events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
// playlists
  $('#create-playlist').on('click', playlistEvents.createPlaylist)
  $('#get-playlist').on('click', playlistEvents.getPlaylist)
  $('#find-playlist').on('click', playlistEvents.findPlaylist)
  $('#update-playlist').on('click', playlistEvents.updatePlaylist)
  $('#delete-playlist').on('click', playlistEvents.deletePlaylist)
// users
  $('#sign-up').on('submit', playlistEvents.signUpSubmit)
  $('#sign-in').on('submit', playlistEvents.signInSubmit)
  $('#change-password').on('submit', playlistEvents.changePasswordSubmit)
  $('#sign-out').on('click', playlistEvents.signOutSubmit)
})
