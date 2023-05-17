import React from 'react';
import Header from './Header';
import Part from './Part';

function Course({ course }) {
  return (
    <>
      <Header name={course.name} />
      {course.parts.map(part => (
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      ))}
    </>
  );
}

export default Course;
