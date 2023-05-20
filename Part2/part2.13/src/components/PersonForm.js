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

    if (found !== undefined) {
      alert(newName + ' is already added to phonebook');
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
