import React, { useContext, useState } from "react";
import { CartFeauContext } from "../../context/FeauContext";

function MainWrapper() {
  const data = useContext(CartFeauContext);
  const [loadMore, setLoadMore] = useState(9);

  const slcData = data.data.slice(3, loadMore);

  const loadMoreHandler = () => {
    setLoadMore(loadMore + 1);
  };

  console.log(loadMore);

  return (
    <div className="bg-[#eee] py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {slcData.map((item) => (
          <div
            key={item.id}
            className=" bg-white shadow rounded-xl overflow-hidden"
          >
            <img
              src={item.img}
              className="object-cover w-full h-[300px]"
              alt={item.title}
            />
            <div className="p-8 flex flex-col items-start">
              <div className="bg-[#eee] text-red-600 hover:bg-red-600 hover:text-white cursor-pointer px-5 py-1 font-bold rounded-sm">
                {item.tag}
              </div>
              <a href="#">
                <h2 className="text-black text-3xl font-extrabold py-5 hover:underline transition-all duration-500">
                  {item.title}
                </h2>
              </a>
              <p>{item.summary}</p>
              <p className="text-[#555] mt-5">{item.read}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <button
          onClick={loadMoreHandler}
          className="rounded-full bg-red-600 text-white px-12 py-3 my-10"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default MainWrapper;
