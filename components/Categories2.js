import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineCalendar } from 'react-icons/ai'
import { FiArrowLeft, FiArrowRight, FiUser } from 'react-icons/fi'



const Categories2 = () => {
    const [categories, setCategories] = useState([]);


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
    return (
        <div className='main div'>

            <div className='flex justify-center'>
                <h1 className='text-white font-mono bg-black text-center text-4xl text-mono py-2'>Categories</h1>
                <div className='text-white text-4xl right-0 pt-28 absolute'>
                    <FiArrowRight />
                </div>
            </div>

            <div className="flex bg-black text-white mx-4 space-x-32 py-8 scrollbar-hide overflow-y-hidden  overflow-x-scroll">

                {categories.map((nice) => (
                    <motion.div

                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-plum shadow-md   rounded-full   "
                    >
                        <img
                            src={nice.categoryImage}
                            alt="Blog Post"
                            className=" rounded-full h-16 w-48 object-cover  "
                        />
                        <div className="pt-1">
                            <h2 className=" font-bold font-mono   text-center text-white lue-800">{nice.name}</h2>
                        </div>
                    </motion.div>
                ))}


            </div>

        </div>

    )
}

export default Categories2
