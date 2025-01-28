import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Add from './pages/Add';
import Reservations from './pages/Reservations';
const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/reservations' element={<Reservations/>}/>
   </Routes>
  );
}

export default App;
