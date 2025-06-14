import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { SiLeetcode } from 'react-icons/si';
import { TbBrandHackerrank } from 'react-icons/tb';
import { CiSun } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { Link as ScrollLink } from 'react-scroll';

const socialLinks = [
  { icon: SiLeetcode, link: 'https://leetcode.com/u/HUSTLER_09/' },
  { icon: TbBrandHackerrank, link: 'https://www.hackerrank.com/profile/info_abhaysharm1' },
  { icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/sharmaabhay07/' },
  { icon: FaGithub, link: 'https://github.com/abhay-0907' },
  { icon: IoMailOutline, link: 'mailto:info.abhaysharma09@gmail.com' },
];

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  ;

  return (
    <motion.div
    initial={{ opacity: 0 ,y: -50 }} 
    animate={{ opacity: 1 ,y: 0 }}
    transition={{ duration: 0.5 }}
    className={`fixed top-0 left-0 w-full flex justify-between items-center px-5 py-4 font-semibold z-[1000] md:justify-around  backdrop-blur-md`}>


      {/* Logo */}
      <div>
        <a href="#" className="text-[35px]">
          <span>A</span>
          <span className="text-purple-400">s</span>
        </a>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex justify-between gap-5">

        {navItems.map(item => (
          <ScrollLink
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            offset={0}
            className="cursor-pointer hover:text-purple-500 mx-2"
          >
            <span className="text-purple-500">#</span>{item}
          </ScrollLink>
        ))}
                {/* Dark Mode Toggle Button */}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="md:inline-block"
        >
          {darkMode ? 
          <motion.div   
            whileTap={{ rotate: 0, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 360, opacity: 1, scale: 1 }}
            exit={{ rotate: -360, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6 }}
          >
          <CiSun className='text-2xl font-bold dark:text-[#c470db]' />
          </motion.div>
            :
            <motion.div
            whileTap={{rotate:360}}
            transition={{ duration: 1 }}
            >
              <IoMoon className='text-xl' />
            </motion.div>}
        </button>

</div>

    <div className='md:hidden flex gap-4'>
        {/* Dark Mode Toggle Button */}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="md:inline-block"
        >
          {darkMode ? 
          <motion.div   
            whileTap={{ rotate: 0, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 360, opacity: 1, scale: 1 }}
            exit={{ rotate: -360, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6 }}
          >
          <CiSun className='text-2xl font-bold dark:text-[#c470db]' />
          </motion.div>
            :
            <motion.div
            whileTap={{rotate:360}}
            transition={{ duration: 1 }}
            >
              <IoMoon className='text-xl' />
            </motion.div>}
        </button>
      



      {/* Menu Button (Mobile) */}
      <div className="md:hidden text-3xl cursor-pointer z-[1100]" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> :
          <HiMenuAlt3 />}
      </div>
      </div>
      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-screen w-[60%] ${darkMode ? 'bg-[#0f0f0f]' : 'bg-gray-100'}  dark:text-white text-black p-6 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-[1050]`}>
        <div className="flex flex-col gap-6 mt-10">
           {navItems.map(item => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer border-b border-purple-500 pb-1"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-purple-500">#</span>{item}
            </ScrollLink>
          ))}


          {/* <div> <span className='text-purple-500'>#</span>Theme
            {darkMode ? (
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-3 py-1 text-xl rounded  text-black dark:text-white"
              > 
                <CiSun className='inline-block text-2xl dark:text-[#c470db]' />
              </button>
            ) : (
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-3 py-1  rounded text-xl text-black dark:text-white"
              > 
                <IoMoon className='inline-block mb-2 text-2xl font-bold dark:text-[#c470db]' />
              </button>
            )}
          </div> */}

          <div className="flex gap-4 mt-3">
            {socialLinks.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-2xl hover:text-purple-400'
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Toggle inside mobile menu */}

          
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
