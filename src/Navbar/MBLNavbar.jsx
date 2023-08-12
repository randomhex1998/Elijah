import React, { useState } from "react";

import logo from "../img/logo.webp";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";

function MBLNavbar() {
  const [menu, setMEnu] = useState(false);

  return (
    <div className="w-full flex justify-between items-center lg:hidden">
      <div div className="flex items-center font-bold gap-10">
        <img src={logo} width="100px" />
        <div className={menu ? "" : "hidden"}>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm"
            onClick={() => setMEnu(false)}
          ></div>
          <div className="flex items-center flex-col bg-white  text-[16px] gap-10 fixed top-[0] left-0 w-[60%] w-[60%] md:w-[30%] h-[100vh]">
            <a
              href="#"
              className="hover:text-red-600 transition-colors border-b border-[#eee] w-full p-5"
            >
              Style Guides
            </a>
            <a
              href="#"
              className="hover:text-red-600 transition-colors border-b border-[#eee] w-full p-5"
            >
              Features
            </a>
            <a
              href="#"
              className="hover:text-red-600 transition-colors border-b border-[#eee] w-full p-5"
            >
              Membership
            </a>
            <a
              href="#"
              className="hover:text-red-600 transition-colors border-b border-[#eee] w-full p-5"
            >
              Tags
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <button className="text-[28px] group">
          <BsFillMoonStarsFill className="group-hover:text-red-600" />
        </button>
        <button className="text-[28px] group" onClick={() => setMEnu(!menu)}>
          <CiMenuFries className="group-hover:text-red-600" />
        </button>
      </div>
    </div>
  );
}

export default MBLNavbar;
