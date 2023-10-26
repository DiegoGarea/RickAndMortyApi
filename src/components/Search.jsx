import {useState} from 'react';
import {Link} from 'react-router-dom';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex justify-center mt-5">
      <form>
        <input
          className="border-2 border-black w-[300px]"
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <Link to={`/character/byName/${searchValue}`}>
          <input
            type="submit"
            value="SEARCH"
            onClick={() => {
              setSearchValue('');
            }}
          />
        </Link>
      </form>
    </div>
  );
};

export default Search;
