import React from "react";

import Img1 from "../../img/hero_element_1.webp";
import Img2 from "../../img/hero_element_2.webp";
import Img3 from "../../img/hero_element_3.webp";

function Hero() {
  return (
    <div className="flex justify-center items-center">
      <div className="container flex flex-col py-10 md:py-20 lg:py-20">
        <div className="flex flex-wrap font-[1000] text-[2rem] md:text-[4rem] xl:text-[5rem] leading-[7rem] md:leading-[8rem]">
          In depth{" "}
          <img
            src={Img1}
            className="w-[2.5rem] h-[2.5rem] md:w-[4rem] md:h-[4rem] mx-3"
            alt="Image 1"
          />
          resource on UI, UX and everything{" "}
          <img
            src={Img2}
            className="w-[2.5rem] h-[2.5rem] md:w-[4rem] md:h-[4rem] mx-3"
            alt="Image 2"
          />
          in{" "}
          <img
            src={Img3}
            className="w-[2.5rem] h-[2.5rem] md:w-[4rem] md:h-[4rem] mx-3"
            alt="Image 3"
          />
          between.
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center mt-6 md:mt-10">
          <p className="w-full md:w-6/12 text-center md:text-left">
            Get the email newsletter and unlock access to members-only content
            and updates Elijah is a modern classic blog theme for Ghost.
          </p>
          <form className="w-full md:w-6/12 mt-4 md:mt-0 flex items-center justify-center md:justify-end">
            <input
              type="text"
              className="px-4 py-2 w-full md:w-auto border rounded-full md:mr-4 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Email Address"
            />
            <button className="px-6 py-2 rounded-full bg-black text-white">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
