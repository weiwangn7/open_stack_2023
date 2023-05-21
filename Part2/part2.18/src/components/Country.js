import { useState, useEffect } from 'react';

const Country = ({ countries }) => {
  const [country, setCountry] = useState({
    capital: '',
    area: 0,
    languages: [],
    flag: '',
  });
  const countryName = countries.map(country => country.name.common);

  useEffect(() => {
    if (countries.length === 1) {
      const capital = countries.map(country => country.capital[0])[0];
      const area = countries.map(country => country.area)[0];
      const languages = Object.values(countries.map(country => country.languages)[0]);
      const flag = countries.map(country => country.flags)[0].png;

      setCountry({ capital, area, languages, flag });
    }
  }, [countries]);

  return countries.length > 10 ? (
    <p>Too many matches, specify another filter</p>
  ) : countries.length === 1 ? (
    <>
      {countryName.map(name => (
        <h1 key={name}>{name}</h1>
      ))}
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
  ) : (
    <>
      {countryName.map(country => (
        <p key={country}>{country}</p>
      ))}
    </>
  );
};

export default Country;
