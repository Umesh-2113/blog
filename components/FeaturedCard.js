import React from 'react'
import { motion } from "framer-motion"
import { FiBook, FiCpu, FiHome, FiSunrise, FiUserX, FiZap } from 'react-icons/fi'

const FeaturedCard = () => {
  return (
    <div className=' bg-black mx-auto '>

      <motion.div
        initial={{ opacity: 0, Scale: 0.8 }}
        animate={{ opacity: 1, Scale: 1 }}
        className=" mx-auto "
      >
        <div className=' w-full  text-white '>


          <div className=' flex justify-evenly pt-8  space-x-4  h-24 px-8  rounded-xl border-white  text-white font-mono md:text-lg text-sm'>

            <div className='flex gap-2'>

              <div className='pt-1'>
                <FiHome />
              </div>

              <h1 className='hover:text-purple-300 cursor-pointer'>Home</h1>

            </div>

            <div className='flex gap-2'>

              <div className='pt-1'>
                <FiZap />
              </div>

              <h1 className='hover:text-purple-300 cursor-pointer'>Categories</h1>

            </div>

            <div className='flex gap-2'>

              <div className='pt-1'>
                <FiBook />
              </div>

              <h1 className='hover:text-purple-300 cursor-pointer'>Posts</h1>

            </div>

            <div className='flex gap-2'>

              <div className='pt-1'>
              <FiCpu />
              </div>

              <h1 className='hover:text-purple-300 cursor-pointer'>About Us</h1>

            </div>
          </div>
        </div>

      </motion.div>

    </div>
  )
}

export default FeaturedCard
