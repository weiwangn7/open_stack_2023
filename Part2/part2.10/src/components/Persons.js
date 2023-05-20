import React from 'react';

function Persons(props) {
  return (
    <>
      {props.newPersons.map((person, i) => (
        <p key={`${person.name}${i}`}>
          {person.name} : {person.number}
        </p>
      ))}
    </>
  );
}

export default Persons;
