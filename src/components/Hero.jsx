import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { FaLocationDot, FaRegClock } from 'react-icons/fa6'
import { FaCalendarAlt } from 'react-icons/fa'
import indiaLocations from '../india_locations.json'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null)
  const [suggestions, setSuggestions] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [selectedDayNight, setSelectedDayNight] = useState('Day/Night')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedMonthYear, setSelectedMonthYear] = useState('Month/Year')
  const [isMonthYearOpen, setIsMonthYearOpen] = useState(false)
  const fullText = 'Welcome to भ्रMan Sukh'
  const [displayedText, setDisplayedText] = useState('')

  const dayNightRef = useRef(null)
  const monthYearRef = useRef(null)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1)) // Use slice to get the substring
      index++
      if (index >= fullText.length) {
        clearInterval(timer) // Stop the interval when text is fully displayed
      }
    }, 100) // Adjust typing speed

    return () => clearInterval(timer) // Cleanup on unmount
  }, [])

  // Sample data for dropdowns
  const dayNightOptions = ['5D/4N', '6D/5N', '10D/9N', 'Not decided']
  const monthYearOptions = [
    'December 2024',
    'January 2025',
    'February 2025',
    'March 2025',
    'April 2025',
    'May 2025'
  ]
  // Use effect to play the video automatically on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  const handleInputChange = e => {
    const value = e.target.value
    setInputValue(value)
    // Here you can implement logic to filter suggestions based on inputValue
    // For simplicity, let's use static data
    if (value.length < 2) {
      setSuggestions([])
      return
    }
    const filteredSuggestions = new Set()
    indiaLocations.forEach(location => {
      if (location.state.toLowerCase().includes(value.toLowerCase())) {
        filteredSuggestions.add(location.state)
      }
      location.cities.forEach(city => {
        if (city.toLowerCase().includes(value.toLowerCase())) {
          filteredSuggestions.add(`${city} , ${location.state}`)
        }
      })
      location.touristSpots.forEach(spotObj => {
        const cityName = Object.keys(spotObj)[0]
        const spots = spotObj[cityName]
        if (cityName.toLowerCase().includes(value.toLowerCase())) {
          spots.forEach(spot => {
            filteredSuggestions.add(`${spot} , ${location.state}`)
          })
        } else {
          // If city doesn't match, check tourist spots directly
          spots.forEach(spot => {
            if (spot.toLowerCase().includes(value.toLowerCase())) {
              filteredSuggestions.add(`${spot} , ${location.state}`)
            }
          })
        }
      })
    })
    setSuggestions(Array.from(filteredSuggestions))
    console.log(`Input Value: ${value}`)
    console.log(`Filtered Suggestions: ${Array.from(filteredSuggestions)}`)
  }

  const handleSuggestionClick = suggestion => {
    setInputValue(suggestion)
    setSuggestions([]);
    navigate(`/results/${suggestion}`);
  }
  const handleOptionClick = option => {
    setSelectedDayNight(option)
    setIsOpen(false) // Close dropdown after selection
  }
  const handleOptionClickMonth = option => {
    setSelectedMonthYear(option)
    setIsMonthYearOpen(false) // Close dropdown after selection
  }

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        dayNightRef.current &&
        !dayNightRef.current.contains(event.target) &&
        monthYearRef.current &&
        !monthYearRef.current.contains(event.target)
      ) {
        setIsOpen(false)
        setIsMonthYearOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleExploreClick = () => {
    // Navigate to the result page with a selected query (e.g., Maharashtra)
    navigate(`/results/${inputValue || 'Maharashtra'}`);  // Use inputValue for dynamic search
  };
  return (
    <div className='relative w-full h-screen overflow-hidden hero'>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className='absolute top-0 left-0 w-full h-full object-cover'
      >
        <source src='/assets/hero.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {/* Other content */}
      <div className='absolute inset-0 bg-black opacity-50'></div>{' '}
      {/* Optional overlay for contrast */}
      <div className='relative z-10 flex flex-col mt-48 items-center h-full text-white text-center'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>{displayedText}</h1>

        {/* Search Bar Section */}
        <div className='flex justify-center items-center mt-4 w-11/12 md:w-4/6 space-x-2 bg-gray-200 p-3 rounded-xl'>
          {/* Search Input with Suggestions */}
          <div className='relative flex flex-1 '>
            <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
              <FaLocationDot className='text-blue-500 mr-2' size={18} />
            </span>
            <input
              type='text'
              placeholder='Search your destination'
              value={inputValue}
              onChange={handleInputChange}
              autoComplete='off'
              className='pl-10 pr-3 py-3 border border-gray-300 rounded-lg w-full text-black text-sm flex items-center'
            />
            {suggestions.length > 0 && (
              <div className='absolute z-10 bg-white border border-gray-300 rounded-lg mt-10 w-full max-h-60 overflow-y-auto'>
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className='p-2 hover:bg-gray-200 cursor-pointer text-black flex items-center flex-start pl-2'
                  >
                    <FaLocationDot className='text-gray-400 mr-2' size={16} />{' '}
                    {/* Location Dot Icon */}
                    <span className='whitespace-normal text-sm'>
                      {suggestion}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Day/Night Dropdown */}
          <div ref={dayNightRef} className='relative w-1/6 bg-white rounded-lg'>
            <div
              className='border border-gray-300 rounded-lg py-3 px-4 text-black text-sm flex items-center cursor-pointer'
              onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
            >
              <FaRegClock className='text-blue-500 mr-2' size={16} />
              <span
                className={
                  selectedDayNight === 'Day/Night'
                    ? 'text-gray-500'
                    : 'text-black text-sm'
                }
              >
                {selectedDayNight}
              </span>
            </div>
            {isOpen && (
              <div className='absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10'>
                {dayNightOptions.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className='p-2 hover:bg-gray-200 cursor-pointer text-black text-sm flex flex-start pl-8'
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Month/Year Dropdown */}
          <div
            ref={monthYearRef}
            className='relative w-1/6 bg-white rounded-lg '
          >
            <div
              className='border border-gray-300 rounded-lg py-3 px-4 text-black text-sm flex items-center cursor-pointer'
              onClick={() => setIsMonthYearOpen(!isMonthYearOpen)} // Toggle dropdown
            >
              <FaCalendarAlt className='text-blue-500 mr-2' size={16} />
              <span
                className={
                  selectedMonthYear === 'Month/Year'
                    ? 'text-gray-500'
                    : 'text-black'
                }
              >
                {selectedMonthYear}
              </span>
            </div>
            {isMonthYearOpen && ( // Updated to use the new variable
              <div className='absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 text-black'>
                {monthYearOptions.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionClickMonth(option)}
                    className='p-2 hover:bg-gray-200 cursor-pointer text-sm flex flex-start pl-8'
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Explore Button */}
          <button className='bg-blue-600 text-white rounded-lg px-4 py-2 text-sm h-full flex items-center justify-center w-1/5' onClick={handleExploreClick}>
            Explore
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
