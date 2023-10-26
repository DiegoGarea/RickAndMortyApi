import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {
  Navbar,
  Home,
  SingleCharacter,
  Search,
  SearchedChar,
} from './components/index';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Search />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/byName/:name" element={<SearchedChar />} />
          <Route path="/character/:id" element={<SingleCharacter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
