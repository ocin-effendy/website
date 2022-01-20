import React from 'react';
import google from "../../asset/image/icon_google.svg";

function GoogleLogin() {
  return (
    <div className="flex px-10 py-3 items-center border-2 border-gray-300">
        <img className='h-3 w-3 md:h-5 md:w-5' src={google} alt="icon_google" />
        <a href="#" className='font-semibold text-xs ml-2'>Masuk dengan Google</a>
    </div>
  )
}

export default GoogleLogin;
