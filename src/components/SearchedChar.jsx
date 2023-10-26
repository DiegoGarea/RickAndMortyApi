import {useEffect, useState} from 'react';
import {searchChar} from '../functions/functions';
import {useParams} from 'react-router-dom';

const SearchedChar = () => {
  const {name} = useParams();
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    searchChar(name, setSearchResults);
  }, [name]);

  console.log(searchResults);

  return (
    <>
      {searchResults != null ? (
        <ul className="grid grid-cols-5 grid-rows-5 gap-4 p-10">
          {searchResults.map((result) => (
            <li key={result.id}>
              <p>{result.name}</p>
              <img src={result.image} alt={result.name} />
            </li>
          ))}
        </ul>
      ) : (
        'l o a d i n g...'
      )}
    </>
  );
};

export default SearchedChar;
