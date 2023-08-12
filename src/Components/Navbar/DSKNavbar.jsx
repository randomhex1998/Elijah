import React from "react";

import logo from "../../img/logo.webp";
import { BsFillMoonStarsFill } from "react-icons/bs";

function DSKNavbar() {
  return (
    <div className="w-full lg:flex justify-between items-center hidden ">
      <div div className="flex items-center font-bold gap-10">
        <img src={logo} width="100px" />
        <div className="flex items-center text-[18px] gap-10 ">
          <a href="#" className="hover:text-red-600 transition-colors">
            Style Guides
          </a>
          <a href="#" className="hover:text-red-600 transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-red-600 transition-colors">
            Membership
          </a>
          <a href="#" className="hover:text-red-600 transition-colors">
            Tags
          </a>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <button className="text-[28px] group">
          <BsFillMoonStarsFill className="group-hover:text-red-600" />
        </button>
        <button className="border-red-600 bg-red-600 text-white border-2 px-7 py-2 rounded-3xl">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default DSKNavbar;
