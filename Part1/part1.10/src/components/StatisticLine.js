import React from 'react';

function StatisticLine(props) {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
}

export default StatisticLine;
