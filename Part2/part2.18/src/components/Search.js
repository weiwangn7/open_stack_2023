import { useState, useEffect } from 'react';
import Country from './Country';

const Search = props => {
  const [keyword, setKeyword] = useState('');
  const [showResult, setShowResult] = useState(props.country);
  const changeHandler = e => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const newCountry = props.country.filter(item => item.name.common.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
    setShowResult(newCountry);
  }, [keyword]);

  return (
    <>
      <span>find countries </span>
      <input type="text" value={keyword} onChange={changeHandler} />
      <Country countries={showResult} />
    </>
  );
};

export default Search;
