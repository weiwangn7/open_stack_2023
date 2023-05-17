import { useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import StatisticLine from './components/StatisticLine';

const Statistics = props => {
  let { good, neutral, bad, all, average, positive } = props.data;

  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={all === 0 ? (average = 0) : average} />
      <StatisticLine text="positive" value={all === 0 ? (positive = 0) : positive} />
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
      <Button onClick={goodHandler} text="good" />
      <Button onClick={neutralHandler} text="neutral" />
      <Button onClick={badHandler} text="bad" />
      <Header title="statistics" />
      {all === 0 ? <h3>No feedback given</h3> : <Statistics data={data} />}
    </>
  );
};

export default App;
