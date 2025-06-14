import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { BackgroundBeams } from '../ui/BackgroundBeams';



const text = 'Contact Me ->'
const titles = [
  'Frontend Developer',
  'AIML Enthusiast',
  'Computer Science Student',
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change every 2 seconds
    return () => clearTimeout(timeout);
  }, [index]);


  return (
    <div className='flex flex-wrap relative h-screen'>
      
      
      <div className='w-full flex flex-col justify-center items-center h-full '>
        <div className='p-8 tracking-normal'>
          <h4 className='text-3xl my-4'>
            Hii, I'm
          </h4>
        <h1 className='text-8xl'>
          Abhay Sharma
        </h1>  
        <AnimatePresence mode="wait">
        <motion.h4
          key={titles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className='text-4xl text-purple-400'
        >
          {titles[index]}
        </motion.h4>
      </AnimatePresence>

        </div>
        <div className='flex gap-6 my-6'>
           <button className='px-4 py-2 border-2 text-xl text-[#c470db] border-[#c470db] relative z-10 '
           onClick={() => window.open('/#contact', '_self')}>
            {text}
           </button>
           <button className='px-4 py-2 bg-[#c470db] text-xl relative z-10' onClick={() => window.open('/Resume.pdf', '_blank')}>
            Download Resume<MdOutlineFileDownload className='inline mb-1 '/>
           </button>
        </div>
      </div>   
     
      <BackgroundBeams/>
     
    </div>
  )
}

export default HeroSection