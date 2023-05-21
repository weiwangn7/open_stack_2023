import { useState, useEffect } from 'react';
import countryService from '../services/country';

const Weather = ({ capital, lat, lon }) => {
  const key = '4b0e94d39e301e5cd24efe9517e66565';
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
