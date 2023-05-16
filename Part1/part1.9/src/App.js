import { useState } from 'react';
import Header from './components/Header';

const Statistics = props => {
  let { good, neutral, bad, all, average, positive } = props.data;

  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {all === 0 ? (average = 0) : average}</p>
      <p>positive {all === 0 ? (positive = 0) : positive}</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHandler = () => setGood(good + 1);
  const neutralHandler = () => setNeutral(neutral + 1);
  const badHandler = () => setBad(bad + 1);

  let all = good + neutral + bad;
  let average = (good - bad) / all;
  let positive = (good / all) * 100 + '%';

  const data = { good: good, neutral: neutral, bad: bad, all: all, average: average, positive: positive };

  return (
    <>
      <Header title="give feedback" />
      <button onClick={goodHandler}>good</button>
      <button onClick={neutralHandler}>neutral</button>
      <button onClick={badHandler}>bad</button>
      <Header title="statistics" />
      {all === 0 ? <h3>No feedback given</h3> : <Statistics data={data} />}
    </>
  );
};

export default App;
