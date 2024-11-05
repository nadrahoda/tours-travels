import './App.css';
import {useRef, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterTrips from './components/FilterTrips';
import Carousel from './components/Carousel';
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
   <Navbar/>
   <Routes>
   <Route path="/" element={<Hero />} />
   </Routes>
   <FilterTrips/>
   <Carousel/>
   
    </div>
    </BrowserRouter>
  
  );
}

export default App;
