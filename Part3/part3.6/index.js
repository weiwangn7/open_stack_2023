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
const app = express();

app.get('/api/persons', (req, res) => {
  res.json(phonebook);
});

app.get('/info', (req, res) => {
  res.send(`<p>Phonebook has info for ${phonebook.length} people <br/> ${new Date()}</p>`);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = phonebook.find(person => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  phonebook = phonebook.filter(person => person.id !== id);
  console.log(id);

  res.status(204).end();
});

app.use(express.json());

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

  console.log('==========>000001', 000001);

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };
  console.log('==========>000002', 000002);

  phonebook = phonebook.concat(person);
  console.log('==========>000003', 000003);

  res.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
