import React from 'react';
import Header from './Header';
import Part from './Part';
import Total from './Total';

function Course({ course }) {
  return (
    <>
      <Header name={course.name} />
      {course.parts.map(part => (
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      ))}
      <Total parts={course.parts} />
    </>
  );
}

export default Course;
