import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/thapar-logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md flex h-[10vh] items-center justify-between text-lg max-md:justify-normal max-md:gap-[3rem] max-md:h-[8vh]">
      <div className="w-[20vw] max-md:w-fit">
        <img src={logo} alt="Thapar Logo" className="h-[10vh] w-[10vh] max-md:h-[8vh] max-md:w-[8vh]" />
      </div>
      <div className="flex items-center w-[20vw] max-md:w-fit text-3xl max-md:text-2xl text-red-600 font-bold">
          Placement Portal
      </div>
      <div className="flex items-center">
      </div>
    </nav>
  );
};

export default Navbar;
