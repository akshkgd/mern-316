import {Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import AddMeetings from './pages/AddMeetings';
import Navigation from './components/Navigation'
import NotFound from './pages/NotFound'
function App() {
  return (
    <div className="App">
      
    
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/add' element={<AddMeetings />} />
        <Route exact path='*' element={<NotFound />} />
        
      </Routes>



    </div>
  );
}

export default App;
