import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar, Home, SingleCharacter} from './components/index';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/character/:id" element={<SingleCharacter />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
