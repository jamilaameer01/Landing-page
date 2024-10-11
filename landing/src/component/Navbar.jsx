import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center px-[55px]  xs:flex-col xs:gap-3 xs:px-0">
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="">
            <GiHamburgerMenu />
          </button>
        </div>
        <div
          className={`text-[#505F98] font-semibold ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <ul className="flex flex-col md:flex-row gap-10 ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>


        </div>
        <div className="text-[#37447E] font-bold xs:hidden">
          <p>Landing</p>
        </div>
        <div>
          <button className="w-[160px] bg-[#111B47] text-white p-2 rounded-none">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
