import Course from './components/Course';

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const total = courses[1].parts.reduce((acc, obj) => acc + obj.exercises, 0);

  return (
    <>
      <Course courses={courses[0]} />
      <h2>{courses[1].name}</h2>
      {courses[1].parts.map(part => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <p>
        <b>total of {total} exercises</b>
      </p>
    </>
  );
};

export default App;
