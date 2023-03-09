const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const app = express();
const { PORT = 3000 } = process.env;

// подключаемся к серверу mongo - mongodb://localhost:27017/mestodb
mongoose.connect('mongodb://127.0.0.1:27017/mestodb ')
  .then(() => {
    console.log('Connected! Yyyepp!');
  })
  .catch((err) => {
    console.log('Error on database');
    console.log(err);
  });

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
    _id: '6409b0eb1e9e0d50e2f004f7',
  };
  next();
});
app.use('/', router);

app.listen(PORT, () => {
  console.log(`ALL GOOD. Port ${PORT} is working`);
});
