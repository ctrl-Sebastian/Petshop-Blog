import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'

import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Sobre' element={<Sobre />}/>
    </Routes>
    </>
  );
}

export default App;
