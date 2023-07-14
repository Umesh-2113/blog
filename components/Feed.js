import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineCalendar } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'

export default function Feed() {

    const [blogPosts, setBlogPosts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch('/api/getPosts');
                const data = await response.json();
                if (response.ok) {
                    setBlogPosts(data.data);
                } else {
                    console.error('Failed to fetch blog posts');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogPosts();
    }, []);

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
         <div className=' flex justify-center space-x-32 text-white text-2xl font-mono pb-10'>
         <a href='hp' className=' hover:text-purple-600'>Home</a>
         <a href='ap.js' className=' hover:text-purple-600'>All Post</a>
         <a href='c' className=' hover:text-purple-600'>Categories</a>
         <a href='' className=' hover:text-purple-600'>About Us</a>
        
         </div>
        
         <div>
            <h1 className='text-white text-center text-5xl font-mono pt-4'>All Posts</h1>
            <div className="grid gap-16 mx-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
                {blogPosts.map((blogPost) => (
                    <motion.div

                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[rgb(234,234,234)] shadow-lg h-fit rounded-lg overflow-hidden border-white border-x-4 border-y-4"
                    >
                        <img
                            src={blogPost.Image}
                            alt="Blog Post"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold font-mono mb-4 text-blue-900">{blogPost.title}</h2>
                            <div className="flex items-center text-blue-900 text-sm mb-2">
                                <AiOutlineCalendar className="mr-2" />
                                {blogPost.date}
                            </div>
                            <div className="flex items-center text-blue-900 text-sm">
                                <FiUser className="mr-2" />
                                {blogPost.author}
                            </div>
                            <p className="text-gray-700 mt-4"></p>
                            <button className="bg-black text-white px-4 py-2 rounded-md mt-4">
                                Read More
                                <a href =''/>
                            </button>
                        </div>
                    </motion.div>


                ))}
            </div>
            <h1 className='text-white text-center text-4xl font-mono py-8'>Categories</h1>
            <div className="grid gap-10 mx-4 my-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <style>
                    @keyframes style {
                        
                    }
                </style>

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
    </div>    

    )
}