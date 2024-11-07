import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import profile from '../assets/profile.jpg'
import { RiDoubleQuotesL } from 'react-icons/ri'

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    image: profile,
    content: 'This trip was life-changing! Highly recommend it to everyone.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: profile,
    content: 'Amazing experience! I enjoyed every moment of the trip.'
  },
  {
    id: 3,
    name: 'Samuel Lee',
    image: profile,
    content:
      'The best vacation I’ve ever had. Great service and beautiful locations.'
  },
  {
    id: 4,
    name: 'Emma Watson',
    image: profile,
    content:
      'Absolutely fantastic! Will definitely book again for my next holiday.'
  },
  {
    id: 5,
    name: 'Chris Pratt',
    image: profile,
    content:
      'An unforgettable adventure. Highly professional team and stunning destinations.'
  },
  {
    id: 6,
    name: 'Olivia Brown',
    image: profile,
    content: 'A wonderful experience from start to finish. Truly unforgettable!'
  },
  {
    id: 7,
    name: 'John Doe',
    image: profile,
    content: 'This trip was life-changing! Highly recommend it to everyone.'
  },
  {
    id: 8,
    name: 'Jane Smith',
    image: profile,
    content: 'Amazing experience! I enjoyed every moment of the trip.'
  },
  {
    id: 9,
    name: 'Samuel Lee',
    image: profile,
    content:
      'The best vacation I’ve ever had. Great service and beautiful locations.'
  },
  {
    id: 10,
    name: 'Emma Watson',
    image: profile,
    content:
      'Absolutely fantastic! Will definitely book again for my next holiday.'
  },
  {
    id: 11,
    name: 'Chris Pratt',
    image: profile,
    content:
      'An unforgettable adventure. Highly professional team and stunning destinations.'
  },
  {
    id: 12,
    name: 'Olivia Brown',
    image: profile,
    content: 'A wonderful experience from start to finish. Truly unforgettable!'
  }
]

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsToShow = 3 // Number of testimonials to show at a time
  const maxIndex = testimonialsData.length - testimonialsToShow // Maximum index for the last set of testimonials

  // Move to the next set of testimonials
  const goToNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prevIndex => prevIndex + testimonialsToShow) // Move by 3 testimonials at a time
    }
  }

  // Move to the previous set of testimonials
  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - testimonialsToShow) // Move by 3 testimonials at a time
    }
  }

  return (
    <div className='bg-gray-800 py-10'>
      <div className='flex flex-col items-center justify-center'>
        <h3 className='text-gray-400 text-lg uppercase flex tracking-widest'>
          REVIEWS
        </h3>
        <h1 className='text-white text-4xl font-semibold flex tracking-wide'>
          What Our Clients Say About Us
        </h1>
      </div>
      <div className='testimonial-carousel-container relative w-full mt-24 px-4'>
        <div
          className='testimonial-carousel flex transition-transform duration-500 gap-8 mx-auto'
          style={{
            transform: `translateX(-${
              (currentIndex / testimonialsData.length) * 100
            }%)` // Moves by 3 cards at once
          }}
        >
          {testimonialsData.map(testimonial => (
            <div
              key={testimonial.id}
              className='testimonial-card max-w-[350px] flex-shrink-0 bg-white rounded-xl p-6 shadow-lg relative overflow-visible'
            >
              {/* Profile image positioned above the card */}
              <div className='absolute top-[-50px] left-1/2 transform -translate-x-1/2 z-20'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-24 h-24 rounded-full object-cover border-4 border-gray-200'
                />
              </div>
              <div className='mt-12'>
                {' '}
                {/* Adjusted margin-top to ensure space for the image */}
                <RiDoubleQuotesL size={30} color='red' />{' '}
                <p className='text-gray-700 mb-4 flex '>
                  {' '}
                  {testimonial.content}{' '}
                </p>
                <h3 className='text-xl font-bold text-red-500 italic absolute bottom-2 left-1/2 transform -translate-x-1/2'>
                  {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow buttons for navigating */}
      <div className='  flex justify-center items-center mt-10 space-x-3'>
        <button
          className='text-white hover:text-black bg-white bg-opacity-20 text-sm bg-opacity-50 hover:bg-opacity-100 p-2 rounded-full'
          onClick={goToPrev}
        >
          <IoIosArrowBack />
        </button>
        <button
          className='text-white bg-white hover:text-black bg-opacity-20 text-sm bg-opacity-50 hover:bg-opacity-100 p-2 rounded-full'
          onClick={goToNext}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  )
}

export default Testimonial
