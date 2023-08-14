import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

function BottomFooter() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center py-10 w-full">
      <p>Elijah Demo © 2023. All rights reserved.</p>
      <div className="flex gap-5 mt-8 sm:mt-0">
        <a href="#">
          <AiOutlineTwitter className="hover:text-red-600" size={25} />
        </a>
        <a href="#">
          <BsFacebook className="hover:text-red-600" size={25} />
        </a>
        <a href="#">
          <BsTelegram className="hover:text-red-600" size={25} />
        </a>
        <a href="#">
          <BsYoutube className="hover:text-red-600" size={25} />
        </a>
      </div>
    </div>
  );
}

export default BottomFooter;
