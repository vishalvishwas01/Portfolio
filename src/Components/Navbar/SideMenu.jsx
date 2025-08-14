import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function SideMenu({ showMenu, setShowMenu }) {
  const handleNavigate = () => setShowMenu(false);
  const navigate = useNavigate();
  const baseClass =
    "group flex gap-3 justify-start items-center w-2xs h-14 rounded-2xl px-4 text-2xl cursor-pointer transition-all";
  const iconBaseClass = "transition-colors duration-300";

  return (
    <div
      className={`fixed inset-0 z-70 ${
        showMenu ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={` absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          showMenu
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowMenu(false)}
      />
      <div
        className={`flex flex-col justify-start items-center pt-8 gap-5 absolute top-0 left-0 w-[300px] h-screen bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 z-60 transform transition-transform duration-300 ease-in-out ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" w-64 h-24 flex justify-between items-center"></div>

        <button
        onClick={() => {
          if (window.location.pathname !== '/') {
            navigate('/', { state: { section: 'home' } });
          } else {
            const el = document.getElementById('home-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
          setShowMenu(false);
        }}
        className={`${baseClass} ${
          location.pathname === '/'
            ? 'bg-white text-[#FF6767]'
            : 'text-white hover:bg-white hover:[color:#FF6767]'
        } w-[90%]`}
      >
        <svg
            width="48px"
            height="48px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={`${iconBaseClass} ${
              window.location.pathname === "/"
                ? "fill-[#FF6767]"
                : "fill-white group-hover:fill-[#FF6767]"
            }`}
          >
            <path d="M13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19V12Z" />
            <path d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V12C10 12.5523 9.55228 13 9 13H5C4.44772 13 4 12.5523 4 12V5Z" />
            <path d="M4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V17Z" />
            <path d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H14C13.4477 8 13 7.55228 13 7V5Z" />
          </svg>
        Home
        </button>


        <button
          onClick={() => {
            if (window.location.pathname !== '/about') {
              navigate('/', { state: { section: 'about' } });
            } else {
              const el = document.getElementById('about-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
            setShowMenu(false);
          }}
          className={`${baseClass} ${
            location.pathname === '/about'
              ? 'bg-white text-[#FF6767]'
              : 'text-white hover:bg-white hover:[color:#FF6767]'
          } w-[90%]`}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${iconBaseClass} stroke-current`}
            strokeWidth="1.5"
          >
            <g strokeLinecap="round" strokeLinejoin="round">
              <path d="M12.37 8.87988H17.62" />
              <path d="M6.38 8.87988L7.13 9.62988L9.38 7.37988" />
              <path d="M12.37 15.8799H17.62" />
              <path d="M6.38 15.8799L7.13 16.6299L9.38 14.3799" />
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" />
            </g>
          </svg>
          About
        </button>


        <button
        onClick={() => {
          if (window.location.pathname !== '/skills') {
            navigate('/', { state: { section: 'skills' } });
          } else {
            const el = document.getElementById('skills-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
          setShowMenu(false);
        }}
        className={`${baseClass} ${
          location.pathname === '/skills'
            ? 'bg-white text-[#FF6767]'
            : 'text-white hover:bg-white hover:[color:#FF6767]'
        } w-[90%]`}
        >
        <svg
            width="44"
            height="44"
            viewBox="0 0 100 100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={`${iconBaseClass} fill-current`}
          >
            <g>
              <path
                d="M77.3,55.7L70,44.9l0-0.9c0-13.2-10.8-24-24-24c-1.9,0-3.8,0.2-5.7,0.7C29.7,23.1,22,32.9,22,44
                  c0,4.9,1.2,9.3,3.6,12.7c4.2,6,7,10.8,5.3,17.3c-0.4,1.5-0.1,3,0.9,4.2c0.9,1.2,2.2,1.8,3.7,1.8h19.7c2.3,0,4.3-1.6,4.7-3.8
                  c0.1-0.4,0.2-0.8,0.2-1.2c0.2-1.2,1.2-2,2.4-2h1.4c2.2,0,4.1-1.3,4.7-3.4c0.6-2.3,1.4-5.6,1.5-9.6h5.2c0.9,0,1.8-0.8,2.2-1.6
                  C77.9,57.6,77.8,56.3,77.3,55.7z M61.4,42c-0.8,1.3-2.4,2-4.7,2c-12.3,0-13.2,9-13.2,13.3c0,2-1.6,3.7-3.6,3.7h-0.3
                  c-1.7,0-3.1-1.2-3.5-2.9c-0.4-1.8-1.6-2.8-2.8-3.7c-0.8-0.6-1.6-1.2-2-2.1c-1.1-2.3-2.2-5-2.2-8.4c0-7.8,5.4-14.6,12.7-16.3
                  c1.4-0.3,2.7-0.5,4.1-0.5c6.8,0,12.9,4.1,15.5,10.3C61.5,37.7,62.6,40.1,61.4,42z"
              />
            </g>
          </svg>
        Skills
        </button>


        <button
        onClick={() => {
          if (window.location.pathname !== '/projects') {
            navigate('/', { state: { section: 'projects' } });
          } else {
            const el = document.getElementById('projects-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
          setShowMenu(false);
        }}
        className={`${baseClass} ${
          location.pathname === '/projects'
            ? 'bg-white text-[#FF6767]'
            : 'text-white hover:bg-white hover:[color:#FF6767]'
        } w-[90%]`}
      >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${iconBaseClass} stroke-current`}
          >
            <path
              d="M5 8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V8Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M5 4.07617C4.02491 4.17208 3.36857 4.38885 2.87868 4.87873C2 5.75741 2 7.17163 2 10.0001V14.0001C2 16.8285 2 18.2427 2.87868 19.1214C3.36857 19.6113 4.02491 19.828 5 19.9239"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M19 4.07617C19.9751 4.17208 20.6314 4.38885 21.1213 4.87873C22 5.75741 22 7.17163 22 10.0001V14.0001C22 16.8285 22 18.2427 21.1213 19.1214C20.6314 19.6113 19.9751 19.828 19 19.9239"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M9 13H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9 9H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9 17H12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        Projects
        </button>


        <button
        onClick={() => {
          if (window.location.pathname !== '/experience') {
            navigate('/', { state: { section: 'experience' } });
          } else {
            const el = document.getElementById('experience-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
          setShowMenu(false);
        }}
        className={`${baseClass} ${
          location.pathname === '/experience'
            ? 'bg-white text-[#FF6767]'
            : 'text-white hover:bg-white hover:[color:#FF6767]'
        } w-[90%]`}
      >
          <svg
            width="44px"
            height="44px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${iconBaseClass} stroke-current`}
          >
            <path
              d="M8.5 21H4C4 17.134 7.13401 14 11 14C11.1681 14 11.3348 14.0059 11.5 14.0176M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        Experience
        </button>

        <button
        onClick={() => {
          if (window.location.pathname !== '/contact') {
            navigate('/', { state: { section: 'contact' } });
          } else {
            const el = document.getElementById('contact-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
          setShowMenu(false);
        }}
        className={`${baseClass} ${
          location.pathname === '/contact'
            ? 'bg-white text-[#FF6767]'
            : 'text-white hover:bg-white hover:[color:#FF6767]'
        } w-[90%]`}
      >
          <svg
            width="44px"
            height="44px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${iconBaseClass} stroke-current`}
          >
            <path
              d="M18,16 C20.20915,16 22,14.20915 22,12 C22,9.79085 20.20915,8 18,8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6,8 C3.79086,8 2,9.79085 2,12 C2,14.20915 3.79086,16 6,16"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6,16 L6,15.75 L6,14.5 L6,12 L6,8 C6,4.68629 8.6863,2 12,2 C15.3137,2 18,4.68629 18,8 L18,16 C18,19.3137 15.3137,22 12,22"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        Contact
        </button>

      </div>
    </div>
  );
}

export default SideMenu;
