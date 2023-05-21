import { useState } from 'react';
import personService from '../services/person.js';

function PersonForm(props) {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    const newObj = {
      name: newName,
      number: newNumber,
    };
    const found = props.persons.find(person => person.name === newName);
    console.log('====>found', found);

    if (found !== undefined) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        personService.update(found.id, newObj).then(returnedPerson => {
          props.setPersons(props.persons.map(person => (person.id !== found.id ? person : { ...found, number: newNumber })));
          setNewName('');
          setNewNumber('');
        });
      }
    } else {
      personService.create(newObj).then(returnedPerson => {
        props.setPersons(props.persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
      });

      // props.setPersons(props.persons.concat(newObj));
      // console.log(persons);
    }
  };

  const nameChangeHandler = e => {
    setNewName(e.target.value);
  };
  const numberChangeHandler = e => {
    setNewNumber(e.target.value);
  };

  return (
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
  );
}

export default PersonForm;
