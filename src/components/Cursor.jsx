import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveCursor = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      animate={{x: cursor.x, y: cursor.y}}
     
      transition={{ type: 'spring', stiffness: 180, damping: 30 }}
      className='fixed top-0 left-0 w-4 h-4 dark:bg-white bg-black rounded-full pointer-events-none z-[9999] hidden md:block'
    />
  );
};

export default Cursor;
