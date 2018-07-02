const store = require('./store.js')
const handlebars = require('./playlists.handlebars')

// Auth starts

const signUp = function (data) {
  console.log('sign up')
  console.log('sign up data is ', data)
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-up',
    data: data
  })
}

const signIn = function (data) {
  // store.user = data.user
  console.log('sign in')
  console.log('sign in data is ', data)
  // console.log('store user is ', store.user)
  // console.log('token is ', store.user.token)
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  console.log('change password')
  console.log('change pass data is ', data)
  console.log('store is ', store)
  console.log('token is ', store.user.token)
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
  console.log('sign out')
  console.log('token is ', store.user.token)
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
  console.log('data is ', data)
  console.log('store user token is ', store.user.token)
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
  console.log('data is ', data)
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
  console.log(data.playlist.id)
  console.log('data is ', data)
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

const updatePlaylistSubmit = function (data) {
  console.log(data.playlist.id)
  console.log('data is ', data)
  console.log('store user token is ', store.user.token)
  return $.ajax({
    method: 'PATCH',
    url: 'http://localhost:4741/playlists/' + data.playlist.id,
    headers: {
      Authorization: 'Token token=' + store.user.token,
      contentType: 'application/json'
    },
    data: {
      playlist: {
        title: data.playlist.title,
        description: data.title.description
      }
    }
  })
}

// const deletePlaylistSubmit = function (data) {
//   console.log(data.playlist.id)
//   console.log('data is ', data)
//   console.log('store user token is ', store.user.token)
//   return $.ajax({
//     method: 'DELETE',
//     url: 'http://localhost:4741/playlists/' + data.playlist.id,
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
//     data: data.id
//   })
// }

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
