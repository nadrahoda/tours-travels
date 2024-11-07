import React, { useEffect, useState } from 'react'
import { useCards } from '../context/cardsContext'
import { IoLocationSharp } from 'react-icons/io5'
import { FaClock } from 'react-icons/fa6'
import { IoMdCalendar } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'

const Carousel = () => {
  const cardsData = useCards();
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsToShow = 4 // Number of cards to show at a time

  // Automatically move to the next set of cards
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        prevIndex => (prevIndex + 1) % (cardsData.length - cardsToShow + 1)
      )
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(intervalId)
  }, [cardsData.length])

  return (
    <div className='bg-gray-800 py-10'>
      <div className='flex flex-col pl-6'>
        <h3 className='text-gray-400 text-lg uppercase flex flex-start tracking-widest'>
          Category
        </h3>
        <h1 className='text-white text-4xl font-bold flex flex-start tracking-wide'>
          Our Best Treks
        </h1>
      </div>

      <div className='carousel-container relative overflow-hidden w-full mt-6 '>
        <div
          className='carousel flex transition-transform duration-500 gap-4 '
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
          }}
        >
          {cardsData.map(card => (
            <div
              key={card.id}
              className='carousel-card min-w-1/4 flex-shrink-0 rounded-xl hover:rounded-xl cursor-pointer'
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '450px'
              }}
            >
              <div className='flex flex-col  h-full bg-black rounded-xl bg-opacity-40'>
                <div className='flex justify-between   p-2'>
                  <span className='bg-white absolute right-0 top-5 text-blue-500 text-sm px-3  py-1 rounded-xl rounded-r-none'>
                    {card.difficulty}
                  </span>
                </div>

                <h2 className='text-white text-2xl tracking-wider uppercase font-semibold p-2 text-center mt-10'>
                  {card.tripName}
                </h2>

                <div className='flex flex-col justify-between p-2 text-gray-300 mt-auto'>
                  <div className='flex flex-start text-lg text-white'>
                    {card.tripName}
                  </div>
                  <div className='flex flex-start items-center'>
                    <div className='border flex items-center inline-block px-2 py-1 mb-3 rounded-full bg-white bg-opacity-20 text-xs'>
                      <IoLocationSharp className='mr-1' /> {card.location}
                    </div>
                  </div>
                  <hr />
                  <div className='flex mt-1'>
                    <div className='flex flex-start items-center '>
                      <FaClock className='mr-1' /> {card.duration}
                    </div>
                    <span className=' border-l-2 border-white h-6 mx-2' />
                    <div className='flex flex-start items-center '>
                      <IoMdCalendar className='mr-1' /> {card.month}
                    </div>
                  </div>
                </div>
                <div className='flex justify-between items-center p-2'>
                  <div className='text-white font-bold text-2xl'>
                    {card.price}
                  </div>
                  <div className='text-yellow-400'>
                    {'⭐'.repeat(Math.floor(card.rating))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-8'>
        <Link to='/best-treks'>
          <button className='px-6 py-2 flex items-center bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75'>
            View All <FaArrowRightLong className='ml-2' />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Carousel
