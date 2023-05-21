import { useState, useEffect } from 'react';

const ShowCountry = ({ countries }) => {
  const [country, setCountry] = useState({
    name: '',
    capital: '',
    area: 0,
    languages: [],
    flag: '',
  });
  useEffect(() => {
    if (countries.length === 1) {
      const name = countries[0].name.common;
      const capital = countries.map(country => country.capital[0])[0];
      const area = countries.map(country => country.area)[0];
      const languages = Object.values(countries.map(country => country.languages)[0]);
      const flag = countries.map(country => country.flags)[0].png;

      setCountry({ name, capital, area, languages, flag });
    }
  }, [countries]);
  return (
    <>
      <h1>{country.name}</h1>

      <p>capital : {country.capital}</p>
      <p>area : {country.area}</p>
      <h2>languages:</h2>
      <ul>
        {country.languages.map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flag} alt="" />
    </>
  );
};

export default ShowCountry;
