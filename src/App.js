import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Latest from './pages/Latest';
import Popular from './pages/Popular';
import Rating from './pages/Rating';
import Upcoming from './pages/Upcoming';
import Detail from './pages/Detail';


function App() {

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
            <Route path='/'element={<Home />} />
            <Route path='/Film'element={<Popular/>}/>
            <Route path='/Latest'element={<Latest/>}/>
            <Route path='/Popular'element={<Popular/>}/>
            <Route path='/Rating'element={<Rating/>}/>
            <Route path='/Upcoming'element={<Upcoming/>}/>
            <Route path='/Detail/:movieID'element={<Detail/>}/>
        </Routes> 
      </Sidebar>
      
    </BrowserRouter>
  );
}

export default App;
