const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Music = require('./models/music.js')
const app = express()





app.use(express.json())
app.use(cors())

app.post('/music', (req, res) => {
  Music.create(req.body, (err, createdMusic) => {
      res.json(createdMusic)
  })
})

app.get('/music', (req, res) => {
  Music.find({}, (err, foundMusic) => {
    // console.log(foundMusic);
    res.json(foundMusic)
  })
})

app.put('/music/:id', (req, res) => {
  Music.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMusic) => {
    res.json(updatedMusic)
  })
})

app.delete('/music/:id', (req, res) => {
  Music.findByIdAndRemove(req.params.id, (err, deletedMusic) => {
    res.json(deletedMusic)
  })
})









app.listen(3000, () => {
  console.log('hey listen');
})


//Local host 3000 doesnt work for me
//replaced with 127.0.0.1
mongoose.connect('mongodb://127.0.0.1:27017/musiclibrary')
mongoose.connection.on('open', () => {
  console.log('connection on');
})
