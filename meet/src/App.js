import {Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import AddMeetings from './pages/AddMeetings';

function App() {
  return (
    <div className="App">
      
    <ul className='nav'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/add'>Add Meeting</Link></li>
    </ul>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/add' element={<AddMeetings />} />
      </Routes>



    </div>
  );
}

export default App;
