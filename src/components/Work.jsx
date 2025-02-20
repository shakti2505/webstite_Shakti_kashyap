import React from "react";
import { motion } from "motion/react";
import { HyperLinkContainer } from "./resuableComponents/HyperLinkContainer";
import Navbar from "./resuableComponents/Navbar";

const Work = () => {
  return (
    <div className="relative min-h-screen bg-[#ECE7E1] ">
      <motion.div
        initial={{ height: "0%", backgroundColor: "#1A1818" }}
        animate={{ height: "100%" }}
        transition={{
          delay: 1,
          duration: 0.7,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 right-0"
      />
      <div className="w-full relative max-sm:p-5">
        <Navbar textColor="#ECE7E1" />
      </div>
      <motion.div
        style={{ filter: "blur(5px)" }}
        initial={{ opacity: 0 }}
        transition={{ delay: 1.3, ease: "easeIn" }}
        whileInView={{ opacity: 1, filter: "none" }}
        className="basis-1/4 flex flex-row max-sm:flex-col md:flex-col gap-2 justify-end max-sm:justify-center p-5 xl:fixed xl:bottom-10 xl:inset-y-0 xl:left-44 xl:w-96 "
      >
        <motion.p className="text-3xl text-[#ECE7E1] max-sm:text-base md:text-[1rem] font-medium">
          WORK
        </motion.p>
        <motion.p className="text-3xl xl:text-sm text-[#ECE7E1] max-sm:text-xs md:text-[0.9rem]">
          This portfolio highlights my work in
          <a className="underline" href="https://nodejs.org/en">
            Node.js
          </a>
          ,{" "}
          <a className="underline" href="https://react.dev/">
            React.js
          </a>
          ,{" "}
          <a
            className="underline"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          >
            JavaScript
          </a>
          , and Web Application Development. I’m passionate about building
          scalable solutions, intuitive interfaces, and reliable backend
          systems.
        </motion.p>
        <motion.p className="text-3xl xl:text-sm text-[#ECE7E1] max-sm:text-xs md:text-[0.9rem]">
          With a focus on continuous learning, I stay updated with new
          technologies to deliver modern and efficient web applications.
        </motion.p>
      </motion.div>

      <motion.div
        style={{ filter: "blur(5px)" }}
        initial={{ opacity: 0 }}
        transition={{ delay: 1.3, ease: "easeIn" }}
        whileInView={{ opacity: 1, filter: "none" }}
        className="flex flex-col text-5xl xl:text-[8rem] md:text-[5rem] gap-5 xl:absolute xl:right-0  xl:h-full  xl:w-1/2 xl:overflow-y-auto xl:overflow-x-hidden xl:py-32 max-sm:p-5 md:p-5"
      >
        <HyperLinkContainer
          title="SayIt"
          type="Web App development"
          githubLink="https://github.com/shakti2505/sayit_sever"
          liveLink="https://just-sayit.netlify.app/"
        />
        <HyperLinkContainer
          title="Smart Lights"
          type="Web developement"
          githubLink="https://github.com/shakti2505/React-TypeScript_project_smartLights"
          liveLink="https://reactsmartlights.netlify.app/"
        />

        <HyperLinkContainer
          title="Scholerhub"
          type="Web development"
          githubLink="https://github.com/shakti2505/cityScope_assignment"
          liveLink="https://scholerhub.onrender.com/"
        />
        <HyperLinkContainer
          title="Auth system"
          type="Web app development"
          githubLink="https://github.com/shakti2505/Infotrixs/tree/master/Week1-tasks/Authentication%20system"
        />
      </motion.div>
      {/* <motion.div
        className="flex flex-col xl:flex-row md:flex-col xl:justify-around md:justify-center gap-7 p-7 border border-red-500"
      >
    
      </motion.div> */}
    </div>
  );
};

export default Work;
