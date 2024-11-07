import React, { useEffect, useState } from 'react'
import state1 from '../assets/Andaman.jpg'
import state2 from '../assets/Arunachal.jpg'
import state3 from '../assets/Goa.jpg'
import state4 from '../assets/Himachal.jpg'
import state5 from '../assets/Karnataka.jpg'
import state6 from '../assets/Kashmir.jpg'
import state7 from '../assets/Kerala.jpg'
import state8 from '../assets/Ladakh.jpg'
import state9 from '../assets/Meghalaya.jpg'
import state10 from '../assets/Sikkim.jpg'
import state11 from '../assets/Uttarakhand.jpg'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const statesData = [
  { id: 1, name: 'Goa', image: state1, packages: '6', prices: '15,600' },
  {
    id: 2,
    name: 'Arunachal Pradesh',
    image: state2,
    packages: '8',
    prices: '18,200'
  },
  {
    id: 3,
    name: 'Andaman & Nicobar',
    image: state3,
    packages: '5',
    prices: '20,000'
  },
  {
    id: 4,
    name: 'Himachal Pradesh',
    image: state4,
    packages: '10',
    prices: '22,500'
  },
  { id: 5, name: 'Karnataka', image: state5, packages: '7', prices: '12,800' },
  {
    id: 6,
    name: 'Jammu & Kashmir',
    image: state6,
    packages: '9',
    prices: '24,000'
  },
  { id: 7, name: 'Kerala', image: state7, packages: '12', prices: '19,500' },
  { id: 8, name: 'Ladakh', image: state8, packages: '4', prices: '25,000' },
  { id: 9, name: 'Meghalaya', image: state9, packages: '5', prices: '17,300' },
  { id: 10, name: 'Sikkim', image: state10, packages: '6', prices: '16,800' },
  {
    id: 11,
    name: 'Uttarakhand',
    image: state11,
    packages: '8',
    prices: '21,000'
  }
]

const StatesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const statesToShow = 4 // Number of states to show at a time

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        prevIndex => (prevIndex + 1) % (statesData.length - statesToShow + 1)
      )
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  // Move to the next state
  const goToNext = () => {
    setCurrentIndex(
      prevIndex => (prevIndex + 1) % (statesData.length - statesToShow + 1)
    )
  }

  // Move to the previous state
  const goToPrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? statesData.length - statesToShow : prevIndex - 1
    )
  }

  return (
    <div className='bg-gray-900 py-10'>
      <div className='flex flex-col items-center justify-cente'>
        <h3 className='text-gray-400 text-lg uppercase flex  tracking-widest'>
          Destinations
        </h3>
        <h1 className='text-white text-4xl font-semibold flex  tracking-wide'>
          Find the Perfect Escape
        </h1>
      </div>

      <div className='state-carousel-container relative overflow-hidden w-full mt-16'>
        <div
          className='carousel flex transition-transform duration-500 gap-4'
          style={{
            transform: `translateX(-${currentIndex * (100 / statesToShow)}%)`
          }}
        >
          {statesData.map(state => (
            <div
              key={state.id}
              className='carousel-card min-w-1/3 flex-shrink-0 rounded-xl cursor-pointer'
              style={{
                backgroundImage: `url(${state.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '350px'
              }}
            >
              <div className='flex flex-col h-full bg-black rounded-xl bg-opacity-10'>
                <div className='absolute top-2 left-0 text-white text-xs font-semibold bg-opacity-30 bg-white px-2 py-1 rounded-full rounded-l-none'>
                  {state.packages}+ Packages
                </div>
              </div>

              {/* State name and prices below the image */}
              <div className='absolute bottom-0 left-0 right-0 bg-black  p-4 text-center flex bg-blue-500 rounded-lg rounded-t-none justify-between'>
                <h2 className='text-white text-base font-semibold'>
                  {state.name}
                </h2>
                <div className='text-lg text-yellow-400 flex items-center font-semibold'>
                  <span className='text-xs mr-2 font-thin'>Starting price</span>{' '}
                  {`₹${state.prices}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center items-center space-x-2 '>
        <button
          className='text-white text-sm  hover:bg-opacity-100 p-2 bg-blue-500 rounded-full'
          onClick={goToPrev}
        >
          <IoIosArrowBack />
        </button>
        <button
          className='text-white text-sm bg-blue-500  hover:bg-opacity-100 p-2 rounded-full'
          onClick={goToNext}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  )
}

export default StatesCarousel
