
import { motion } from 'motion/react';
import Form from './Form';


const data = ['Email', 'info.abhaysharma09@gmail.com', 'Phone', '+91 9335592181']
const ContactUs = () => {

    return (
        <div className='flex  flex-wrap'>
            <div
            className='w-full p-10 md:p-24'>

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
                    className='flex gap-2 items-center'>
                    <h1 className='text-3xl'><span className='text-[#c470db]'>#</span>Get In Touch</h1>
                    <div className='h-[1px] w-[30vw] dark:bg-[#c470db] bg-[#9602bf]'></div>
                </motion.div>

                <div className='my-8 flex flex-wrap  justify-between'>

                    <div className='my-4'>
                        <div>
                            <h1 className='text-4xl mb-4'>
                                Contact Us
                            </h1>
                        </div>

                        <div className='flex flex-col'>
                            
                               <span className='my-2 text-xl'> Email : info.abhaysharma09@gmail.com</span>
                                
                            
                           <span className='my-2 text-xl'>
                             Phone : 9335592181
                           </span>

                            
                        </div>
                    </div>

                    <Form />

                </div>
            </div>
        </div>
    )
}

export default ContactUs