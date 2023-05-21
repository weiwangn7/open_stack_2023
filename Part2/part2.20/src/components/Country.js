import CountryList from './CountryList';
import ShowCountry from './ShowCountry';

const Country = ({ countries, setKeyword }) => {
  const countryName = countries.map(country => country.name.common);

  return countries.length > 10 ? (
    <p>Too many matches, specify another filter</p>
  ) : countries.length === 1 ? (
    <ShowCountry countries={countries} />
  ) : (
    <>
      {countryName.map(country => (
        <CountryList country={country} key={country} setKeyword={setKeyword} />
      ))}
    </>
  );
};

export default Country;
