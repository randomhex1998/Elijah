import React from "react";

import { BsFillTagsFill } from "react-icons/bs";
import TopTagsBox from "./TopTagsBox";

import tag6 from "../../img/tag_6.webp";
import tag3 from "../../img/tag_3.webp";
import tag9 from "../../img/tag_9.webp";
import tag7 from "../../img/tag_7.webp";
import tag5 from "../../img/tag_5.webp";
import tag1 from "../../img/tag_1.webp";

function TopTags() {
  return (
    <div className="my-24 bg-[#eee] py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 ">
          <div className="bg-white rounded-lg p-10 w-full lg:w-[200px] flex flex-col justify-center items-center">
            <BsFillTagsFill className="text-red-600" size={25} />
            <p className="text-xl font-bold">Popular Tag</p>
          </div>
          <TopTagsBox img={tag6} numberOfPosts="13 Posts" title="Idea" />
          <TopTagsBox img={tag3} numberOfPosts="15 Posts" title="Business" />
          <TopTagsBox img={tag9} numberOfPosts="10 Posts" title="Story" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
          <TopTagsBox img={tag7} numberOfPosts="1 Posts" title="News" />
          <TopTagsBox img={tag5} numberOfPosts="8 Posts" title="LifeStyle" />
          <TopTagsBox img={tag1} numberOfPosts="20 Posts" title="Fashion" />
          <TopTagsBox img={tag6} numberOfPosts="10 Posts" title="Story" />
        </div>
      </div>
    </div>
  );
}

export default TopTags;
