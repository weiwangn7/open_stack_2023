const Header = props => {
  return <h1>{props.course}</h1>;
};

const Content = props => {
  return (
    <>
      {props.courseInfo.map(course => {
        return (
          <p>
            {course.name} {course.exercises}
          </p>
        );
      })}
    </>
  );
};

const Total = props => {
  let total = 0;
  props.courseInfo.map(course => (total += course.exercises));
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  const courseInfo = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content courseInfo={courseInfo} />
      <Total courseInfo={courseInfo} />
    </div>
  );
};

export default App;
