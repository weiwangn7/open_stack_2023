import React from 'react';

const CountryList = ({ country, setKeyword }) => {
  const showHandler = (e, show) => {
    console.log('===>country', show);
    setKeyword(show);
  };
  return (
    <p>
      {country}
      <button key={country} onClick={e => showHandler(e, country)}>
        show
      </button>
    </p>
  );
};

export default CountryList;
