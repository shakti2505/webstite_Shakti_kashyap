import React from "react";

const Navbar = ({ textColor }) => {
  return (
    <div className="flex justify-between min-h-full xl:flex-col items-center text-[1rem] xl:fixed xl:inset-y-0 xl:left-0 xl:w-12 xl:p-8 lg:p-5 md:p-5">
      <div className="flex-row flex items-center xl:flex-col justify-between gap-5 ">
        <a
          href="/"
          className={` ${
            textColor !== "#ECE7E1"
              ? "text-[#1A1818] hover:text-[#1A1818]"
              : "text-[#ECE7E1] hover:text-[#ECE7E1]"
          } font-montserrat font-normal xl:rotate-[270deg] hover:line-through`}
        >
          Home
        </a>
        <div
          className={`xl:border-l xl:h-48 h-[1px] w-full xl:w-[1px] max-sm:w-[1.5rem] sm:w-96 md:w-96 lg:w-96 ${
            textColor !== "#ECE7E1" ? " bg-[#1A1818]" : "bg-[#ECE7E1] "
          }`}
        ></div>
      </div>

      {/* Divider */}
      <div className="flex xl:flex-col-reverse justify-between items-center max-sm:flex-row md:flex-row gap-2 ">
        <p
          className={`${
            textColor !== "#ECE7E1"
              ? "text-[#1A1818] hover:text-[#1A1818]"
              : "text-[#ECE7E1] hover:text-[#ECE7E1]"
          } font-montserrat font-normal xl:rotate-[270deg]`}
        >
          ©
        </p>
        <p
          className={`${
            textColor !== "#ECE7E1"
              ? "text-[#1A1818] hover:text-[#1A1818]"
              : "text-[#ECE7E1] hover:text-[#ECE7E1]"
          } font-montserrat font-normal xl:rotate-[270deg]`}
        >
          /
        </p>
        <p
          className={`${
            textColor !== "#ECE7E1"
              ? "text-[#1A1818] hover:text-[#1A1818]"
              : "text-[#ECE7E1] hover:text-[#ECE7E1]"
          } font-montserrat font-normal xl:rotate-[270deg]`}
        >
          2025
        </p>
      </div>
    </div>
  );
};

export default Navbar;
