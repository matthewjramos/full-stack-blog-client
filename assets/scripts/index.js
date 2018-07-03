'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const playlistEvents = require('./events.js')
const handlebars = require('./playlists.handlebars')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Playlist starts
  $('#create-playlist').on('submit', playlistEvents.createPlaylist)
  $('#get-playlist').on('click', playlistEvents.getPlaylist)
  $('#find-playlist').on('submit', playlistEvents.findPlaylist)
  // $('#update-playlist').on('submit', playlistEvents.updatePlaylist)
  // $('#delete-playlist').on('submit', playlistEvents.deletePlaylist)

  $('#content').on('click', '.delete-playlist', playlistEvents.deletePlaylist)
  $('#content').on('click', '.show-update-playlist', playlistEvents.showUpdatePlaylist)
  $('#content').on('submit', '.update-playlist', playlistEvents.updatePlaylist)

  // Playlist ends
  // Auth starts
  $('#sign-up').on('submit', playlistEvents.signUpSubmit)
  $('#sign-in').on('submit', playlistEvents.signInSubmit)
  $('#change-password').on('submit', playlistEvents.changePasswordSubmit)
  $('#sign-out').on('click', playlistEvents.signOutSubmit)
  // Auth ends
})
