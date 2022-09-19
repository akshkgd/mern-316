import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Masterclass from './pages/Masterclass';
import NotFound from './pages/NotFound';
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li> <Link to='/'>Home</Link>  </li>
          <li> <Link to='/masterclass'>Masterclass</Link>  </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/masterclass' element={<Masterclass />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  );


}

export default App;
