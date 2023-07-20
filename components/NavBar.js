import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className='flex bg-black pb-8 text-white'>
      <div className='flex'>
        <img src='p.webp' alt='image' className='h-12' />
      </div>
      <div className=''>
        <h1 className='md:text-2xl text-xs text-white font-mono font-extrabold pt-4'>Full Stalk</h1>
      </div>
      <div className='w-[30%]'></div>
      <div className='flex mx-auto space-x-8 md:ml-96 mt-4'>
        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
          <FaInstagram size={18} className='hover:text-purple-300' />
        </a>
        <a href='https://in.linkedin.com/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin size={18} className='hover:text-purple-300'/>
        </a>
        <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
          <FaTwitter size={18} className='hover:text-purple-300'/>
        </a>
        <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
          <FaGithub size={18} className='hover:text-purple-300'/>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
