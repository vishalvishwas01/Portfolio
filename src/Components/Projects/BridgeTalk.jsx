import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { ReactLenis} from "lenis/react";
import { Link } from 'react-router-dom'
import Silk from "../../Common/Silk";
import { useEffect } from "react";
import "./styles.css";
import "swiper/css";
import transition from '../../transition'
import Screenshot1 from './ImagesBT/Screenshot1.png'
import Screenshot2 from './ImagesBT/Screenshot2.png'
import Screenshot5 from './ImagesBT/Screenshot5.png'
import Screenshot7 from './ImagesBT/Screenshot7.png'
import Screenshot8 from './ImagesBT/Screenshot8.png'
import Screenshot9 from './ImagesBT/Screenshot9.png'
import Screenshot10 from './ImagesBT/Screenshot10.png'
import Screenshot11 from './ImagesBT/Screenshot11.png'
import Back from './Images/Back.svg'


function BridgeTalk() {
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
                <div className="font-[Anton] text-4xl sm:text-5xl text-gray-400 w-auto">Bridge Talk <span className="text-2xl">(Real-Time Multilingual Chat App)</span></div>
                <Link to='/' className="cursor-pointer"  state={{ fromTaskManager: true }}><img src={Back} alt="Back"/></Link>
                </div>
                <div className="font-[Anton] text-xl sm:text-2xl text-gray-400">Year</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">2025</div>
                <div className="font-[Anton] text-xl sm:text-2xl text-gray-400 mt-4">Tech & Technique</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">React.Js, Tailwind CSS, Vercel, Firebase</div>
                <div className="font-[Anton] text-xl sm:text-2xl text-gray-400 mt-4">Description</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">BridgeTalk is a real-time chat and messenger web application designed to connect people across the globe by breaking down language barriers. With its unique multi-language translation feature, users can chat seamlessly in their preferred language, regardless of what language the other person types in.</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">🛠️ Tech Stack</div>
                <ul className="list-disc pl-6">
                    <li className="font-[Roboto] text-xl text-gray-300">Frontend: React.js with Tailwind CSS for fast and responsive UI development</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Database, Backend & Auth: Firebase Firestore & Authentication for real-time communication and secure login</li>
                </ul>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">☁️Hosting</div>
                <ul className="list-disc pl-6">
                    <li className="font-[Roboto] text-xl text-gray-300">Frontend on Vercel</li>
                </ul>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">⚙️ Key Features</div>
                
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">🔐 User authentication system with Firebase</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">💬 Real-time chat (1-to-1 messaging)</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">🌍 Multi-language translation of messages based on user preference</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">📎 Media sharing (images, videos, and documents)</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">📱 Responsive UI with modern animations and clean design</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">🔒 Secure data storage and message synchronization</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">📌 How it works</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">After signing up or logging in, users can start conversations with others. Each user sets their preferred language, and messages are automatically translated in real-time. For example, a German user can type in German and their English-speaking friend will receive the message in English and vice versa. Users can also share media files and enjoy a seamless chatting experience on any device.</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">🎯 Why I built this</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">BridgeTalk was created to explore the possibilities of merging real-time communication with AI-powered language translation. This project challenged me to integrate Firebase for instant database updates, build responsive and accessible UI components with Tailwind and shadcn, and deploy on modern platforms like Vercel. Beyond the technical growth, my vision with BridgeTalk is to make communication borderless, helping people connect effortlessly across different languages and cultures.</div>
            </div>

            <div className=" w-[95%] sm:w-[90%] lg:w-200 h-auto">
                <a href="https://www.bridgetalk.gleeze.com/" target="_blank" className="font-[Anton] text-gray-400 text-3xl flex gap-5">Live Link<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>
            </div>

            <div className="w-[95%] sm:w-[90%] lg:w-200 h-auto flex justify-center items-center rounded-2xl mb-20">
                <Swiper   autoplay={{ delay: 2000, disableOnInteraction: false,}} slidesPerView={1} loop={true} spaceBetween={0}  modules={[Autoplay]} className="mySwiper rounded-2xl">
                    <SwiperSlide><img src={Screenshot1}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot2}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot5}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot7}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot8}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot9}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot10}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot11}/></SwiperSlide>
                </Swiper>
            </div>
            
        </div>

    </div>
  </>;
}

export default transition(BridgeTalk);
