import './App.css';
import {useRef, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterTrips from './components/FilterTrips';
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
   <Navbar/>
   <Routes>
   <Route path="/" element={<Hero />} />
   </Routes>
   <FilterTrips/>
   
    </div>
    </BrowserRouter>
  
  );
}

export default App;
