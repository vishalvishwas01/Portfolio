import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { ReactLenis} from "lenis/react";
import { Link } from 'react-router-dom'
import Silk from "../../Common/Silk";
import { useEffect } from "react";
import "./styles.css";
import "swiper/css";
import transition from '../../transition'
import Screenshot1 from './ImagesPT/Screenshot1.png'
import Screenshot2 from './ImagesPT/Screenshot2.png'
import Screenshot3 from './ImagesPT/Screenshot3.png'
import Screenshot4 from './ImagesPT/Screenshot4.png'
import Screenshot5 from './ImagesPT/Screenshot5.png'

import Back from './Images/Back.svg'


function Portfolio() {
     useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return <>
  <ReactLenis root />
   <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Silk speed={5} scale={1} color="#49444d" noiseIntensity={0} rotation={0} />
    </div>

    <div className="relative z-10 overflow-hidden no-scrollbar">
        <div className="w-screen h-auto flex flex-col justify-start items-center gap-5 pt-20 ">
            <div className="w-[95%] sm:w-[90%] lg:w-200 h-full flex flex-col justify-start items-start gap-2">
                <div className=" h-auto w-full flex justify-between">
                <div className="font-[Anton] text-4xl sm:text-5xl text-gray-400 w-auto">Portfolio</div>
                <Link to='/' className="cursor-pointer"  state={{ fromTaskManager: true }}><img src={Back} alt="Back"/></Link>
                </div>
                <div className="font-[Anton] text-xl sm:text-2xl text-gray-400">Year</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">2025</div>
                <div className="font-[Anton] text-xl sm:text-2xl text-gray-400 mt-4">Tech & Technique</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">React.Js, Tailwind CSS, Framer-Motion,Lenis (Smooth Scroll), Docker, Vercel</div>
                <div className="font-[Anton] text-xl sm:text-2xl text-gray-400 mt-4">Description</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">Portfolio is a visually engaging and responsive web application built to showcase my work, skills, and projects in an interactive way. It focuses on clean design, smooth scrolling, and micro-animations to create a modern presentation of my expertise as a developer.</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">🛠️ Tech Stack</div>
                <ul className="list-disc pl-6">
                    <li className="font-[Roboto] text-xl text-gray-300">Frontend: React.js with Tailwind CSS for fast and responsive UI development</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Animations: Framer Motion for sleek animations and micro-interactions</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Scrolling: Lenis Smooth Scroll for buttery smooth navigation</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Deployment: Hosted on Vercel for speed and reliability</li>
                </ul>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">⚙️ Key Features</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">
                    <ul className="list-disc pl-6">
                    <li className="font-[Roboto] text-xl text-gray-300">Interactive and responsive design for a modern presentation</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Smooth scrolling powered by Lenis for seamless navigation</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Animated components and transitions with Framer Motion</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Mobile-first, adaptive design to ensure accessibility across devices</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Dedicated sections for skills, expertise, and project showcases</li>
                </ul>
                </div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">📌 How it works</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">Visitors can explore different sections of the portfolio, including skills, projects, and personal information. Smooth scrolling enhances navigation, while Framer Motion brings each component to life with animations. The portfolio is designed to leave a strong first impression while clearly presenting technical skills and professional highlights.</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">🎯 Why I built this</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">This project was designed to highlight my skills in frontend development, UI/UX, and creative web design. By combining Tailwind CSS, Framer Motion, and Lenis, I explored advanced techniques in building highly interactive interfaces. It serves as both a professional presentation of my work and a practical exercise in crafting user-centric, visually impressive web experiences.</div>
            </div>

            <div className="w-[95%] sm:w-[90%] lg:w-200 h-auto flex justify-center items-center rounded-2xl mb-20">
                <Swiper   autoplay={{ delay: 2000, disableOnInteraction: false,}} slidesPerView={1} loop={true} spaceBetween={0}  modules={[Autoplay]} className="mySwiper rounded-2xl">
                    <SwiperSlide><img src={Screenshot1}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot2}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot3}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot4}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot5}/></SwiperSlide>
                </Swiper>
            </div>
            
        </div>

    </div>
  </>;
}

export default transition(Portfolio);
