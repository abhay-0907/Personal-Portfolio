import React from 'react'
import { FiGithub } from "react-icons/fi";

import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-wrap'>
        <div className='w-full my-10 p-10 md:p-24'>
            <div className='flex flex-col  items-center  text-center'>
                <h1 className='text-xl'>
                   Build with ❤️ by Abhay Sharma
                </h1>
                <div className='p-4'>
                    <a href="" className='inline-block mx-1'><FiGithub className='text-2xl hover:text-purple-400 '/></a>
                    <a href="" className='inline-block mx-1'><FaLinkedinIn className='text-2xl hover:text-purple-400 '/></a>
                </div>
                <span className='font-[100]'>© 2025 Abhay Sharma. All rights reserved.</span>
            </div>
        </div>
    </div>
  )
}

export default Footer