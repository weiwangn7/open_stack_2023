const Header = props => {
  return <h1>{props.course}</h1>;
};

const Part = props => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = props => {
  return (
    <>
      <Part part={props.courseContent[0].part} exercises={props.courseContent[0].exercises} />
      <Part part={props.courseContent[1].part} exercises={props.courseContent[1].exercises} />
      <Part part={props.courseContent[2].part} exercises={props.courseContent[2].exercises} />
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
