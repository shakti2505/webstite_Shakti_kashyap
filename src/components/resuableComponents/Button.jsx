import React from "react";
import { useNavigate } from "react-router";

const Button = ({ title, link }) => {
    const navigate = useNavigate()
  return (
    <button
      className="w-52 bg-black h-18 my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:w-72 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] text-[1.5rem] font-montserrat font-normal"
      onClick={() => {
        if (link != undefined) window.open(link, "_blank");
        else navigate('/contact')
      }} 
    >
      <span className="text-[#fff] no-underline">{title}</span>
    </button>
  );
};

export default Button;
