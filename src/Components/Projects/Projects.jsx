import React, { useState, forwardRef  } from 'react'
import { motion } from 'framer-motion'
import GradientText from '../../Common/GradientText'
import AnimatedTextFill from '../../Common/AnimatedTextFill'
import taskmanager from '../../assets/taskmanager.png'
import profile from '../../assets/profile.jpeg'
import BTScreenshot1 from './Images/BTScreenshot1.png'
import { Link } from 'react-router-dom'
import transition from '../../transition'

const Projects = forwardRef((props, ref) =>{
  const [hovered, setHovered] = useState(null);


  return (
    <div ref={ref} className='w-screen h-screen flex flex-col justify-center sm:justify-center pt-10 sm:pt-0 items-center gap-5 relative'>

      {/* Floating Image Preview (shared) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className='absolute right-115 top-50 w-[400px] h-[500px] pointer-events-none z-50'
      >
        {hovered === 'first' && (
          <img src={taskmanager} className='w-full h-full object-cover rounded-2xl border-8 border-gray-500' alt="Task Manager" />
          
        )}
        {hovered === 'second' && (
          <img src={BTScreenshot1} className='w-full h-full object-contain bg-gray-300 rounded-2xl translate-y-50 border-8 border-gray-500' alt="Portfolio" />
        )}

        {hovered === 'third' && (
          <img src={profile} className='w-full h-full object-contain bg-gray-300 rounded-2xl translate-y-50 border-8 border-gray-500' alt="Portfolio" />
        )}
      </motion.div>

      {/* Heading */}
      <div className='w-[95%] sm:w-[90%] xl:w-250 flex justify-start items-center text-gray-400 font-bold font-[Roboto] normal-case text-4xl'>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          Projects
        </GradientText>
      </div>

      {/* Project List */}
      <div className='w-[95%] sm:w-[90%] xl:w-250 flex flex-col justify-center items-center'>

        {/* Project 1 */}
        <Link className='w-full' to='/projects/taskmanager'  state={{ fromProjects: true }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
          viewport={{ once: false, amount: 0.5 }}
          className='pb-4 w-full h-auto flex flex-col justify-center items-center gap-2 border-b-2 border-gray-500'
        >
          <div className='w-full h-auto flex justify-start items-center'>
            <button
              className='relative w-auto h-auto flex justify-start items-center font-[Anton] cursor-pointer'
              onMouseEnter={() => setHovered('first')}
              onMouseLeave={() => setHovered(null)}
            >
              <AnimatedTextFill text='Multi Task Manager' />
              <svg className='pl-4' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
            </button>
          </div>
          

          {/* Tech Stack */}
          <div className='w-full flex flex-wrap justify-start items-center gap-2'>
            {['React', 'Express.JS', 'Node.JS', 'MongoDb', 'Tailwind Css'].map((tech, i) => (
              <React.Fragment key={tech}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5 + i * 0.1, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  className='text-[16px] text-gray-400 font-semibold tracking-normal'
                >
                  {tech}
                </motion.div>
                {i !== 4 && <div className='rounded-full bg-gray-500 w-3 h-3'></div>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        </Link>

        {/* Project 2 */}
        <Link className='w-full' to='/projects/BridgeTalk'  state={{ fromProjects: true }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
          viewport={{ once: false, amount: 0.5 }}
          className='pb-4 pt-4 w-full h-auto flex flex-col justify-center items-center gap-2 border-b-2 border-gray-500'
        >
          <div className='w-full h-auto flex justify-start items-center'>
            <button
              className='relative w-auto h-auto flex justify-start items-center font-[Anton] cursor-pointer'
              onMouseEnter={() => setHovered('second')}
              onMouseLeave={() => setHovered(null)}
              >
              <AnimatedTextFill text='BridgeTalk' /> 
              <svg className='pl-4' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
            </button>
          </div>
          
          

          {/* Tech Stack */}
          <div className='w-full flex flex-wrap justify-start items-center gap-2'>
            {['React', 'Firebase', 'Tailwind Css'].map((tech, i) => (
              <React.Fragment key={tech}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5 + i * 0.1, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  className='text-[16px] text-gray-400 font-semibold tracking-normal'
                >
                  {tech}
                </motion.div>
                {i !== 4 && <div className='rounded-full bg-gray-500 w-3 h-3'></div>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        </Link>

        {/* Project 3 */}
        <Link className='w-full' to='/projects/Portfolio'  state={{ fromProjects: true }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
          viewport={{ once: false, amount: 0.5 }}
          className='pb-4 pt-4 w-full h-auto flex flex-col justify-center items-center gap-2 border-b-2 border-gray-500'
          >
          <div className='w-full h-auto flex justify-start items-center'>
            <button
              className='relative w-auto h-auto flex justify-start items-center font-[Anton] cursor-pointer'
              onMouseEnter={() => setHovered('third')}
              onMouseLeave={() => setHovered(null)}
            >
              <AnimatedTextFill text='Portfolio' />
              <svg className='pl-4' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
            </button>
          </div>

          {/* Tech Stack */}
          <div className='w-full flex flex-wrap justify-start items-center gap-2'>
            {['React', 'Framer', 'Lenis', 'Docker', 'Tailwind Css'].map((tech, i) => (
              <React.Fragment key={tech}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1.1 + i * 0.1, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  className='text-[16px] text-gray-400 font-semibold tracking-normal'
                  >
                  {tech}
                </motion.div>
                {i !== 3 && <div className='rounded-full bg-gray-500 w-3 h-3'></div>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        </Link>

      </div>
    </div>
  );
})

export default transition(Projects);
