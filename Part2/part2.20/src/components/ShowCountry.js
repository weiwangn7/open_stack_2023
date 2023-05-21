import { useState, useEffect } from 'react';
import Weather from './Weather';

const ShowCountry = ({ countries }) => {
  const [country, setCountry] = useState({
    name: '',
    capital: '',
    area: 0,
    languages: [],
    flag: '',
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    if (countries.length === 1) {
      const name = countries[0].name.common;
      const capital = countries.map(country => country.capital[0])[0];
      const area = countries.map(country => country.area)[0];
      const languages = Object.values(countries.map(country => country.languages)[0]);
      const flag = countries.map(country => country.flags)[0].png;

      const lat = countries[0].capitalInfo.latlng[0];
      const lng = countries[0].capitalInfo.latlng[1];

      setCountry({ name, capital, area, languages, flag, lat, lng });
    }
  }, [countries]);

  console.log('======>country', country);

  return (
    <>
      <>
        <h1>{country.name}</h1>
        <p>capital : {country.capital}</p>
        <p>area : {country.area}</p>
      </>

      <>
        <h2>languages:</h2>
        <ul>
          {country.languages.map(language => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flag} alt="" />
      </>

      {country.lat && <Weather capital={country.capital} lat={country.lat} lon={country.lng} />}
    </>
  );
};

export default ShowCountry;
