
import React from 'react'

import { motion } from 'motion/react'
import Paragraph from './Paragraph'
export const About = () => {
  return (
    <div className='flex flex-wrap '>
      <div className='w-full my-10 p-10 md:p-24'>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={
            {
              x: 0,
              opacity: 1,
              transition: { duration: 1 }
            }
          }
          viewport={{ once: true }}
          className='flex gap-2 items-center'>
          <h1 className='text-3xl tracking-tighter'> <span className='text-[#c470db]'>#</span>About Me</h1>
          <div className='h-[1px] w-[30vw] bg-[#c470db]'></div>
        </motion.div>

        
        <motion.div
        whileInView={
            {
              opacity: 1,
              transition: { duration: 1 }
            }
          }
          viewport={{ once: true }}
         className='my-6 md:my-10'>
         <Paragraph/>
        </motion.div>
      </div>
    </div>
  )
}
export default About