import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-fill h-32 bg-slate-800 text-white flex justify-center items-center text-[40px]">
      <Link to={'/'}>
        <p>Rick & Morty</p>
      </Link>
    </div>
  );
};

export default Navbar;
