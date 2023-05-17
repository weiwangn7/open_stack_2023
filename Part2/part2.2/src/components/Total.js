import React from 'react';

function Total({ parts }) {
  let total = 0;
  parts.map(part => (total += part.exercises));
  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  );
}

export default Total;
