import React from 'react';
import { useDispatch } from 'react-redux';
import iconTime from "../../asset/image/icon_time.svg";
import iconMember from "../../asset/image/member_icon.svg";


function Class({data, email}) {
    const dispatch = useDispatch();

    const goPayment = (id) => {
        if (email !== '') console.log("bisa masuk " + id);
        else dispatch({type: "ACTIVE", value: "active"});
    }

  return (
      <div className="flex my-5 lg:mx-5 lg:my-10 flex-col justify-between w-24 sm:w-32 md:w-60 lg:w-80 border border-indigo-900 overflow-hidden rounded-xl md:rounded-2xl shadow-sm cursor-pointer font-Lato transition-all duration-300 hover:-translate-y-1" 
      onClick={() => goPayment(data._id)}>
          <div className="w-full h-16 sm:h-20 md:h-40 lg:h-56 overflow-hidden">
              <img className='object-cover h-full w-full' src={data.imageUrl} alt="card" />
          </div>
          <div className="px-2 py-1 md:py-0 md:px-6 md:my-2 lg:my-4 text-blue-one">
              <div className="flex flex-col md:flex-row justify-between text-exsm md:text-sm ">
                  <span>{data.type}</span>
                  <span className='hidden md:block'>{data.date}</span>
              </div>
              <h2 className='font-semibold text-exsm md:text-base leading-3'>{data.title}</h2>
          </div>

          <div className="hidden lg:flex bg-blue-one justify-evenly items-center mb-2 py-4">
              <div className="flex">
                  <img src={iconTime} alt="icon_time" />
                  <p className='text-white mx-1'>{data.time}</p>
              </div>
              <div className="flex">
                <img src={iconMember} alt="icon_time" />
                  <p  className='text-white mx-1'>{data.members} Students</p>
              </div>
          </div>

          <div className="hidden md:flex border-y border-indigo-900 mt-2">
              <div className="w-10 h-10  md:w-20 md:h-20">
                <img className='object-contain' src="/image/mentor.jpg" alt="mentor" />
              </div>
              <div className="py-1 md:py-3 px-3 text-blue-one text-xs md:text-base">
                  <h3>{data.nameMentor}</h3>
                  <p>{data.experienceJob}</p>
              </div>
          </div>

          <div className="flex justify-end items-center p-1 md:py-3 md:px-6 border-t border-indigo-900 md:border-0">
              <h1 className='text-blue-one md:font-semibold text-xs md:text-xl'>{data.price},-</h1>
          </div>
      </div>
  )
}

export default Class;
