import personService from '../services/person';

function Persons(props) {
  const deleteHandler = (e, person) => {
    e.preventDefault();
    const id = person.id;
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.deletePerson(id).then(returnedPerson => props.setPersons(props.persons.filter(person => person.id !== id)));
    }
  };

  return (
    <>
      {props.newPersons.map((person, i) => (
        <p key={`${person.name}${i}`}>
          {person.name} : {person.number}
          <button onClick={event => deleteHandler(event, person)} key={person.id}>
            Delete
          </button>
        </p>
      ))}
    </>
  );
}

export default Persons;
