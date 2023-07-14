import React from 'react'
import {FaInstagram, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className=' flex bg-black pb-8 text-white'>
    <div className=' flex'>
            <img src= 'p.webp' alt='image' className='h-12'/>

           
            </div>
            <div className=' '>
            <h1 className='md:text-2xl text-xs text-white font-mono font-extrabold pt-4'>Full Stalk</h1>
            </div>
<div className='w-[30%]'></div>
            <div className=' flex mx-auto space-x-8 md:ml-96   mt-4'>
              <a
              href='#'>
                <FaInstagram size={18}/>
              </a>
              <a
              href='#'>
              <FaLinkedin size={18}/>
              </a>
              <a href='#'>
              <FaTwitter size={18}/>
              </a>
              
              <a href='#'>
              <FaGithub size={18}/>
              </a>

               </div>
               
        </div>
    
  )
}

export default NavBar
