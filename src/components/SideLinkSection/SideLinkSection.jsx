import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { SiLeetcode } from 'react-icons/si';
import { TbBrandHackerrank } from 'react-icons/tb';

const socialLinks = [
  { icon: SiLeetcode, link: 'https://leetcode.com/u/HUSTLER_09/' },
  { icon: TbBrandHackerrank, link: 'https://www.hackerrank.com/profile/info_abhaysharm1' },
  { icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/sharmaabhay07/' },
  { icon: FaGithub, link: 'https://github.com/abhay-0907' },
  { icon: IoMailOutline, link: 'mailto:info.abhaysharma09@gmail.com' },
];

const SideLinkSection = () => {
  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className='hidden  md:flex flex-col items-center w-[100px] fixed left-[-10px] top-0 gap-5 z-50'
    >
      <div className='w-[1px] h-[35vh] border dark:border-white border-black'></div>
      
      {socialLinks.map(({ icon: Icon, link }, index) => (
        <a
          key={index}
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='dark:text-white text-black hover:text-purple-400 dark:hover:text-purple-400 text-2xl'
        >
          <Icon />
        </a>
      ))}
    </motion.div>
  );
};

export default SideLinkSection;
