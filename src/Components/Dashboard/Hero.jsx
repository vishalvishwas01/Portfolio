import React, { forwardRef,useEffect, useState } from "react";
import { Highlight } from '../../ui/HeroHighlight'
import  TextGenerateEffect  from '../../ui/TextGenerateEffect';
import {motion, useTime, useTransform } from 'motion/react';
import profile from '../../assets/profile.jpeg'
import AnimatedContent from '../../Common/AnimatedContent';
import ArrowAnimation from '../../Common/ArrowAnimation';

const Hero = forwardRef((props, ref) =>{
        const time = useTime();
    const rotate = useTransform(time, [0,3000],[0,360],{
        clamp:false
    });

    const rotatingBg = useTransform(rotate, (r)=>{
        return `conic-gradient(from ${r}deg, #ff4545, #00ff99, #006aff, #ff0095, #ff4545)`
    })

     const goToSection = (section) => {
    if (window.location.pathname !== '/') {
      navigate('/', { state: { section } });
    } else {
      const el = document.getElementById(`${section}-section`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMenu(false);
    };


  return (
    <div ref={ref} className='w-screen h-screen flex flex-col-reverse lg:flex-row pt-10 lg:pt-0 justify-end lg:justify-center items-center gap-20'>
        <div className="absolute  w-screen flex top-113 sm:top-120 lg:top-130 xl:top-150 justify-center items-center h-75 overflow-hidden"><button aria-label="about" onClick={() => goToSection('about')}><ArrowAnimation/></button></div>
      
       <div className='flex flex-col justify-center items-center gap-3 w-[90%] md:w-165'>
        <div className='w-full flex justify-start'><Highlight className='lg:text-5xl md:text-4xl sm:text-3xl text-xl text-white p-2 ml-2'>Full Stack Developer</Highlight></div>
        <AnimatedContent direction='vertical' delay={500}>
        <div className='w-full flex flex-col justify-start items-start  text-2xl break-all pl-3'>
            <div className='w-full h-auto flex justify-start items-start'><TextGenerateEffect words={"Hi, I'm Vishal Vishwas."}/></div>
            <div className='w-full h-auto text-left '><TextGenerateEffect words={"A MERN Stack Developer passionate about building fast, scalable, and user-friendly web apps using Next.js, React.js, TypeScript, JavaScript, Express.js, MongoDB and Node.js"}/></div>
        </div>
        </AnimatedContent>
      </div>  

        <AnimatedContent direction='horizontal' delay={1000}>
          <div className='flex justify-center items-center w-auto'>
        <div className='relative w-50flex justify-center items-center'>
            <div className='relative bg-neutral-700 w-50 h-50 rounded-[50%] z-10 overflow-hidden border-2 border-gray-600'><img className='-translate-y-2' src={profile} alt='profile'/></div>
            <motion.div className='absolute -inset-[2px] rounded-[50%] w-50'
            style={{background:rotatingBg,filter:"blur(5px)",}}>
            </motion.div>
        </div>
        </div>
        </AnimatedContent>
        
    
    </div>
  )
})

export default Hero