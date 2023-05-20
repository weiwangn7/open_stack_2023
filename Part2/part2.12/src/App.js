import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/person.js';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personService.getAll().then(initial => setPersons(initial));
  }, []);

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
