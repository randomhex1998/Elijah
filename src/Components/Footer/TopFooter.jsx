import React from "react";
import logo from "../../img/logo.webp";

function TopFooter() {
  return (
    <div className="flex justify-between items-center border-b border-[#d6d6d6] mb-5">
      <div>
        <img src={logo} width="150px" />
      </div>
      <button className="rounded-full bg-red-600 text-white px-12 py-3 my-10">
        Contact Us
      </button>
    </div>
  );
}

export default TopFooter;
