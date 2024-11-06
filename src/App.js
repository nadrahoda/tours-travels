import './App.css';
import {useRef, useEffect} from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterTrips from './components/FilterTrips';
import Carousel from './components/Carousel';
import { CardsProvider } from './context/cardsContext';
import BestTreks from './components/BestTreks';
import States from './components/StatesCarousel';
import Testimonial from './components/Testimonial';
function AppContent() {
  const location = useLocation();
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/best-treks" element={<BestTreks />} />
      </Routes>

      {/* Conditionally render FilterTrips and Carousel based on the path */}
      {location.pathname !== '/best-treks' && (
        <>
          <FilterTrips />
          <Carousel />
          <States/>
          <Testimonial/>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <CardsProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CardsProvider>
  );
}

export default App;
