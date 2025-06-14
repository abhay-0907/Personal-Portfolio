import Project2 from '../assets/images/project2.png';
import Project1 from '../assets/images/project1.png'
import Project3 from '../assets/images/project3.png'
export const projectInfo = [
  {
    id: 1,
    name: "Portfolio Website",
    img: Project1,
    des: "A responsive personal portfolio website built with React, Tailwind CSS and Framer-Motion to showcase my skills, projects, and resume.",
    tech: ["React", "Tailwind CSS", "JavaScript", 'Framer-Motion'],
    
    link:[
      {
        name:"Github",
        link:'#',
      }
    ]
  },
  {
    id: 2,
    name: "Music App",
    img: Project2,
    des: "A cloned music web app built with React and Redux for state management, styled using  Tailwind CSS, and powered by RapidAPI.", 
    tech: ["React", "Redux", "Tailwind CSS", "Rapid-API"],

    link:[
      {
        name:"Github",
        link:'#',
      },
      {
        name:"Live Demo",
        link:"#",
      }
    ]

  },
  // {
  //   id: 3,
  //   name: "Event Management System",
  //   img: Project1,
  //   des: "A full-stack application for creating, joining, and managing events with role-based access, built using .NET Core and React.",
  //   tech: [".NET Core", "React", "SQL Server", "Bootstrap"],
  // },
  {
    id: 4,
    name: "Deepfake Detection",
    img: Project3,
    des: "A machine learning project using CNN and transfer learning to detect GAN and diffusion-based deepfake images.",
    tech: ["Python", "TensorFlow", "Transfer Learning", "CNN"],
    
    link:[
      {
        name:"Github",
        link:'#',
      },
      {
        name:"Live Demo",
        link:"#",
      }
    ]
  },
];

export default projectInfo;
