import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all';

const getAll = () => {
  const req = axios.get(baseUrl);

  return req.then(res => res.data);
};

const getWeather = (lat, lon, key) => {
  const req = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
  return req.then(res => res.data);
};

export default { getAll, getWeather };
