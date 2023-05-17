import React from 'react';
import Header from './Header';
import Node from './Node';
import Part from './Part';
import Total from './Total';

function Course(props) {
  const { name, parts } = props.courses[0];
  const node = props.courses[1];
  return (
    <>
      <h1>Web development curriculum</h1>
      <Header name={name} />
      {parts.map(part => (
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      ))}
      <Total parts={parts} />
      <Node node={node} />
    </>
  );
}

export default Course;
