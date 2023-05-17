import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const changeHandler = e => {
    e.preventDefault();
    setNewName(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const newObj = {
      name: newName,
    };
    setPersons(persons.concat(newObj));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitHandler}>
        <div>
          name: <input value={newName} onChange={changeHandler} placeholder="Please enter the name" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => (
        <p key={`${person.name}${i}`}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
