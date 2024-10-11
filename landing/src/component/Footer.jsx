import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#E7ECFF] py-10 mt-[-93px] ">
      <div className="">
        <div className="flex justify-between items-center px-[55px] xs:flex-col xs:gap-y-4 pb-7">
          <p className="text-[#939EA4] text-[14px] ">©2023 Yourcompany</p>
          <p className="text-[#37447E] font-bold hidden lg:block">Landing</p>
          <button className="w-[160px]  bg-[#111B47] text-white p-2 rounded-none">
            Purchase Now
          </button>
        </div>

        <div className="flex lg:flex-row lg:justify-between px-12 border border-t-[#CDD1D4] pt-4 xs:flex-col xs:items-center sm:flex-col sm:items-center md:flex-col md:items-center">
          <div className="text-[#505F98] font-semibold hidden lg:block">
            <ul className="flex gap-10">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex gap-5 ">
            <TiSocialFacebook />
            <FaLinkedinIn />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer