import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

  const [newPersons, setNewPersons] = useState(persons);

  const filterHandler = keyword => {
    const filterPersons = persons.filter(person => person.name.toLowerCase().trim().indexOf(keyword.toLowerCase().trim()) !== -1);
    setNewPersons(filterPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter persons={persons} setNewPersons={setNewPersons} onFilter={filterHandler} />

      <h2>add a new</h2>

      <PersonForm persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>

      <Persons newPersons={newPersons} />
    </div>
  );
};

export default App;
