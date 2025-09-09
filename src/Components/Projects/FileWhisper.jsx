import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { ReactLenis} from "lenis/react";
import { Link } from 'react-router-dom'
import Silk from "../../Common/Silk";
import { useEffect } from "react";
import "./styles.css";
import "swiper/css";
import transition from '../../transition'
import Screenshot1 from './ImagesFW/Screenshot1.png'
import Screenshot2 from './ImagesFW/Screenshot2.png'
import Screenshot3 from './ImagesFW/Screenshot3.png'
import Back from './Images/Back.svg'


function FileWhisper() {
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
                <div className="font-[Anton] text-4xl sm:text-5xl text-gray-400 w-auto">File Whisper <span className="text-2xl">(AI-Powered Document Chat Dashboard)</span></div>
                <Link to='/' className="cursor-pointer"  state={{ fromTaskManager: true }}><img src={Back} alt="Back"/></Link>
                </div>
                <div className="font-[Anton] text-xl sm:text-2xl text-gray-400">Year</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">2025</div>
                <div className="font-[Anton] text-xl sm:text-2xl text-gray-400 mt-4">Tech & Technique</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300"> React.js, Tailwind CSS, Vercel, Render, Node.js, Express, MongoDB, JWT, Google OAuth, Gemini API</div>
                <div className="font-[Anton] text-xl sm:text-2xl text-gray-400 mt-4">Description</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">FileWhisper is a full-stack AI-powered web application that allows users to upload PDF and DOCX files and interact with their contents through natural language chat. Designed for real-world deployment, it combines document parsing, persistent storage, and animated chat responses to deliver a seamless user experience. Whether you're a student, researcher, or professional, FileWhisper helps you extract insights from documents instantly.</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">🛠️ Tech Stack</div>
                <ul className="list-disc pl-6">
                    <li className="font-[Roboto] text-xl text-gray-300">Frontend:  React.js with Tailwind CSS for responsive UI and chat animation</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Backend:  Node.js, Express, MongoDB for file persistence and chat routing</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Authentication: JWT and Google OAuth for secure login</li>
                    <li className="font-[Roboto] text-xl text-gray-300">AI Integration: Gemini 1.5 Flash API for document-based Q&A</li>
                </ul>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">☁️Hosting</div>
                <ul className="list-disc pl-6">
                    <li className="font-[Roboto] text-xl text-gray-300">Frontend on Vercel</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Backend on Render</li>
                </ul>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">⚙️ Key Features</div>
                
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">🔐 JWT and Google OAuth authentication</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">📄 Upload and parse PDF/DOCX files</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">💬 Chat with document content using Gemini API</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">📊 Persistent file storage per user</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">📁 Upload progress bar and error handling</div>

                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">📌 How it works</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300"> After logging in, users can upload a document and begin chatting with its contents. The backend parses the file and stores it persistently. When a question is asked, the Gemini API analyzes the document and returns a structured, animated response. Users can delete files, track upload progress, and enjoy a clean, responsive interface across devices.</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">🎯 Why I built this</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300"> FileWhisper was built to explore the intersection of AI, UX, and practical document interaction. I wanted to create a tool that feels like ChatGPT but works with your own files. This project pushed me to integrate Gemini API, handle real-world file parsing, and build a polished dashboard with persistent storage and animated feedback. It reflects my passion for deployable AI tools and clean product design.</div>
            </div>

            <div className=" w-[95%] sm:w-[90%] lg:w-200 h-auto">
                <a href="https://www.filewhisper.gleeze.com/" target="_blank" className="font-[Anton] text-gray-400 text-3xl flex gap-5">Live Link<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>
            </div>

            <div className="w-[95%] sm:w-[90%] lg:w-200 h-auto flex justify-center items-center rounded-2xl mb-20">
                <Swiper   autoplay={{ delay: 2000, disableOnInteraction: false,}} slidesPerView={1} loop={true} spaceBetween={0}  modules={[Autoplay]} className="mySwiper rounded-2xl">
                    <SwiperSlide><img src={Screenshot1}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot2}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot3}/></SwiperSlide>
                </Swiper>
            </div>
            
        </div>

    </div>
  </>;
}

export default transition(FileWhisper);
