// import { phonebook } from './data/data.js';
let phonebook = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];
const express = require('express');
const morgan = require('morgan');
const app = express();
const logger = morgan('tiny');

// SHOW PHONEBOOK
app.get('/api/persons', (req, res) => {
  res.json(phonebook);
});

// SUMMARY PHONE BOOK INFORMATION
app.get('/info', (req, res) => {
  res.send(`<p>Phonebook has info for ${phonebook.length} people <br/> ${new Date()}</p>`);
});

// GET SPECIFIC PERSON'S INFORMATION BY ID
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = phonebook.find(person => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

// DELETE SPECIFIC PERSON BY ID
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  phonebook = phonebook.filter(person => person.id !== id);
  console.log(id);

  res.status(204).end();
});

// CREATE A PERSON
app.use(express.json());
morgan.token('person', req => {
  return JSON.stringify({ name: req.body.name, number: req.body.number });
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'));

const generateId = () => {
  const id = Math.floor(Math.random() * 1000);
  return id;
};
app.post('/api/persons', (req, res) => {
  let body = req.body;

  if (body.name) {
    if (phonebook.find(person => person.name === body.name)) {
      return res.status(400).json({
        error: 'name must be unique',
      });
    } else if (!body.number) {
      return res.status(400).json({
        error: 'The number is missing',
      });
    }
  } else {
    return res.status(400).json({
      error: 'The name is missing',
    });
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  // console.log(JSON.stringify()`{name: ${person.name}, number:${person.number}}`);

  phonebook = phonebook.concat(person);
  res.json(person);
});

const PORT = process.env.PORT || 3001;
console.log(process.env.PORT);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
