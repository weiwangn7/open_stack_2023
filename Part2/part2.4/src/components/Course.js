import React from 'react';
import Header from './Header';
import Part from './Part';
import Total from './Total';

function Course(props) {
  const { name, id, parts } = props.courses;
  return (
    <>
      <h1>Web development curriculum</h1>
      <Header name={name} />
      {parts.map(part => (
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      ))}
      <Total parts={parts} />
    </>
  );
}

export default Course;
