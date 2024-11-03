import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { FaLocationDot, FaRegClock } from 'react-icons/fa6'
import { FaCalendarAlt } from 'react-icons/fa'
const Hero = () => {
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
  const handleDayNightChange = e => {
    setSelectedDayNight(e.target.value)
  }
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
    setInputValue(e.target.value)
    // Here you can implement logic to filter suggestions based on inputValue
    // For simplicity, let's use static data
    setSuggestions(inputValue ? ['Suggestion 1', 'Suggestion 2'] : [])
  }

  const handleSuggestionClick = suggestion => {
    setInputValue(suggestion)
    setSuggestions([])
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
        <div className='flex justify-center items-center mt-4 w-11/12 md:w-2/3 space-x-2 bg-gray-200 p-4 rounded-xl'>
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
              className='pl-10 pr-3 py-2 border border-gray-300 rounded-lg w-full text-black text-sm flex items-center'
            />
            {suggestions.length > 0 && (
              <div className='absolute z-10 bg-white border border-gray-300 rounded-lg mt-10 w-full'>
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className='p-2 hover:bg-gray-200 cursor-pointer text-black'
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Day/Night Dropdown */}
          <div ref={dayNightRef} className='relative w-1/5 bg-white rounded-lg'>
            <div
              className='border border-gray-300 rounded-lg py-2 px-4 text-black text-sm flex items-center cursor-pointer'
              onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
            >
              <FaRegClock className='text-blue-500 mr-2' size={16} />
              <span
                className={
                  selectedDayNight === 'Day/Night'
                    ? 'text-gray-500'
                    : 'text-black'
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
                    className='p-2 hover:bg-gray-200 cursor-pointer text-black flex flex-start pl-8'
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
            className='relative w-1/4 bg-white rounded-lg '
          >
            <div
              className='border border-gray-300 rounded-lg py-2 px-4 text-black text-sm flex items-center cursor-pointer'
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
                    className='p-2 hover:bg-gray-200 cursor-pointer flex flex-start pl-8'
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Explore Button */}
          <button className='bg-blue-600 text-white rounded-lg px-4 py-2 text-sm h-full flex items-center justify-center w-1/4'>
            Explore
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
