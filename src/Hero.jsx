import React from 'react'
import macbook from "./assets/macbook.png";

export default function Hero() {
  return (
    <>
    <div className='w-screen mt-3'>
  <div className="w-screen">
    <div className="flex justify-between w-4/5 mx-auto p-4 border-b-2 border-black">
      <a href="" className='text-lg'>iPhoneBali</a>
      <div className="flex">
        <a href="" className='mx-3'><i class="fa-solid fa-magnifying-glass"></i></a>
        <a href="" className='mx-3'><i class="fa-solid fa-user"></i></a>
      </div>
    </div>
    <div className="w-screen flex justify-center">
    <div className="flex flex-row  w-4/5">
        <div className="w-1/2 flex flex-col justify-center h-96 items-start">
            <h1 className='text-light font-thin text-8xl'>MACBOOK <br /> PRO M1</h1>
            <div className="flex mt-5 justify-start items-start w-80 pt-5 border-t-2 border-black">
            <button className='bg-blue-900 rounded-full px-7 py-3 self-start text-white'>BUY NOW</button>
            </div>
        </div>
    <div className="w-1/2 h-96 flex justify-center items-center text-left">
          <img src={macbook} alt="" />
    </div>
    </div>
    </div>
  </div>
</div>

    </>
  )
}
