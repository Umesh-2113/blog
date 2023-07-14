import {FaInstagram, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';
import { motion } from "framer-motion"
import React, { useEffect, useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'


const hp = () => {
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
    <div className='h-screen w-full'>
    <div className='w-full h-[15%] flex bg-black text-white'>
    <div className='h-[100%] w-fit flex'>
            <img src= 'p.webp' alt='image' className='h-full w-full'/>

           
            </div>
            <div className='pl-[30%] p-4'>
            <h1 className='md:text-5xl text-white font-mono'>Test Blog</h1>
            </div>

            <div className=' flex mx-auto space-x-8 w-[10%] h-[40%] mt-10'>
              <a
              href='#'>
                <FaInstagram size={24}/>
              </a>
              <a
              href='#'>
              <FaLinkedin size={24}/>
              </a>
              <a href='#'>
              <FaTwitter size={24}/>
              </a>
              
              <a href='#'>
              <FaGithub size={24}/>
              </a>

               </div>
    </div>           

               <div className='w-full bg-black mx-auto mb-8 '>
         
         <motion.div
             initial={{opacity:0, Scale:0.8}}
             animate={{opacity:1, Scale:1}}
             className="w-full mx-auto h-[50%] "
             >
                <img src='b2.gif' alt='gif' className='w-full h-[50%] object-fill'/> 
                </motion.div>

          </div>
          
        <div className=' flex justify-center space-x-32 text-white text-2xl font-mono pb-10'>
        <a href='hp' className=' hover:text-purple-600'>Home</a>
        <a href='ap' className=' hover:text-purple-600'>All Post</a>
        <a href='c' className=' hover:text-purple-600'>Categories</a>
        <a href='c' className=' hover:text-purple-600'>About Us</a>
        
        </div>

        {/* <div>
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
          </div>   */}
          </div> 
  )
}

export default hp
