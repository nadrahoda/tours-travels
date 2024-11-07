import React from 'react'
import img1 from '../assets/trip1.jpg'
import img2 from '../assets/trip2.jpg'
import img3 from '../assets/trip3.jpg'
import img4 from '../assets/trip4.jpg'
import img5 from '../assets/trip5.jpg'
import { FaUserCheck, FaUsers, FaMotorcycle, FaGlobe, FaPlane} from 'react-icons/fa6'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { MdEditNote } from "react-icons/md";


const WhyChooseUs = () => {
  return (
    <div className='flex gap-8 p-8 bg-gray-900 text-white py-24'>
      {/* Left Section with Images */}
      <div className='w-2/6 grid grid-cols-2 gap-4 '>
        {/* First Column with 2 Images */}
        <div className='grid grid-rows-2 gap-3'>
          <img
            src={img1}
            alt='Trip 1'
            className='w-[300px] h-[310px] object-cover rounded-lg'
          />
          <img
            src={img2}
            alt='Trip 2'
            className='w-[300px] h-[310px] object-cover rounded-lg'
          />
        </div>

        {/* Second Column with 3 Images */}
        <div className='grid grid-rows-3 gap-3'>
          <img
            src={img3}
            alt='Trip 3'
            className='w-[300px] h-[200px] object-cover rounded-lg'
          />
          <img
            src={img4}
            alt='Trip 4'
            className='w-[300px] h-[200px] object-cover rounded-lg'
          />
          <img
            src={img5}
            alt='Trip 5'
            className='w-[300px] h-[200px] object-cover rounded-lg'
          />
        </div>
      </div>

      {/* Right Section with Text */}
      <div className='w-4/6 flex flex-col items-start'>
        <h2 className='text-gray-400 text-lg uppercase  tracking-widest '>
          Why Choose Us
        </h2>
        <h4 className='text-white text-4xl font-bold flex flex-start tracking-wide'>
          Why भ्रMan Sukh
        </h4>
        <p className='italic text-lg mt-10'>
          {' '}
          "Every destination has a story; make it yours."
        </p>
        <p className='text-lg  text-left mt-10 text-balance text-gray-300'>
          Our team is dedicated to providing you with outstanding travel
          experiences that combine comfort, adventure, and cultural exploration.
          From hand-picked destinations to personalized services, we ensure
          every journey is memorable. With years of expertise in the travel
          industry, we pride ourselves on delivering exceptional itineraries
          crafted to meet your needs and exceed your expectations. Whether
          you're looking for a peaceful retreat or a thrilling adventure, our
          extensive network of partners allows us to offer the best prices and
          exclusive experiences. Choose us for seamless travel planning, 24/7
          support, and a commitment to making your travel dreams a reality. Let
          us handle the details so you can immerse yourself in the journey and
          focus on creating unforgettable memories.
        </p>
         {/* Icon Section */}
      <div className="grid grid-cols-3 gap-8 mt-10 w-full">
        
        {/* Icon 1 */}
        <div className="flex flex-col items-center text-center">
          <FaUserCheck className="text-4xl text-gray-400 mb-2 bg-white bg-opacity-10 p-2 rounded-lg" />
          <p className="text-white font-semibold">50,000+</p>
          <p className="text-gray-300">Satisfied Travelers</p>
        </div>
        
        {/* Icon 2 */}
        <div className="flex flex-col items-center text-center">
          <FaUsers className="text-4xl text-gray-400 mb-2 bg-white bg-opacity-10 p-2 rounded-lg" />
          <p className="text-white font-semibold">150+</p>
          <p className="text-gray-300">All Girls Trips</p>
        </div>
        
        {/* Icon 3 */}
        <div className="flex flex-col items-center text-center">
          <FaMotorcycle className="text-4xl text-gray-400 mb-2 bg-white bg-opacity-10 p-2 rounded-lg" />
          <p className="text-white font-semibold">250+</p>
          <p className="text-gray-300">Bike Trips</p>
        </div>
        
        {/* Icon 4 */}
        <div className="flex flex-col items-center text-center">
          <FaMapMarkedAlt className="text-4xl text-gray-400 mb-2 bg-white bg-opacity-10 p-2 rounded-lg" />
          <p className="text-white font-semibold">Customized</p>
          <p className="text-gray-300">Trips</p>
        </div>
        
        {/* Icon 5 */}
        <div className="flex flex-col items-center text-center">
          <MdEditNote className="text-4xl text-gray-400 mb-2 bg-white bg-opacity-10 p-2 rounded-lg" />
          <p className="text-white font-semibold">Hand-picked</p>
          <p className="text-gray-300">Itineraries</p>
        </div>
        
        {/* Icon 6 */}
        <div className="flex flex-col items-center text-center">
          <FaPlane className="text-4xl text-gray-400 mb-2 bg-white bg-opacity-10 p-2 rounded-lg" />
          <p className="text-white font-semibold">Exclusive</p>
          <p className="text-gray-300">Experiences</p>
        </div>

      </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
