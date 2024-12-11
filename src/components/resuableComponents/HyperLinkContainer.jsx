import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export const HyperLinkContainer = ({ title, type, githubLink, liveLink }) => {
  return (
    <div className="flex flex-col items-start">
      <motion.a
        initial={{ x: 0 }}
        whileHover={{ x: 15, skewX: 2 }}
        transition={{ delay: 0.1, ease: "easeIn" }}
        href={liveLink}
        target="_blank"
        className="text-[#ECE7E1] hover:text-[#ECE7E1] font-Playfair font-normal"
      >
        {title}
      </motion.a>
      <div className="flex flex-row gap-2">
        <p className="font-montserrat text-base">- {type}</p>
        {liveLink != undefined && (
          <a
            className="font-montserrat text-base underline text-[#ECE7E1] hover:text-[#ECE7E1]"
            href={liveLink}
            target="_blank"
          >
            Visit
          </a>
        )}
        <a
          className="font-montserrat text-base underline text-[#ECE7E1] hover:text-[#ECE7E1]"
          href={githubLink}
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export const HyperLinkContainerTwo = ({ title, link }) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      whileHover={{ x: 10 }}
      transition={{
        delay: 0.1,
        ease: "easeIn",
        type: "spring",
        duration: 0.8,
      }}
    >
      <Link
        to={link}
        className="text-[#1A1818] hover:text-[#1A1818] font-Playfair font-normal  cursor-pointer"
      >
        {title}
      </Link>
    </motion.div>
  );
};
