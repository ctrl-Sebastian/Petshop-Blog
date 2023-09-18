import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Page404 from './pages/404error';
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Header from './components/Header';
import Post from './pages/Post';
import Categoria from './pages/Categoria';

import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/sobre' element={<Sobre />}/>
      <Route path='/posts/:id' element={<Post />}/>
      <Route path='/categoria/:id/*' element={<Categoria />}/>
      <Route path='*' element={<Page404 />}/>
    </Routes>
    </>
  );
}

export default App;
