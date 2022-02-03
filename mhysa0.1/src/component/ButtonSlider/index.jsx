import React from 'react';
import chevron_left from '../../asset/image/chevron_left.svg';
import chevron_right from '../../asset/image/chevron_right.svg';

function ButtonSlider({ onClick1, onClick2, value }) {
  return (
    <div className="flex">
        <button className='bg-blue-one border border-solid border-blue-one rounded-sm medium:rounded-md w-5 h-5 exsmall:w-6 exsmall:h-6 medium:w-8 medium:h-8 large:w-10 large:h-10 mr-1 large:mr-2.5 flex justify-center items-center text-center active:border-2 active:border-white' onClick={onClick2}><img src={chevron_left} alt="chevron" /></button>
        <input className='border border-solid border-blue-one rounded-sm medium:rounded-md w-5 h-5 exsmall:w-6 exsmall:h-6 medium:w-8 medium:h-8 large:w-10 large:h-10 mr-1 large:mr-2.5 flex justify-center items-center text-center text-suxs exsmall:text-exsm medium:text-sm large:text-base' type="text" value={value} disabled />
        <button className='bg-blue-one border border-solid border-blue-one rounded-sm medium:rounded-md w-5 h-5 exsmall:w-6 exsmall:h-6 medium:w-8 medium:h-8 large:w-10 large:h-10 mr-1 large:mr-2.5 flex justify-center items-center text-center active:border-2 active:border-white' onClick={onClick1}><img src={chevron_right} alt="chevron" /></button>
    </div>
  )
}

export default ButtonSlider;
