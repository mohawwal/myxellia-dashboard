import React from 'react';

interface HamburgerProps {
  isMenuOpen: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({ isMenuOpen }) => {
  return (
    <div className='flex flex-col justify-center items-center w-8 h-8 space-y-1.5'>
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
    </div>
  );
};

export default Hamburger;