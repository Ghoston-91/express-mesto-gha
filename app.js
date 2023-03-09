const express = require('express');
const mongoose = require('mongoose');

const {PORT = 3000 } = process.env
const app = express();

// подключаемся к серверу mongo
mongoose.connect('mongodb://127.0.0.1:27017/mestodb')
  .then(() => {
    console.log('Connected! Yyyepp!')
  })
  .catch((err) => {
    console.log('Error on database')
    console.log(err)
  })

app.listen(PORT, () => {
  console.log(`ALL GOOD. Port ${PORT} is working`)
})

