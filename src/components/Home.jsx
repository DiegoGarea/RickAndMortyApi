import {useEffect, useState} from 'react';
import {rickAndMortyCharacters} from '../functions/functions';
import {Link} from 'react-router-dom';

const Home = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    rickAndMortyCharacters(setCharacters);
  }, []);
  console.log(characters);
  return (
    <>
      <div>
        {characters != null ? (
          <ul className="grid grid-cols-5 grid-rows-5 gap-4 p-10">
            {characters.map((character) => (
              <li key={character.id}>
                <Link to={`/character/${character.id}`}>
                  <p>{character.name}</p>
                  <img src={character.image} alt={character.id} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          'there is no characters'
        )}
      </div>
    </>
  );
};

export default Home;
