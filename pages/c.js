import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineCalendar } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'



const c = () => {
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
    <div>
         

<h1 className='text-white text-center text-4xl text-mono py-8'>Categories</h1>
            <div className="grid gap-10 mx-4 my-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">

                {categories.map((nice) => (
                    <motion.div

                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-plum shadow-md h-full rounded-full overflow-hidden border-spacing-3 border-white border-x-4 border-y-4 bg-slate-200"
                    >
                        <img
                            src={nice.categoryImage}
                            alt="Blog Post"
                            className="w-full h-[70%] object-cover"
                        />
                        <div className="pt-4">
                            <h2 className="text-1xl font-bold font-mono mb-2 text-center text-blue-800">{nice.name}</h2>
                        </div>
                    </motion.div>
                ))}


            </div>
      
    </div>
  )
}

export default c
