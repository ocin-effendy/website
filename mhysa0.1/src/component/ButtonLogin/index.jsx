import React from 'react';

function ButtonLogin({data}) {
  return(
    <div className="flex flex-col ">
       <button className='py-3 px-12 my-2 bg-blue-one rounded-lg text-white text-xs font-semibold' type='submit' onClick={data}>Masuk Sebagai Member</button>
       <button className='py-3 px-12  bg-yellowOne rounded-lg text-white text-xs font-semibold'  type='submit'>Masuk Sebagai Tutor</button>
    </div>
  ) 
  
}

export default ButtonLogin;
