import React, { useContext } from "react";
import { CartFeauContext } from "../../context/FeauContext";

function Feautered() {
  const data = useContext(CartFeauContext);

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {data.error ? (
          <div>Error loading data: {data.error.message}</div>
        ) : (
          data.data.map((item) => (
            <div
              className="h-[500px] overflow-hidden rounded-3xl relative"
              key={item.id}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t to-transparent from-black p-5 flex flex-col justify-end items-start">
                <p className="text-white bg-red-600 px-5 py-1 font-bold rounded-sm hover:bg-white hover:text-red-600">
                  {item.tag}
                </p>
                <a href="#">
                  <h2 className="text-white text-3xl font-extrabold py-5 hover:underline transition-all duration-500">
                    {item.title}
                  </h2>
                </a>
                <p className="text-[#eee]">{item.read}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Feautered;
