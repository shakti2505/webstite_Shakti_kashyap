import React from "react";
import { motion } from "motion/react";
import Navbar from "./resuableComponents/Navbar";

const Contact = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#1A1818] ">
      {/* Parent div with animation */}
      <motion.div
        initial={{ height: "100%", backgroundColor: "#ECE7E1" }}
        animate={{ height: "0%" }}
        transition={{
          delay: 1,
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96], // Custom easing
        }}
        className="absolute top-0 left-0 right-0"
      />
      {/* Child content appears after parent animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.7,
        }}
        className="relative flex flex-col xl:flex-row md:justify-center gap-7 xl:p-24 p-7"
      >
        <Navbar textColor="#ECE7E1" />
        <div className="flex flex-col flex-wrap items-start xl:ml-44 mt-14 w-full gap-4">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, color: "#fff" }} // Add hover effect
            className="xl:text-[18rem] sm:text-[4.5rem] md:text-[9rem] text-[#fff] font-Playfair font-normal"
          >
            Hello.
          </motion.h1>

          <p className="font-Montserrat font-normal text-[1rem] tracking-wide ">
            Let's Build Something Amazing Together!
          </p>
          <p className="font-Montserrat font-normal text-sm xl:text-[1rem] tracking-wide">
            Email:
            <a
              className="underline ml-1 text-[#ECE7E1] hover:text-[#ECE7E1] hover:line-through"
              href="mailto:kashyapshakti1994@gmail.com"
            >
              kashyapshakti1994@gmail.com
            </a>
          </p>
          <p className="text-sm xl:text-[1rem]">
            {" "}
            On the Internet :{" "}
            <a
              className="underline ml-1 text-[#ECE7E1] hover:text-[#ECE7E1] text-sm xl:text-[1rem]   hover:line-through"
              href="mailto:kashyapshakti1994@gmail.com"
            >
              Linkedin
            </a>
            <span> /</span>
            <a
              className="underline ml-1 text-[#ECE7E1] hover:text-[#ECE7E1] text-sm xl:text-[1rem]   hover:line-through"
              href="mailto:kashyapshakti1994@gmail.com"
            >
              GitHub
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
