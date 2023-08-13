import React from 'react'



import {AiOutlineArrowRight} from "react-icons/ai"

function TopTagsBox({title , numberOfPosts , img}) {
  return (
    <div className='group bg-white flex justify-between items-center px-4 rounded-lg h-[120px]'>
        <div className='flex items-center gap-4'>
            <img src={img} className='rounded-full w-[70px] h-[70px]' />
            <div>
                <h3 className='font-extrabold text-[20px]'>{title}</h3>
                <p>{numberOfPosts}</p>
            </div>
        </div>
        <div className='p-2 bg-[#eee] rounded-full w-[40px] h-[40px] flex items-center justify-center group-hover:bg-red-600 group-hover:text-white cursor-pointer'><AiOutlineArrowRight/></div>
    </div>
  )
}

export default TopTagsBox