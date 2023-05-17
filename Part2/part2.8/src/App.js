import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '33 - 0676392422' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const nameChangeHandler = e => {
    e.preventDefault();
    setNewName(e.target.value);
  };
  const numberChangeHandler = e => {
    e.preventDefault();
    setNewNumber(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const newObj = {
      name: newName,
      number: newNumber,
    };
    const found = persons.find(person => person.name === newName);

    if (found !== undefined) {
      alert(newName + ' is already added to phonebook');
    } else {
      setPersons(persons.concat(newObj));
      setNewName('');
      setNewNumber('');
      console.log(persons);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitHandler}>
        <div>
          name: <input value={newName} onChange={nameChangeHandler} placeholder="Please enter the name" />
        </div>
        <div>
          number: <input value={newNumber} onChange={numberChangeHandler} placeholder="Please enter the number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => (
        <p key={`${person.name}${i}`}>
          {person.name} : {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
