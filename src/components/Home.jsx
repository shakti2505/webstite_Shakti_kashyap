import React from "react";
import { motion } from "motion/react";
import { HyperLinkContainerTwo } from "./resuableComponents/HyperLinkContainer";

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Parent div with animation */}
        <motion.div
          initial={{ height: "100%", backgroundColor: "#000" }}
          animate={{ height: "0%" }}
          transition={{
            delay: 1,
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96], // Custom easing
          }}
          className="absolute top-0 left-0 right-0"
        />
           <motion.div
        style={{ filter: "blur(5px)" }}
        initial={{ opacity: 0 }}
        transition={{ delay: 1.3, ease: "easeIn", duration: 0.5 }}
        whileInView={{ opacity: 1, filter: "none" }}
        className="  flex flex-col xl:flex-row md:flex-col xl:justify-between bg-[#ECE7E1] md:justify-center gap-16 p-7"
      >
        <div className="flex justify-between min-h-full xl:flex-col max-sm:flex-row md:flex-row items-center text-xs">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shakti-kashyap-3a4271222/"
            className="text-[#1A1818] hover:text-[#1A1818] font-montserrat font-normal xl:rotate-[270deg] hover:line-through"
          >
            L I
          </a>
          <a
            target="_blank"
            href="https://github.com/shakti2505/"
            className="text-[#1A1818] hover:text-[#1A1818] font-montserrat font-normal xl:rotate-[270deg] hover:line-through"
          >
            G I
          </a>

          {/* Divider */}
          <div className="bg-[#1A1818] xl:border-l xl:h-48 h-[1px] w-full xl:w-[2px] max-sm:w-[1.5rem] sm:w-96 md:w-96 lg:w-96"></div>
          <div className="flex xl:flex-col justify-between items-center max-sm:flex-row md:flex-row gap-1">
            <p className="text-[#1A1818] hover:text-[#1A1818] font-montserrat font-normal xl:rotate-[270deg]">
              ©
            </p>
            <p className="text-[#1A1818] hover:text-[#1A1818] font-montserrat font-normal xl:rotate-[270deg] ">
              /
            </p>

            <p className="text-[#1A1818] hover:text-[#1A1818] font-montserrat font-normal xl:rotate-[270deg] ">
              2024
            </p>
          </div>
        </div>

        <motion.div
          style={{ filter: "blur(5px)" }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1.3, ease: "easeIn" }}
          whileInView={{ opacity: 1, filter: "none" }}
          className="basis-1/4 flex flex-row max-sm:flex-col md:flex-col gap-2 justify-end max-sm:justify-center"
        >
          <motion.p className="text-3xl text-[#1A1818] max-sm:text-base md:text-[1rem] font-medium">
            SHAKTI KASHYAP
          </motion.p>
          <motion.p className="text-3xl xl:text-sm text-[#1A1818] max-sm:text-xs md:text-[0.9rem]">
            FullStack developer / Front-end Developer / Backend developer
          </motion.p>
          <motion.p className="text-3xl xl:text-sm text-[#1A1818] max-sm:text-xs md:text-[0.9rem]">
            Currently working fulltime as FullStack developer at{" "}
            <a
              href="https://www.consultantsf.com/"
              className="underline text-[#1A1818] hover:text-[#1A1818]"
            >
              SF Consultant
            </a>
            , Bhopal.
          </motion.p>
        </motion.div>

        <motion.div
          style={{ filter: "blur(5px)" }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1.3, ease: "easeIn" }}
          whileInView={{ opacity: 1, filter: "none" }}
          className="flex flex-col font-serif font-thin text-5xl xl:text-[9rem] md:text-[5rem] gap-5"
        >
          <HyperLinkContainerTwo title="Work" link="/work" />
          <HyperLinkContainerTwo title="About" link="/about" />
          <HyperLinkContainerTwo title="Experience" link="/experience" />
          <HyperLinkContainerTwo title="Contact" link="/contact" />
        </motion.div>
      </motion.div>

      </div>
   
    </>
  );
};

export default Home;
