
const getFormFields = require('../../lib/get-form-fields.js')
const store = require('./store.js')

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

module.exports = {
  createPlaylist: createPlaylist,
  getPlaylist: getPlaylist,
  findPlaylist: findPlaylist,
  updatePlaylist: updatePlaylist,
  deletePlaylist: deletePlaylist
}
