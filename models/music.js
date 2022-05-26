const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
  artist: String
})

const Music = mongoose.model('music', musicSchema)

module.exports = Music
