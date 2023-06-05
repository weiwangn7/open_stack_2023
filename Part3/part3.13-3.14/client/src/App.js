import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/person.js';
import Message from './components/Message';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

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

      <Message message={message} setMessage={setMessage} error={error} />

      <Filter persons={persons} setNewPersons={setNewPersons} onFilter={filterHandler} />

      <h2>add a new</h2>

      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage} setError={setError} />

      <h2>Numbers</h2>

      <Persons newPersons={newPersons} setPersons={setPersons} persons={persons} />
    </div>
  );
};

export default App;
