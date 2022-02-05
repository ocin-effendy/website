import React from 'react';
import { connect, useSelector } from "react-redux";

function IconSkills({e, i}) {
  const status = useSelector((state) => state.statusModal);
  return (
    <span className={`${status !== '' ? '-z-20' : ''} flex justify-center`} key={`icon_skills${i}`} >
      <img className="w-8 h-8 mx-2 cursor-pointer relative z-10 peer" src={e.icon} alt="icon" />
      <b className='peer-hover:opacity-100 peer-hover:-translate-y-3 peer-hover:scale-100  w-0 h-0 border-x-8 border-t-8 border-solid border-x-transparent border-t-blue-one absolute opacity-0 scale-50 transition-all duration-500 ease-out' />
      <p className="peer-hover:opacity-100 peer-hover:-translate-y-11 peer-hover:scale-100 py-px px-1.5 rounded-md bg-blue-one text-white mx-0.5 absolute bottom-0 opacity-0 scale-50 transition-all duration-500 ease-out">{e.descIcon}</p>
    </span>
  )
}

const stateRedux = (state) => ({
  modal: state.statusModal
});

export default IconSkills;
