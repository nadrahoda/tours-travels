import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { FaClock } from 'react-icons/fa6'
import { IoMdCalendar } from 'react-icons/io'
import cardsData from '../data/cardsData'

const BestTreks = () => {
  return (
    <div className='bg-gray-800 min-h-screen py-10 px-6'>
      <h1 className='text-white text-4xl font-bold mb-6 text-center'>
        All Treks
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {cardsData.map(card => (
          <div
            key={card.id}
            className='bg-gray-900 rounded-lg overflow-hidden shadow-lg'
          >
            <img
              src={card.image}
              alt={card.title}
              className='w-full h-60 object-cover'
            />
            <div className='p-4'>
              <h2 className='text-2xl text-white font-semibold'>
                {card.tripName}
              </h2>
              <p className='text-gray-400'>{card.location}</p>
              <div className='flex items-center justify-between mt-2 text-gray-300'>
                <div className='flex items-center'>
                  <IoLocationSharp className='mr-1' /> {card.location}
                </div>
                <div className='flex items-center'>
                  <FaClock className='mr-1' /> {card.duration}
                </div>
                <div className='flex items-center'>
                  <IoMdCalendar className='mr-1' /> {card.month}
                </div>
              </div>
              <div className='mt-4 text-white font-bold text-lg'>
                {card.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestTreks
