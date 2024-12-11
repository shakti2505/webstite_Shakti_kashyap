import React from "react";
import { motion } from "motion/react";
import Navbar from "./resuableComponents/Navbar";

const Experience = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.7,
        }}
        className="relative flex flex-col xl:flex-row md:justify-center gap-7 xl:p-24 p-7"
      >
        <Navbar textColor="#1A1818" />

        <div className="flex flex-row justify-center">
          <div>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
              className="xl:text-[15rem] sm:text-[4.5rem] md:text-[9rem] text-[#1A1818] font-Playfair font-normal"
            >
              Experience
            </motion.h1>
            <div className="xl:max-w-[50rem] md:max-w-[35rem] text-left float-left">
              <motion.p className="text-[#1A1818] font-Playfair max-sm:text-[1.5rem] md:text-[2rem] xl:text-[3rem]">
                Full stack developer at{" "}
                <a
                  target="_blank"
                  href="https://www.consultantsf.com/"
                  className="underline text-[#1A1818] hover:text-[#1A1818]"
                >
                  SF Consultant
                </a>
                , Bhopal
              </motion.p>
              <br />
              <p className=" text-[#1A1818] font-Montserrat font-normal text-[1rem] tracking-wide">
                Since Aug 2023 till present.
              </p>
              <br />
              <p className="text-[#1A1818] font-Montserrat font-normal text-[1rem] tracking-wide">
                As a Full-Stack Developer, I contributed to the team by
                designing and developing RESTful APIs using Node.js and Express,
                enabling efficient backend operations. I collaborated to
                integrate cloud storage solutions like Cloudinary and Amazon S3
                for secure, scalable media uploads with real-time processing and
                implemented real-time features such as live notifications and
                chat systems using Socket.IO. I supported the team by leveraging
                Node.js modules like http, fs, and stream to optimize
                server-side logic, data streaming, and file system operations.
                My contributions included enhancing application performance
                through clustering and asynchronous programming to handle
                high-traffic scenarios. Additionally, I worked with MongoDB for
                efficient database queries and Redis for fast data caching,
                actively participating in Agile and Scrum workflows to deliver
                scalable, high-quality applications as part of a cohesive team.{" "}
              </p>
              <br />
              <br />
              <motion.p className="text-[#1A1818] font-Playfair max-sm:text-[1.5rem] md:text-[2rem] xl:text-[3rem]">
                Financial Crime Analyst{" "}
                <a
                  target="_blank"
                  href="https://revolut.com/"
                  className="underline text-[#1A1818] hover:text-[#1A1818]"
                >
                  Revolut
                </a>
                , Krakow, Poland
              </motion.p>
              <br />
              <p className=" text-[#1A1818] font-Montserrat font-normal text-[1rem] tracking-wide">
                Since June 2022 - September 2022.
              </p>
              <br />
              <p className="text-[#1A1818] font-Montserrat font-normal text-[1rem] tracking-wide">
                Contributed to the team by analyzing triggered cases of
                financial accounts flagged for potential fraudulent or
                suspicious activity. Conducted detailed reviews of supporting
                documents to verify authenticity and identify discrepancies.
                Assessed risk levels, ensured compliance with regulatory
                requirements, and provided accurate resolutions for each case.
                Collaborated with team members to streamline investigative
                processes and enhance case resolution efficiency, supporting
                organizational efforts to mitigate financial crime effectively.
              </p>
              <br />
              <br />
              <motion.p className="text-[#1A1818] font-Playfair max-sm:text-[1.5rem] md:text-[2rem] xl:text-[3rem]">
                Financial Crime Analyst{" "}
                <a
                  target="_blank"
                  href="https://www.taskus.com/locations/india/"
                  className="underline text-[#1A1818] hover:text-[#1A1818]"
                >
                  Task Us
                </a>
                , Indore, India
              </motion.p>
              <br />
              <p className=" text-[#1A1818] font-Montserrat font-normal text-[1rem] tracking-wide">
                Since Oct 2020 - June 2022.
              </p>
              <br />
              <p className="text-[#1A1818] font-Montserrat font-normal text-[1rem] tracking-wide">
                Provided support to customers by conducting Enhanced Due
                Diligence (EDD) and Customer Due Diligence (CDD) on triggered
                accounts. Analyzed the reasons and sources of funds, verified
                the authenticity of provided documents, and ensured compliance
                with regulatory standards. Worked closely with customers to
                gather additional information and resolve discrepancies,
                delivering accurate and timely resolutions while mitigating
                risks. Supported the organization’s efforts to maintain
                financial integrity by identifying and addressing potential
                concerns effectively.
              </p>
              <br />
              <br />
              <motion.p className="text-[#1A1818] font-Playfair max-sm:text-[1.5rem] md:text-[2rem] xl:text-[3rem]">
                Customer Support Representative{" "}
                <a
                  target="_blank"
                  href="https://www.teleperformance.com/en-in/locations/india-site/india/"
                  className="underline text-[#1A1818] hover:text-[#1A1818]"
                >
                  Teleperformance
                </a>
                , Indore, India
              </motion.p>
              <br />
              <p className=" text-[#1A1818] font-Montserrat font-normal text-[1rem] tracking-wide">
                Since Feb 2019 - Apr 2020.
              </p>
              <br />
              <p className="text-[#1A1818] font-Montserrat font-normal text-[1rem] tracking-wide">
              Provided dedicated support to customers via call, chat, and email, resolving issues related to account verification, source of funds, and suspicious transactions. Assisted customers in verifying the legitimacy of their transactions and sources of funds while ensuring compliance with regulatory standards. Worked to resolve discrepancies and mitigate risks, ensuring accurate and timely resolutions to maintain financial integrity and enhance the customer experience.
              </p>
              
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
