import { useEffect, useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newPersons, setNewPersons] = useState(persons);
  const [keyword, setKeyword] = useState('');

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
      // console.log(persons);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const filterPersons = persons.filter(person => person.name.toLowerCase().trim().indexOf(keyword.toLowerCase().trim()) !== -1);
      setNewPersons(filterPersons);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword, persons]);

  const searchHandler = e => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown with <input type="text" value={keyword} placeholder="Enter a name" onChange={searchHandler} />
      </p>
      <h2>add a new</h2>
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
      {newPersons.map((person, i) => (
        <p key={`${person.name}${i}`}>
          {person.name} : {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
