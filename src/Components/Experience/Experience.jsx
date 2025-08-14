import React, { forwardRef,useEffect } from "react";
import StarBorder from '../../ui/StarBorder'
import GradientText from '../../Common/GradientText'
import {motion} from 'motion/react'


const Experience = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='w-screen h-screen flex flex-col justify-center items-center gap-4'>
        <div className='w-[95%] sm:w-[90%] xl:w-250 flex justify-start items-center text-gray-400 font-bold font-[Roboto] normal-case text-4xl ml-12'><GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} showBorder={false} className="custom-class">Experience</GradientText></div>
       <StarBorder as="button" className="custom-class w-[95%] sm:w-[90%] xl:w-250 flex justify-start items-start" color="cyan" speed="5s">
        <div className='flex flex-col justify-start items-center gap-2 w-80'>
            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0, transition:{delay:0.2, duration:0.5}}} viewport={{once:false, amount:.5}} className='text-[24px] text-gray-400 font-semibold tracking-normal flex justify-start w-full'>Xeltratech</motion.div>
            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0, transition:{delay:0.3, duration:0.5}}} viewport={{once:false, amount:.5}} className='w-full h-auto flex justify-start items-center font-[Anton] text-3xl sm:text-4xl font-bold text-gray-500'>Frontend-Intern</motion.div>
            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:0.5}}} viewport={{once:false, amount:.5}} className='text-[20px] text-gray-400 font-semibold tracking-normal flex justify-start w-full font-[Roboto]'>Jan 2025 - April 2025</motion.div>
        </div>

        <div className=' flex flex-col justify-start items-center w-full xl:w-150 gap-4'>
            <div className='w-full h-auto flex justify-start items-center gap-4'>
                <div className='flex justify-center items-start  h-full w-5 '><div className='rounded-full bg-gray-500 w-3 h-3'></div></div>
                
                <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:0.5}}} viewport={{once:false, amount:.5}} className='flex justify-start items- font-[Roboto] text-[12px] sm:text-[16px] text-left tracking-[.20em] '> Designed and launched a responsive IT service website using React.js, showcasing 3+ projects and technical competencies to enhance professional visibility.</motion.div>
            </div>

             <div className='w-full h-auto flex justify-start items-center gap-4'>
                <div className='flex justify-center items-start h-full w-5 '><div className='rounded-full bg-gray-500 w-3 h-3'></div></div>
                
                <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0, transition:{delay:0.7, duration:0.5}}} viewport={{once:false, amount:.5}} className='flex justify-start items-center font-[Roboto] text-[12px] sm:text-[16px] text-left tracking-[.20em] '>Engineered smooth navigation and a modular component architecture, improving site scalability and maintainability by 30%.</motion.div>
            </div>

            <div className='w-full h-auto flex justify-start items-center gap-4'>
                <div className='flex justify-center items-start h-full w-5 '><div className='rounded-full bg-gray-500 w-3 h-3'></div></div>
                
                <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:0.5}}} viewport={{once:false, amount:.5}} className='flex justify-start items-center font-[Roboto] text-[12px] sm:text-[16px] text-left tracking-[.20em] '>Ensured 99.9% uptime and optimized performance by leveraging Vercel’s scalable hosting infrastructure with continuous integration.</motion.div>
            </div>

             <div className='w-full h-auto flex justify-start items-center gap-4'>
                <div className='flex justify-center items-start h-full w-5 '><div className='rounded-full bg-gray-500 w-3 h-3'></div></div>
                
                <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0, transition:{delay:0.9, duration:0.5}}} viewport={{once:false, amount:.5}} className='flex justify-start items-center font-[Roboto] text-[12px] sm:text-[16px] text-left tracking-[.20em] '> Built and styled data-driven web pages using HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility and improving user experience by 25%.</motion.div>
            </div>
        </div>
       </StarBorder>
    </div>
  )
});

export default Experience
