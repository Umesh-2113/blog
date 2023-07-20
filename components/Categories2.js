import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi';

const Categories2 = () => {
  const [categories, setCategories] = useState([]);
  const [textColor, setTextColor] = useState('#FFFFFF');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/getCategory');
        const data = await response.json();
        if (response.ok) {
          setCategories(data.data);
        } else {
          console.error('Failed to fetch categories');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const colors = ['#BA68C8', '#00FFFF'];

  const updateTextColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setTextColor(colors[randomIndex]);
  };

  useEffect(() => {
    const interval = setInterval(updateTextColor, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='main div'>
      <div className='flex justify-center'>
        <motion.h1
          style={{ color: textColor }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='text-white font-mono bg-black text-center text-4xl text-mono py-2 font-extrabold cursor-pointer hover:underline'
        >
          Categories
        </motion.h1>
        <div className='text-white text-4xl right-0 pt-28 absolute'>
          <FiArrowRight />
        </div>
      </div>

      <div className="flex bg-black text-white mx-4 space-x-32 py-8 scrollbar-hide overflow-y-hidden  overflow-x-scroll">
        {categories.map((nice, index) => (
          <motion.div
            key={nice.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: index * 0.1 }}
            className="bg-plum shadow-md rounded-full"
          >
            <motion.img
              src={nice.categoryImage}
              alt="Blog Post"
              className="rounded-full h-16 w-16 object-cover"
              animate={{ scale: [1, 1.5, 1] }} // Add the scaling animation for the image
              transition={{ repeat: Infinity, duration: 5 }} // Repeat the animation continuously
            />
            <div className="pt-1">
              <h2 className="font-bold font-mono text-center text-white blue-800">{nice.name}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories2;
