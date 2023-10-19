import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {singleChar} from '../functions/functions';

const SingleCharacter = () => {
  const {id} = useParams();
  const [single, setSingle] = useState(null);

  useEffect(() => {
    singleChar(id, setSingle);
  }, []);
  // console.log(single);

  return (
    <>
      {single != null ? (
        <div className="flex flex-col-reverse items-center p-10">
          <ul className="text-3xl mt-5">
            <li>- {single.name}</li>
            <li>- {single.species}</li>
            <li>- {single.gender}</li>
          </ul>
          <img className="w-[500px]" src={single.image} alt={single.name} />
        </div>
      ) : (
        'l o a d i n g...'
      )}
    </>
  );
};

export default SingleCharacter;
