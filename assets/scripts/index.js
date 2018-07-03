'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const playlistEvents = require('./events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Playlist starts
  $('#create-playlist').on('submit', playlistEvents.createPlaylist)
  $('#get-playlist').on('click', playlistEvents.getPlaylist)
  $('#find-playlist').on('submit', playlistEvents.findPlaylist)
  // Playlist ends

  // for handlebars-generated items
  $('#content').on('click', '.delete-playlist', playlistEvents.deletePlaylist)
  $('#content').on('click', '.show-update-playlist', playlistEvents.showUpdatePlaylist)
  $('#content').on('submit', '.update-playlist', playlistEvents.updatePlaylist)
  // end handlebars-generated items

  // hidden on start
  $('#create-playlist').hide()
  $('#get-playlist').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  // end hidden

  // Auth starts
  $('#sign-up').on('submit', playlistEvents.signUpSubmit)
  $('#sign-in').on('submit', playlistEvents.signInSubmit)
  $('#change-password').on('submit', playlistEvents.changePasswordSubmit)
  $('#sign-out').on('click', playlistEvents.signOutSubmit)
  // Auth ends
})
