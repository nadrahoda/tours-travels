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
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Maharashtra from './components/ResultsPage/Maharashtra';
function AppContent() {
  const location = useLocation();
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/best-treks" element={<BestTreks />} /> */}
        <Route path='/results/:query' element={<Maharashtra/>}/>
      </Routes>

      {/* Conditionally render FilterTrips and Carousel based on the path */}
      {!location.pathname.startsWith('/results/') && (
        <>
          <FilterTrips />
          <Carousel />
          <States/>
          <Testimonial/>
          <WhyChooseUs/>
          <FAQ/>
          <Contact/>
          <Footer/>
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
