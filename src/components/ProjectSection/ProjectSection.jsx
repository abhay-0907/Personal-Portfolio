import React from 'react'
import { projectInfo } from '../../constants/project-info'
import { motion, } from 'motion/react'


const ProjectSection = () => {

    return (
        <div className='flex flex-wrap'>
            <div className='w-full my-10 p-10 md:p-24'>
                <motion.div

                    initial={{ x: -150, opacity: 0 }}
                    whileInView={
                        {
                            x: 0,
                            opacity: 1,
                            transition: { duration: 1 }
                        }
                    }
                    viewport={{ once: true }}

                    className='flex gap-2 items-center '>
                    <h1 className='text-3xl'> <span className='text-[#c470db]'>#</span>Projects</h1>
                    <div className='h-[1px] w-[30vw] dark:bg-[#c470db] bg-[#9602bf]'>
                    </div>
                </motion.div>

                <div className="my-14 flex flex-wrap justify-between md:gap-2">
                    {projectInfo.map((project, index) => (

                        <motion.div
                            initial={{ opacity: 0.3, y: +20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1, delay: 0.5 }
                            }}
                            whileHover={{ scale: 1.03 }}
                            viewport={{
                                once: true,
                                amount: 0.2
                            }}
                            key={index} className="w-full h md:w-[30%] border   mb-8 ">
                            
                            <div className=''>
                                <img src={project.img} alt={project.name} className='w-full h-[300px]  object-cover'/>
                            </div>

                            <div className='p-2 border-t-[1px]'>
                                <p className='text-justify text-base font-[300]'>
                                    {project.des}
                                </p>
                            </div>
                            <div className=" p-2 border-y-[1px]  ">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className='mx-2 opacity-60 inline-block font-[jost-Italic]'>{tech}</span>
                                    ))}
                            </div>

                            

                            <div className='mx-4'>
                                <h1 className="text-xl dark:text-white text-black font-bold my-4">{project.name}</h1>

                                {project.link.map((item,idx)=>{
                                    return(
                                        <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 mb-4 border-[1px] border-[#c470db] dark:text-white hover:bg-purple-400 hover:bg-opacity-20 text-center mr-4"
                                >
                                    {item.name}
                                </a>
                                    )
                                })}

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ProjectSection