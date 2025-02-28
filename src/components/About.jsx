import React from "react";
import { motion } from "motion/react";
import Navbar from "./resuableComponents/Navbar";
import myPic from "../assets/myPic1.jpg";
import Button from "./resuableComponents/Button";

const About = () => {
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
          <Navbar textColor="#1A1818" />

          <div className="flex flex-row justify-evenly w-full">
            <div>
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
                className="xl:text-[15rem] sm:text-[4.5rem] md:text-[9rem] text-[#1A1818] font-Playfair font-normal"
              >
                About
              </motion.h1>
              <div className="xl:max-w-[50rem] md:max-w-[35rem] text-left float-left">
                <h3 className="text-[#1A1818] font-Playfair max-sm:text-[1.5rem] md:text-[2rem] xl:text-[3rem]">
                  I'm Shakti. A fullStack developer and problem solver.
                </h3>
                <br />
                <p className="text-[#1A1818] font-Montserrat font-normal text-[1rem] tracking-wide">
                  The intersection of creativity and technology has always
                  captivated me, and I’ve embraced the challenge of diving into
                  new tools and technologies with enthusiasm—whether it was
                  learning HTML, CSS, or exploring React and Node.js. My journey
                  into tech started with curiosity and a passion for building,
                  and over time, it has transformed into a career fueled by
                  continuous learning and growth.{" "}
                </p>
                <br />
                <br />
                <p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-[#1A1818] font-Montserrat font-normal text-[1rem] tracking-wide"
                >
                  What excites me most about being a developer is the
                  opportunity to build meaningful applications that simplify
                  lives, enhance user experiences, and solve complex challenges.
                  Whether it’s crafting scalable backends, creating interactive
                  frontends, or experimenting with new frameworks, I am driven
                  by the thrill of turning ideas into reality and continuously
                  evolving in the ever-changing landscape of technology.
                </p>
                <br />
                <p className="text-[#1A1818] font-Montserrat font-normal text-[1rem] tracking-wide">
                  The intersection of creativity and technology has always
                  captivated me, and I’ve embraced the challenge of diving into
                  new tools and technologies with enthusiasm—whether it was
                  learning HTML, CSS, or exploring React and Node.js. My journey
                  into tech started with curiosity and a passion for building,
                  and over time, it has transformed into a career fueled by
                  continuous learning and growth.{" "}
                </p>
                <br />
                <h5
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-[#1A1818] font-Playfair max-sm:text-[1.5rem] md:text-[2rem] xl:text-[3rem]"
                >
                  Experience
                </h5>

                <p className="text-[#1A1818] font-Montserrat font-normal text-[1rem]">
                  -Degree in Engineering (B.tech)
                </p>
                <p className="text-[#1A1818] font-Montserrat font-normal text-[1rem]">
                  -2 Years of experience in Web Development, Web App development
                  and 3 years of experince as a Fianacial Crime Analyst.
                </p>
                <br />
                <h5 className="text-[#1A1818] font-Playfair max-sm:text-[1.5rem] md:text-[2rem] xl:text-[3rem]">
                  Skills
                </h5>
                <p className="text-[#1A1818] font-Montserrat font-normal text-[1rem] tracking-widest">
                  HTML / CSS / JavaScript / React.js / Redux / Node.js /
                  Express.js / MongoDB / Mongoose / REST APIs / Authentication /
                  Deployment / Git / Testing / API integration / Web security/
                  Optimization / CI/CD / Debugging / WebSockets / Third-party
                  integrations / Agile
                </p>
                <br />
                <Button
                  title="My CV"
                  link="https://drive.google.com/file/d/1LMbGcYrYsHe4VQtgLKOw5pfi9C5Dz8le/view?usp=sharing"
                />
                <br />
                <Button title="Contact me" />
              </div>
            </div>

            <motion.div>
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                src="https://res.cloudinary.com/dtbz1n84e/image/upload/c_fill,w_900,h_1000/v1733758939/myPic1_m9ljml.jpg"
                className="xl:w-96 lg:w-60 md:w-60 sm:w-32 object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
