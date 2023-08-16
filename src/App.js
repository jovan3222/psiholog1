import { Route, Routes } from 'react-router-dom';
import Kontakt from './pages/kontakt/kontakt';
import Pocetna from './pages/pocetna/pocetna'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Pocetna />} />
        <Route path='/kontakt' element={<Kontakt />} />
      </Routes>
    </>
  );
}

export default App;
