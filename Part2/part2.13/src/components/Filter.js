import { useState, useEffect } from 'react';

function Filter(props) {
  const [keyword, setKeyword] = useState('');
  const searchHandler = e => {
    setKeyword(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      props.onFilter(keyword);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [keyword, props]);

  return (
    <div>
      filter shown with <input type="text" value={keyword} placeholder="Enter a name" onChange={searchHandler} />
    </div>
  );
}

export default Filter;
