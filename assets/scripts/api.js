const store = require('./store.js')

// Auth starts

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: 'http://localhost:4741/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'http://localhost:4741/sign-out',
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
    url: 'http://localhost:4741/playlists/',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      contentType: 'application/json'
    },
    data: data
  })
}

const getPlaylistSubmit = function (data) {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:4741/playlists/',
    headers: {
      contentType: 'application/json'
    },
    data: data
  })
}

const findPlaylistSubmit = function (data) {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:4741/playlists/' + data.playlist.id,
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
    url: 'http://localhost:4741/playlists/' + playlistId,
    headers: {
      Authorization: 'Token token=' + store.user.token,
      contentType: 'application/json'
    },
    data: data
  })
}

const deletePlaylistSubmit = (playlistId) => {
  return $.ajax({
    url: 'http://localhost:4741/playlists/' + playlistId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Playlist ends

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
  deletePlaylistSubmit: deletePlaylistSubmit
  // Playlist ends
}
