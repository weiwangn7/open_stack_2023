import React from 'react';
import Header from './Header';
import Part from './Part';
import Total from './Total';

function Node(props) {
  const { name, parts } = props.node;

  return (
    <>
      <Header name={name} />
      {parts.map(part => (
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      ))}
      <Total parts={parts} />
    </>
  );
}

export default Node;
