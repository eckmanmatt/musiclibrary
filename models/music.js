const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
  artist: String,
  album: String,
  song: String,
  year: Number
})

const Music = mongoose.model('music', musicSchema)

module.exports = Music
