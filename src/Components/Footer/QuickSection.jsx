import React from "react";

function QuickSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-20 border-b border-[#d6d6d6] pb-10">
      <div className="flex gap-20 ">
        <ul>
          <h3 className="font-extrabold text-2xl mb-4">Quick Links</h3>
          <a href="#" className="hover:text-red-600 font-medium">
            <li className="mt-3 font-bold">Archive Page</li>
          </a>
          <a href="#" className="hover:text-red-600 font-medium">
            <li className="mt-3 font-bold">Contact Page Page</li>
          </a>
          <a href="#" className="hover:text-red-600 font-medium">
            <li className="mt-3 font-bold">Signin Page</li>
          </a>
          <a href="#" className="hover:text-red-600 font-medium">
            <li className="mt-3 font-bold">Signup Page</li>
          </a>
          <a href="#" className="hover:text-red-600 font-medium">
            <li className="mt-3 font-bold">Free Account Page</li>
          </a>
          <a href="#" className="hover:text-red-600 font-medium">
            <li className="mt-3 font-bold">Paid Account Page</li>
          </a>
        </ul>
        <ul>
          <h3 className="font-extrabold text-2xl mb-4">Top Title</h3>
          <a href="#" className="hover:text-red-600">
            <li className="mt-3 font-bold">Idea</li>
          </a>
          <a href="#" className="hover:text-red-600">
            <li className="mt-3 font-bold">Business</li>
          </a>
          <a href="#" className="hover:text-red-600">
            <li className="mt-3 font-bold">Story</li>
          </a>
          <a href="#" className="hover:text-red-600">
            <li className="mt-3 font-bold">News</li>
          </a>
          <a href="#" className="hover:text-red-600">
            <li className="mt-3 font-bold">Liftstyle</li>
          </a>
          <a href="#" className="hover:text-red-600">
            <li className="mt-3 font-bold">Fashion</li>
          </a>
        </ul>
      </div>
      <div className="mt-10 lg:mt-0">
        <h2 className="font-extrabold text-2xl md:text-4xl">
          Join the newsletter and read the new post first.
        </h2>
        <p className="mt-5 font-medium text-[12px] md:text-[25px]">
          Get the email newsletter and unlock access to members-only contents
        </p>
      </div>
    </div>
  );
}

export default QuickSection;
