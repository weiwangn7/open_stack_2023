const Header = props => {
  return <h1>{props.course}</h1>;
};

const Content = props => {
  return (
    <>
      {props.courseContent.map(course => {
        return (
          <p>
            {course.part} {course.exercises}
          </p>
        );
      })}
    </>
  );
};

const Total = props => {
  let total = 0;
  props.courseContent.map(course => (total += course.exercises));
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  const courseContent = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content courseContent={courseContent} />
      <Total courseContent={courseContent} />
    </div>
  );
};

export default App;
