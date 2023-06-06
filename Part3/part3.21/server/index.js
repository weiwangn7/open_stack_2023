// import { phonebook } from './data/data.js';
require('dotenv').config();
const Phonebook = require('./models/person');
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// REQUEST LOGGER
const requestLogger = (req, res, next) => {
  console.log('Method:', req.method);
  console.log('Path:  ', req.path);
  console.log('Body:  ', req.body);
  console.log('---');
  next();
};

//ERROR HANDLING
const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  if (err.name === 'CastError') {
    return res.status(400).send({
      error: 'malformatted id',
    });
  }

  next(err);
};

// UNKNOWN ENDPOINT HANDLING
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

app.use(express.static('build'));
app.use(cors());
app.use(requestLogger);

// GET: SHOW PHONEBOOK
app.get('/api/persons', (req, res) => {
  Phonebook.find({}).then(persons => {
    res.status(200).json(persons);
  });
});

// SUMMARY PHONE BOOK INFORMATION
app.get('/info', (req, res) => {
  Phonebook.find({}).then(persons => {
    res.send(`<p>Phonebook has info for ${persons.length} people <br/> ${new Date()}</p>`);
  });
});

// GET SPECIFIC PERSON'S INFORMATION BY ID
app.get('/api/persons/:id', (req, res, next) => {
  const id = Number(req.params.id);

  Phonebook.find({ id: id })
    .then(person => {
      if (person) res.status(200).json(person);
      else res.status(404).end();
    })
    .catch(err => next(err));
});

// DELETE SPECIFIC PERSON BY ID
app.delete('/api/persons/:id', (req, res, next) => {
  const id = Number(req.params.id);

  Phonebook.deleteOne({ id: id })
    .then(() => {
      res.status(204).json({
        message: 'Deleted',
      });
    })
    .catch(err => next(err));
});

// CREATE A PERSON
app.use(express.json());

//POST AND PUT LOGGER
morgan.token('person', req => {
  return JSON.stringify({ name: req.body.name, number: req.body.number });
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'));

const generateId = () => {
  const id = Math.floor(Math.random() * 1000);
  return id;
};
app.post('/api/persons', async (req, res) => {
  const body = req.body;
  if (body.name !== '') {
    if (body.number !== '') {
      const person = new Phonebook({
        id: generateId(),
        name: body.name,
        number: body.number,
      });

      person.save().then(savedPerson => {
        res.status(200).json(savedPerson);
      });
    } else {
      return res.status(400).json({
        error: 'The number is missing',
      });
    }
  } else {
    return res.status(400).json({
      error: 'The name is missing',
    });
  }
});

//UPDATE
app.put('/api/persons/:id', (req, res, next) => {
  const { name, number } = req.body;
  const id = Number(req.params.id);

  Phonebook.updateOne({ id: id }, { name, number }, { new: true })
    .then(updatedPerson => {
      res.status(201).json(updatedPerson);
    })
    .catch(err => next(err));
});

//UNKNOWN ENDPOINT HANDLER
app.use(unknownEndpoint);
app.use(errorHandler);

//CONNECTION
const URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));
