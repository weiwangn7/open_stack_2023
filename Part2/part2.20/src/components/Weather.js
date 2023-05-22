import { useState, useEffect } from 'react';
import countryService from '../services/country';

const Weather = ({ capital, lat, lon }) => {
  const key = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState({});

  useEffect(() => {
    countryService.getWeather(lat, lon, key).then(returnedData => setWeather(returnedData));
  }, [lat, lon]);

  //   console.log(weather);

  return (
    <>
      <h1>Weather in {capital}</h1>
      {weather.main && (
        <>
          <p>
            temperature: {weather.main.temp} {weather.weather[0].main}
          </p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
          <p>wind {weather.wind.speed} m/s</p>
        </>
      )}
    </>
  );
};

export default Weather;
