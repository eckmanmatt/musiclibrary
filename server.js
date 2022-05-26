const express = require('express')
const mongoose = require('mongoose')


const app = express()

app.use(express())

app.listen(3000, () => {
  console.log('hey listen');
})


//Local host 3000 doesnt work for me
//replaced with 127.0.0.1
mongoose.connect('mongodb://127.0.0.1:27017/merncrud')
mongoose.connection.on('open', () => {
  console.log('connection on');
})
