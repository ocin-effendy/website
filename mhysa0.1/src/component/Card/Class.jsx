import React from 'react';
import iconTime from "../../asset/image/icon_time.svg";
import iconMember from "../../asset/image/member_icon.svg";


function Class() {
  return (
      <div className="flex flex-col w-24 sm:w-32 md:w-60 lg:w-80 border border-indigo-900 rounded-lg cursor-pointer font-Lato">
          <div className="w-full overflow-hidden">
              <img className='object-contain' src="/image/img-card1.jpg" alt="card" />
          </div>

          <div className="px-2 py-1 md:py-0 md:px-6 md:my-2 lg:my-4 text-blue-one">
              <div className="flex flex-col md:flex-row justify-between text-exsm md:text-sm ">
                  <span>UI / UX Desaign</span>
                  <span className='hidden md:block'>6/9/2021</span>
              </div>
              <h2 className='font-semibold text-exsm md:text-base leading-3'>Intro duction Figma Prototype</h2>
          </div>

          <div className="hidden lg:flex bg-blue-one justify-evenly items-center mb-2 py-4">
              <div className="flex">
                  <img src={iconTime} alt="icon_time" />
                  <p className='text-white mx-1'>12.00-14.00</p>
              </div>
              <div className="flex">
                <img src={iconMember} alt="icon_time" />
                  <p  className='text-white mx-1'>2 Students</p>
              </div>
          </div>

          <div className="hidden md:flex border-y border-indigo-900 mt-2">
              <div className="w-10 h-10  md:w-20 md:h-20">
                <img className='object-contain' src="/image/mentor.jpg" alt="mentor" />
              </div>
              <div className="py-1 md:py-3 px-3 text-blue-one text-xs md:text-base">
                  <h3>Suharto</h3>
                  <p>Tokopedia</p>
              </div>
          </div>

          <div className="flex justify-end p-1 md:py-3 md:px-6 border-t border-indigo-900 md:border-0">
              <h1 className='text-blue-one md:font-semibold text-xs md:text-xl'>Rp.100.000,-</h1>
          </div>
      </div>
  )
}

export default Class;
