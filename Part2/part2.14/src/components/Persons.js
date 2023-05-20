import React from 'react';
import personService from '../services/person';

function Persons(props) {
  const deleteHandler = (e, key) => {
    e.preventDefault();
    const id = key;

    personService.deletePerson(id).then(returnedPerson => props.setPersons(props.persons.filter(person => person.id !== id)));
  };

  return (
    <>
      {props.newPersons.map((person, i) => (
        <p key={`${person.name}${i}`}>
          {person.name} : {person.number}
          <button onClick={event => deleteHandler(event, person.id)} key={person.id}>
            Delete
          </button>
        </p>
      ))}
    </>
  );
}

export default Persons;
