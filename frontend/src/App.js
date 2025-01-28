import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/reservation' element={<Reservation/>}/>
   </Routes>
  );
}

export default App;
