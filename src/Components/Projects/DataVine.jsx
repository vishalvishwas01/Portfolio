import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ReactLenis } from "lenis/react";
import { Link } from "react-router-dom";
import Silk from "../../Common/Silk";
import { useEffect } from "react";
import "./styles.css";
import "swiper/css";
import transition from "../../transition";
import Screenshot1 from './ImagesDV/Screenshot1.png'
import Screenshot2 from './ImagesDV/Screenshot2.png'
import Screenshot3 from './ImagesDV/Screenshot3.png'
import Screenshot4 from './ImagesDV/Screenshot4.png'
import Screenshot5 from './ImagesDV/Screenshot5.png'
import Screenshot6 from './ImagesDV/Screenshot6.png'
import Back from "./Images/Back.svg";

function DataVine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <ReactLenis root />
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Silk speed={5} scale={1} color="#49444d" noiseIntensity={0} rotation={0} />
      </div>

      <div className="relative z-10 overflow-hidden no-scrollbar">
        <div className="w-screen h-auto flex flex-col justify-start items-center gap-5 pt-20">
          <div className="w-[95%] sm:w-[90%] lg:w-200 h-full flex flex-col justify-start items-start gap-2">
            <div className="h-auto w-full flex justify-between">
              <div className="font-[Anton] text-4xl sm:text-5xl text-gray-400 w-auto">
                DataVine{" "}
                <span className="text-2xl">(Dynamic Form Builder & Analytics App)</span>
              </div>
              <Link to="/" className="cursor-pointer" state={{ fromTaskManager: true }}>
                <img src={Back} alt="Back" />
              </Link>
            </div>

            <div className="font-[Anton] text-xl sm:text-2xl text-gray-400">Year</div>
            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">2025</div>

            <div className="font-[Anton] text-xl sm:text-2xl text-gray-400 mt-4">
              Tech & Technique
            </div>
            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">
              Next.js 15, TypeScript, MongoDB, NextAuth.js, Tailwind CSS, MUI,
              Razorpay, Framer Motion, GSAP
            </div>

            <div className="font-[Anton] text-xl sm:text-2xl text-gray-400 mt-4">Description</div>
            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">
              DataVine is a full-stack dynamic form builder that lets users create, share, and manage
              custom forms effortlessly. It provides analytics, response collection, and even payment
              handling through Razorpay integration. Designed for creators, teams, and businesses,
              DataVine makes form creation interactive, automated, and data-driven.
            </div>

            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">🛠️ Tech Stack</div>
            <ul className="list-disc pl-6">
              <li className="font-[Roboto] text-xl text-gray-300">
                Framework: Next.js 15 with TypeScript for scalability and performance
              </li>
              <li className="font-[Roboto] text-xl text-gray-300">
                Database: MongoDB with Mongoose for structured and efficient data handling
              </li>
              <li className="font-[Roboto] text-xl text-gray-300">
                Authentication: NextAuth.js for secure sign-in with Google OAuth
              </li>
              <li className="font-[Roboto] text-xl text-gray-300">
                UI: Material UI, Tailwind CSS, and Framer Motion for smooth, modern design
              </li>
              <li className="font-[Roboto] text-xl text-gray-300">
                State Management: Redux Toolkit for predictable data flow
              </li>
              <li className="font-[Roboto] text-xl text-gray-300">
                Payments: Razorpay for seamless form-based payment processing
              </li>
            </ul>

            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">☁️ Hosting</div>
            <ul className="list-disc pl-6">
              <li className="font-[Roboto] text-xl text-gray-300">Deployed on Vercel</li>
            </ul>

            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">
              ⚙️ Key Features
            </div>
            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">
              🔐 Secure authentication with NextAuth.js
            </div>
            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">
              🧩 Drag-and-drop form builder with reusable templates
            </div>
            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">
              📊 Real-time analytics and visual response charts
            </div>
            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">
              💾 Export responses to Excel (.xlsx) using SheetJS
            </div>
            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">
              💸 Payment-enabled forms powered by Razorpay
            </div>
            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">
              🌐 Public form sharing via unique links
            </div>
            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">
              📱 Responsive UI optimized for all devices
            </div>

            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">📌 How it works</div>
            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">
              Users can log in using Google, create forms from scratch or templates, and share them
              via a unique link. Responses are collected and stored in real time. Users can track
              response analytics, download reports in Excel format, and accept payments directly from
              their forms. The intuitive dashboard helps manage everything in one place.
            </div>

            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-400 mt-4">
              🎯 Why I built this
            </div>
            <div className="font-[Roboto] text-xl sm:text-2xl text-gray-300">
              I built DataVine to explore how form creation can go beyond static inputs and become a
              dynamic, data-rich experience. This project allowed me to work deeply with Next.js,
              TypeScript, and backend integration using MongoDB and Razorpay. I also focused on
              improving performance, security, and user experience, making DataVine a modern,
              production-grade SaaS foundation.
            </div>
          </div>

          <div className="w-[95%] sm:w-[90%] lg:w-200 h-auto">
            <a
              href="https://www.datavine.gleeze.com/"
              target="_blank"
              className="font-[Anton] text-gray-400 text-3xl flex gap-5"
            >
              Live Link
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
          </div>

          <div className="w-[95%] sm:w-[90%] lg:w-200 h-auto flex justify-center items-center rounded-2xl mb-20">
            <Swiper
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              slidesPerView={1}
              loop={true}
              spaceBetween={0}
              modules={[Autoplay]}
              className="mySwiper rounded-2xl"
            >
              <SwiperSlide>
                <img src={Screenshot1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Screenshot2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Screenshot3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Screenshot4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Screenshot5} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Screenshot6} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default transition(DataVine);
