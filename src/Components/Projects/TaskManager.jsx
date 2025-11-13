import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { ReactLenis} from "lenis/react";
import { Link } from 'react-router-dom'
import Silk from "../../Common/Silk";
import { useEffect } from "react";
import "./styles.css";
import "swiper/css";
import transition from '../../transition'
import Screenshot1 from './Images/Screenshot1.png'
import Screenshot2 from './Images/Screenshot2.png'
import Screenshot4 from './Images/Screenshot4.png'
import Screenshot5 from './Images/Screenshot5.png'
import Screenshot6 from './Images/Screenshot6.png'
import Screenshot8 from './Images/Screenshot8.png'
import Back from './Images/Back.svg'


function TaskManager() {
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
                <div className="font-[Anton] text-4xl sm:text-5xl text-gray-400 w-auto">Multi Task Manager</div>
                <Link to='/' className="cursor-pointer"  state={{ fromTaskManager: true }}><img src={Back} alt="Back"/></Link>
                </div>
                <div className="font-[Anton] text-xl sm:text-2xl text-gray-400">Year</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">2025</div>
                <div className="font-[Anton] text-xl sm:text-2xl text-gray-400 mt-4">Tech & Technique</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">React.Js, Tailwind CSS, shadcn, Framer-Motion, Docker, Vercel</div>
                <div className="font-[Anton] text-xl sm:text-2xl text-gray-400 mt-4">Description</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">Multi Task Manager, a web application built to simplify and streamline daily task management through an intuitive and responsive interface.</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">🛠️ Tech Stack</div>
                <ul className="list-disc pl-6">
                    <li className="font-[Roboto] text-xl text-gray-300">Frontend: React.js with Tailwind CSS for fast and responsive UI development</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Backend: Node.js and Express.js for handling server-side logic</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Database: MongoDB Atlas for cloud-based data storage</li>
                </ul>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">☁️Hosting</div>
                <ul className="list-disc pl-6">
                    <li className="font-[Roboto] text-xl text-gray-300">Frontend on Vercel</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Backend on Render</li>
                    <li className="font-[Roboto] text-xl text-gray-300">Database on MongoDB Atlas</li>
                </ul>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">⚙️ Key Features</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">User authentication system with personalized task management Perform Create, Read, Update, and Delete operations Update task status (e.g., Pending, In Progress, Completed) and due dates View a detailed history of completed and edited tasks All tasks are securely stored and accessed by username for data isolation</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">📌 How it works</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">After signing up or logging in, users can create and manage tasks easily. Each task is tied to the logged-in user and can be modified or deleted anytime. The dashboard provides an overview of current and completed tasks, with the ability to update their progress and scheduling. Users can also review past tasks via the history section for productivity tracking.</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">🎯 Why I built this</div>
                <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">This project helped me gain deeper experience in full-stack development—working with React's component structure, managing backend logic, handling database interactions, and deploying a multi-platform architecture. It also sharpened my understanding of user-centric UI/UX and practical project structuring. If you're a recruiter or a fellow developer, I’d love to hear your feedback or thoughts! Always open to connecting and collaborating.</div>
            </div>

            <div className=" w-[95%] sm:w-[90%] lg:w-200 h-auto">
                <a href="https://task-manager-privated.vercel.app/signup" target="_blank" className="font-[Anton] text-gray-400 text-3xl flex gap-5">Live Link<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>
            </div>

            <div className="w-[95%] sm:w-[90%] lg:w-200 h-auto flex justify-center items-center rounded-2xl mb-20">
                <Swiper   autoplay={{ delay: 2000, disableOnInteraction: false,}} slidesPerView={1} loop={true} spaceBetween={0}  modules={[Autoplay]} className="mySwiper rounded-2xl">
                    <SwiperSlide><img src={Screenshot1}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot2}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot4}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot5}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot6}/></SwiperSlide>
                    <SwiperSlide><img src={Screenshot8}/></SwiperSlide>
                </Swiper>
            </div>
            
        </div>

    </div>
  </>;
}

export default transition(TaskManager);
