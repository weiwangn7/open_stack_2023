const { info, error } = require('./logger');

//REQUEST LOGGER
const requestLogger = (req, res, next) => {
  info('Method:', req.method);
  info('Path:  ', req.path);
  info('Body:  ', req.body);
  info('---');
  next();
};

//UNKNOWN ENDPOINT HANDLING
const unknownEndpoint = (req, res) => {
  res.status(404).send({
    error: 'unknown endpoint',
  });
};

//ERROR HANDLING
const errorhandler = (err, req, res, next) => {
  error(err.message);

  if (err.name === 'CastError') {
    return res.status(400).send({
      error: 'malformatted id',
    });
  } else if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: err.message,
    });
  }

  next(err);
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorhandler,
};
