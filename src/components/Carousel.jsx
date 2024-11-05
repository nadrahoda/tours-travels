import React, { useEffect, useRef, useState } from 'react'
import card1 from '../assets/img1.jpg'
import card2 from '../assets/img2.jpg'
import card3 from '../assets/img3.jpg'
import card4 from '../assets/img4.jpg'
import card5 from '../assets/img5.jpg'
import card6 from '../assets/img6.jpg'
import card7 from '../assets/img7.jpg'
import card8 from '../assets/img8.jpg'
import card9 from '../assets/img9.jpg'
import card10 from '../assets/img10.jpg'
import card11 from '../assets/img11.jpg'
import card12 from '../assets/img12.jpg'
import card13 from '../assets/img13.jpg'
import { IoLocationSharp } from 'react-icons/io5'
import { FaClock } from 'react-icons/fa6'
import { IoMdCalendar } from 'react-icons/io'
const cardsData = [
  {
    id: 1,
    title: 'Tour 1',
    image: card1,
    difficulty: 'Easy to Moderate',
    tripName: 'Mountain Adventure',
    location: 'Himalayas',
    month: 'Nov-Dec',
    duration: '4N/3D',
    price: '₹8000',
    rating: 4.5
  },
  {
    id: 2,
    title: 'Tour 2',
    image: card2,
    difficulty: 'Moderate',
    tripName: 'Forest Expedition',
    location: 'Western Ghats',
    month: 'Nov-Dec',
    duration: '5N/4D',
    price: '₹10000',
    rating: 4.0
  },
  {
    id: 3,
    title: 'Tour 3',
    image: card3,
    difficulty: 'Easy',
    tripName: 'All Girls Kedarkantha',
    location: 'Goa',
    month: 'Nov-Dec',
    duration: '3N/2D',
    price: '₹9000',
    rating: 4.7
  },
  {
    id: 4,
    title: 'Tour 4',
    image: card4,
    difficulty: 'Moderate',
    tripName: 'Desert Safari',
    location: 'Rajasthan',
    month: 'Nov-Dec',
    duration: '6N/5D',
    price: '₹25000',
    rating: 4.8
  },
  {
    id: 5,
    title: 'Tour 5',
    image: card5,
    difficulty: 'Moderate',
    tripName: 'River Rafting',
    location: 'Rishikesh',
    month: 'Nov-Dec',
    duration: '3N/2D',
    price: '₹15000',
    rating: 4.3
  },
  {
    id: 6,
    title: 'Tour 6',
    image: card6,
    difficulty: 'Moderate',
    tripName: 'Desert Safari',
    location: 'Rajasthan',
    month: 'Nov-Dec',
    duration: '6N/5D',
    price: '₹6999',
    rating: 4.8
  },
  {
    id: 7,
    title: 'Tour 7',
    image: card7,
    difficulty: 'Easy to Moderate',
    tripName: 'Mountain Adventure',
    location: 'Himalayas',
    month: 'Nov-Dec',
    duration: '4N/3D',
    price: '₹14999',
    rating: 4.5
  },
  {
    id: 8,
    title: 'Tour 8',
    image: card8,
    difficulty: 'Moderate',
    tripName: 'Forest Expedition',
    location: 'Western Ghats',
    month: 'Nov-Dec',
    duration: '5N/4D',
    price: '₹8999',
    rating: 4.0
  },
  {
    id: 9,
    title: 'Tour 9',
    image: card9,
    difficulty: 'Moderate',
    tripName: 'River Rafting',
    location: 'Rishikesh',
    month: 'Nov-Dec',
    duration: '3N/2D',
    price: '₹120000',
    rating: 4.3
  },
  {
    id: 10,
    title: 'Tour 10',
    image: card10,
    difficulty: 'Moderate',
    tripName: 'Forest Expedition',
    location: 'Western Ghats',
    month: 'Nov-Dec',
    duration: '5N/4D',
    price: '₹12000',
    rating: 4.0
  },
  {
    id: 11,
    title: 'Tour 11',
    image: card11,
    difficulty: 'Easy to Moderate',
    tripName: 'Mountain Adventure',
    location: 'Himalayas',
    month: 'Nov-Dec',
    duration: '4N/3D',
    price: '₹14000',
    rating: 4.5
  },
  {
    id: 12,
    title: 'Tour 12',
    image: card12,
    difficulty: 'Moderate',
    tripName: 'River Rafting',
    location: 'Rishikesh',
    month: 'Nov-Dec',
    duration: '3N/2D',
    price: '₹9999',
    rating: 4.3
  }
  // Add more cards as needed
]

const Carousel = () => {
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
  }, [])

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
    </div>
  )
}

export default Carousel
