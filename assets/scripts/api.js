const store = require('./store.js')

// Auth starts
const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://thawing-hamlet-16855.herokuapp.com/sign-up',
    data: data
  })
}
const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://thawing-hamlet-16855.herokuapp.com/sign-in',
    data: data
  })
}
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://thawing-hamlet-16855.herokuapp.com/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'https://thawing-hamlet-16855.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// Auth ends

// Playlist starts
const createPlaylistSubmit = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://thawing-hamlet-16855.herokuapp.com/playlists/',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      contentType: 'application/json'
    },
    data: data
  })
}
const getPlaylistSubmit = function () {
  return $.ajax({
    method: 'GET',
    url: 'https://thawing-hamlet-16855.herokuapp.com/playlists/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: data
  })
}
const findPlaylistSubmit = function (data) {
  return $.ajax({
    method: 'GET',
    url: 'https://thawing-hamlet-16855.herokuapp.com/playlists/' + data.playlist.id,
    headers: {
      contentType: 'application/json'
    },
    data: {
      id: data.playlist.id,
      playlist: {
        title: data.playlist.title,
        description: data.playlist.description
      }
    }
  })
}
const updatePlaylistSubmit = function (data, playlistId) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://thawing-hamlet-16855.herokuapp.com/playlists/' + playlistId,
    headers: {
      Authorization: 'Token token=' + store.user.token,
      contentType: 'application/json'
    },
    data: data
  })
}
const deletePlaylistSubmit = (playlistId) => {
  return $.ajax({
    url: 'https://thawing-hamlet-16855.herokuapp.com/playlists/' + playlistId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// Playlist ends

// Song starts
const createSongSubmit = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://thawing-hamlet-16855.herokuapp.com/songs/',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      contentType: 'application/json'
    },
    data: data
  })
}

const getSongSubmit = function () {
  return $.ajax({
    method: 'GET',
    url: 'https://thawing-hamlet-16855.herokuapp.com/songs/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: data
  })
}

const deleteSongSubmit = (songId) => {
  return $.ajax({
    url: 'https://thawing-hamlet-16855.herokuapp.com/songs/' + songId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Song ends

module.exports = {
  // Auth starts
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword,
  // Auth ends

  // Playlist starts
  createPlaylistSubmit: createPlaylistSubmit,
  getPlaylistSubmit: getPlaylistSubmit,
  findPlaylistSubmit: findPlaylistSubmit,
  updatePlaylistSubmit: updatePlaylistSubmit,
  deletePlaylistSubmit: deletePlaylistSubmit,
  // Playlist ends

  // Song starts
  createSongSubmit: createSongSubmit,
  getSongSubmit: getSongSubmit,
  deleteSongSubmit: deleteSongSubmit
  // Song ends
}
