import React, { forwardRef, useRef } from "react";
import {motion} from 'motion/react'
import GradientText from "../../Common/GradientText";
import githublogo from '../../Components/Skills/Images/github.png'
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'
import { Copy } from "../../Common/Copy";
import ScrollAboutItemleft from "./ScrollAboutItemleft";
import ScrollFadeOutLeft from "./ScrollFadeOutLeft";
import ScrollAboutItemright from "./ScrollAboutItemright";
import ScrollFadeOutRight from './ScrollFadeOutRight'
import ScrollSkillItem from "../Skills/ScrollSkillItem";

const About = forwardRef((props, ref) =>{
  //  const triggerRef = useRef(null);
  return (
    <div ref={ref} className='relative  w-screen min-h-screen flex flex-col justify-center items-center  gap-5'>

      <div  className="w-[95%] sm:w-[90%] xl:w-250 flex justify-start items-center">

        <div className="w-full flex justify-start items-center text-gray-400 font-bold font-[Roboto] normal-case text-4xl">
                <GradientText colors={["#40ffaa", "#7479ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3}>About Me</GradientText>
        </div>

      </div>

      <div className="w-[95%] sm:w-[90%] xl:w-250 flex flex-wrap justify-start items-start gap-5">

        <motion.div  initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0, transition:{delay:0.2, duration:0.5}}} viewport={{once:false, amount:.5}} className="font-[Roboto] w-full sm:w-120 h-auto text-[12px] md:text-[14px] lg:text-2xl leading-8 text-white">I’m a Full Stack MERN Developer with a strong foundation in building scalable, responsive web applications using MongoDB, Express.js, React, and Node.js. I specialize in clean UI design with Tailwind CSS and intuitive UX powered by Framer Motion. With Docker, I ensure efficient development and deployment workflows across environments. I’m detail-oriented, collaborative, and always eager to learn emerging technologies. My work reflects a balance of functional performance and user-centric design—crafted with precision and built for scale. I value teamwork, clear communication, and solving real-world problems through code.</motion.div>




            <div className="h-50 w-auto flex flex-col justify-start items-start gap-5">
            <div className="font-[Anton] text-4xl text-gray-400 w-full   " >Social Links</div>
            <div className=" w-full flex justify-start items-center gap-5 mb-4">
                <motion.a initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:0.3}}} viewport={{once:false, amount:.5}} aria-label="github" href="https://github.com/vishalvishwas01" target="_blank" className="cursor-pointer border-2 rounded-[50%] hover:bg-purple-800 transition-all"><img src={githublogo} loading="eager" alt="github"/></motion.a>
                <motion.a initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0, transition:{delay:0.5, duration:0.3}}} viewport={{once:false, amount:.5}} aria-label="linkedin" href="https://www.linkedin.com/in/vishalvishwas/" target="_blank" className="cursor-pointer border-2 rounded-[50%] hover:bg-blue-800 transition-all p-[2px]"><img src={linkedin} loading="eager" alt="linkedin"/></motion.a>
                <motion.a initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:0.3}}} viewport={{once:false, amount:.5}} aria-label="twitter" href="https://x.com/vishalvishwas01" target="_blank" className="cursor-pointer border-2 rounded-[50%] hover:bg-gray-800 transition-all p-[2px]"><img src={twitter} loading="eager" alt="twitter"/></motion.a>
            </div>

              <div className="font-[Anton] text-4xl text-gray-400 w-full flex " >Email <motion.span initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:0.3}}} viewport={{once:false, amount:.5}} className="font-[Roboto] text-[16px] flex sm:hidden justify-center items-center text-white ml-2"> vishalvishwas7082@gmail.com<Copy/></motion.span></div>
              <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:0.3}}} viewport={{once:false, amount:.5}} className="font-[Roboto] text-xl sm:text-2xl hidden sm:flex justify-start items-center text-white">vishalvishwas7082@gmail.com<Copy/></motion.div>
            </div>


      </div>
    </div>
  )
});

export default About
