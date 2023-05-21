import { useState, useEffect } from 'react';
import Country from './components/Country';
import Search from './components/Search';
import countryService from './services/country';

const App = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    countryService.getAll().then(data => setCountry(data));
  }, []);

  console.log(country);
  return <Search country={country} />;
};

export default App;
