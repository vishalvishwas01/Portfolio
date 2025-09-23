import React, { forwardRef,useEffect } from "react";
import JsLogo from "./Images/Js.png";
import ReactLogo from "./Images/react.png";
import FramerLogo from "./Images/framerlogo.svg";
import TailwindLogo from "./Images/tailwind.png";
import NodeLogo from "./Images/node.png";
import ExpressLogo from "./Images/express.png";
import MongoLogo from "./Images/mongo.png";
import MySQLLogo from "./Images/mysql.png";
import postmanlogo from "./Images/postmanlogo.svg";
import socketlogo from "./Images/socketlogo.svg";
import jwtlogo from "./Images/jwtlogo.svg";
import Firebase from './Images/Firebase.svg'
import GithubLogo from "./Images/github.png";
import DockerLogo from "./Images/docker.png";
import GradientText from "../../Common/GradientText";
import ScrollSkillItem from "./ScrollSkillItem";

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-[95vh] sm:h-[90vh] lg:h-[105vh] w-screen flex flex-col gap-4 justify-start sm:justify-center pt-30 sm:pt-30 md:pt-35 lg:pt-0 items-center overflow-hidden">
      <div className="w-[95%] sm:w-[90%] xl:w-250 flex justify-start items-center text-gray-400 font-bold font-[Roboto] normal-case text-4xl pt-0 lg:pt-0">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          Skills
        </GradientText>
      </div>

      <div className="w-[95%] sm:w-[90%] xl:w-250 h-auto flex flex-col justify-start items-center gap-5 md:gap-15 text-gray-400">
        {/* FRONTEND */}
        <div className="w-full h-auto flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-0">
          <div className="text-gray-400 font-[Anton] w-full sm:w-100 md:w-140 lg:w-200 h-full flex justify-start text-2xl sm:text-3xl">
            FRONTEND
          </div>
          <div className="h-auto flex flex-wrap justify-start items-center gap-2 sm:gap-5 w-full">
            <ScrollSkillItem delay={0.0}>
              <img src={JsLogo} alt="JS" />
              JavaScript
            </ScrollSkillItem>
            <ScrollSkillItem delay={0.1}>
              <img src={ReactLogo} alt="React" />
              React
            </ScrollSkillItem>
            <ScrollSkillItem delay={0.3}>
              <img src={FramerLogo} alt="Framer" />
              Framer Motion
            </ScrollSkillItem>
            <ScrollSkillItem delay={0.4}>
              <img src={TailwindLogo} alt="Tailwind" />
              Tailwind CSS
            </ScrollSkillItem>
          </div>
        </div>

        {/* BACKEND */}
        <div className="w-full h-auto flex flex-col sm:flex-row justify-start items-center gap-5 sm:gap-0">
          <div className="text-gray-400 font-[Anton] w-full sm:w-100 md:w-140 lg:w-200 h-full flex justify-start text-2xl sm:text-3xl">
            BACKEND
          </div>
          <div className="h-auto flex flex-wrap justify-start items-center gap-2 sm:gap-5 w-full">
            <ScrollSkillItem delay={0.0}>
              <img src={NodeLogo} alt="Node" />
              Node.js
            </ScrollSkillItem>
            <ScrollSkillItem delay={0.1}>
              <img src={ExpressLogo} alt="Express" />
              Express.js
            </ScrollSkillItem>
            <ScrollSkillItem delay={0.1}>
              <img src={jwtlogo} alt="jwt" />
              Jwt
            </ScrollSkillItem>
            <ScrollSkillItem delay={0.1}>
              <img src={postmanlogo} alt="postman" />
              Postman
            </ScrollSkillItem>
            <ScrollSkillItem delay={0.1}>
              <img src={socketlogo} alt="socket.io" />
              Socket.io
            </ScrollSkillItem>
          </div>
        </div>

        {/* DATABASE */}
        <div className="w-full h-auto flex flex-col sm:flex-row justify-start items-center gap-5 sm:gap-0">
          <div className="text-gray-400 font-[Anton] w-full sm:w-100 md:w-140 lg:w-200 h-full flex justify-start text-2xl sm:text-3xl">
            DATABASE
          </div>
          <div className="h-auto flex flex-wrap justify-start items-center gap-2 sm:gap-5 w-full">
            <ScrollSkillItem delay={0.0}>
              <img src={MongoLogo} alt="MongoDB" />
              MongoDB
            </ScrollSkillItem>
            <ScrollSkillItem delay={0.1}>
              <img src={Firebase} alt="MySQL" />
              Firebase
            </ScrollSkillItem>
          </div>
        </div>

        {/* TOOLS */}
        <div className="w-full h-auto flex flex-col sm:flex-row justify-start items-center gap-5 sm:gap-0">
          <div className="text-gray-400 font-[Anton] w-full sm:w-100 md:w-140 lg:w-200 h-full flex justify-start text-2xl sm:text-3xl">
            TOOLS
          </div>
          <div className="h-auto flex flex-wrap justify-start items-center gap-2 sm:gap-5 w-full">
            <ScrollSkillItem delay={0.0}>
              <img src={GithubLogo} alt="GitHub" />
              GitHub
            </ScrollSkillItem>
            <ScrollSkillItem delay={0.1}>
              <img src={DockerLogo} alt="Docker" />
              Docker
            </ScrollSkillItem>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
