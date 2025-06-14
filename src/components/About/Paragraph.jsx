import { useAnimate,motion,useInView } from 'motion/react'
import { stagger } from 'motion'
import React, { useEffect } from 'react'

const Paragraph = () => {
    const[scope, animate] = useAnimate()
    const isInView = useInView(scope)
    const text = "Hi! I'm Abhay Sharma — a Frontend Developer and AI/ML Enthusiast passionate about creating seamless digital experiences and intelligent solutions. With a strong foundation in web development and a growing expertise in machine learning, I enjoy building interfaces that are not only visually appealing but also intuitive and user-friendly. I'm proficient in modern frontend technologies like React, Tailwind CSS, and JavaScript, and I love crafting responsive, accessible, and high-performance web applications. On the AI/ML side, I'm exploring the potential of data-driven models to solve real-world problems, with projects ranging from deepfake detection to intelligent automation. Whether it's designing pixel-perfect UIs or experimenting with neural networks, I'm driven by curiosity and a desire to make an impact through technology."

    useEffect(()=>{
        if(isInView){
            startAnimating();
        }
    },[isInView,scope])

    const startAnimating = () => {
        animate(
            'span',
            {
                
                opacity:1, 
                filter:"blur(0px)",
                y:0, 
            },
            {
                duration:1,
                ease:"easeInOut",
                delay:stagger(0.01)
                
            }
            
        )
    }

  return (
      <div ref={scope}>
          {text.split(" ").map((word , idx) => {
              return (
                  <motion.span
                  key={word + idx}
                  className='opacity-0 blur-md  text-2xl font-[jost-Italic]  '>
                    {word + " "} 
                  </motion.span>
              )
          })}
      </div>
  )
}

export default Paragraph