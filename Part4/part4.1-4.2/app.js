const { URL } = require('./utiles/config');
const { info, err } = require('./utiles/logger');
const { requestLogger, unknownEndpoint, errorhandler } = require('./utiles/middleware');
const blogsRouter = require('./controllers/blogs');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

//CONNECTION
mongoose
  .connect(URL)
  .then(() => {
    info('Connected to MongoDB');
  })
  .catch(err => err(err));

app.use(cors());
// app.use(express.static('build'));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(requestLogger);

app.use('/api/blogs', blogsRouter);

app.use(unknownEndpoint);
app.use(errorhandler);

module.exports = app;
