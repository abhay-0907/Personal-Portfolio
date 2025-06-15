import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs
      .sendForm('service_nfw5y1b', 'template_b2gza0l', form.current, {
        publicKey:'AT-xv74kxHUgQ_xAj',
      })
      .then(
        () => {
            alert('Message successfully sent!');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
       
            <form
                ref={form}
                onSubmit={sendEmail}
                className="border-[1px] p-8 w-full max-w-md text-white space-y-6 shadow-xl">
                <div>
                    <label className="block mb-1 font-semibold">Name</label>
                    <input
                        type="text"
                        placeholder="Your name"
                        name='name'
                        required
                        className="w-full px-4 py-3 bg-transparent  border-[1px]  text-white focus:outline-none focus:ring-2 focus:ring-[#7c5cf5]"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Email</label>
                    <input
                        type="email"
                        name='email'
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-transparent  border-[1px]  text-white focus:outline-none focus:ring-2 focus:ring-[#7c5cf5]"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Message</label>
                    <textarea
                        rows="5"
                        name='message'
                        placeholder="Write your message here..."
                        className="w-full px-4 py-3 bg-transparent  border-[1px]  text-white focus:outline-none focus:ring-2 focus:ring-[#7c5cf5]"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 hover:bg-[#c470db] hover:bg-opacity-10 text-black dark:text-white font-semibold border-[1px] transition duration-300"
                >
                    Send Message
                </button>
            </form>
     
    )
}

export default Form