import { AiOutlineCalendar } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Posts = () => {
    const [blogPosts, setBlogPosts] = useState([]);

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
  return (
    <div>
      <h1 className='text-white font-mono pt-8 hover:underline text-center text-4xl text-mono'>All Posts</h1>
            <div className="grid gap-16 mx-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
                {blogPosts.map((blogPost) => (
                    <motion.div

                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[rgb(234,234,234)] hover:-mt-4 cursor-pointer shadow-lg h-fit rounded-lg overflow-hidden border-white border-x-4 border-y-4"
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
                            </button>
                        </div>
                    </motion.div>


                ))}
            </div>
    </div>
  )
}

export default Posts
