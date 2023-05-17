import React from 'react';

function Total({ parts }) {
  const total = parts.reduce((acc, obj) => acc + obj.exercises, 0);
  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  );
}

export default Total;
