import React from 'react';
import { useDispatch } from "react-redux"; 

function Modal(props) {
    const dispatch = useDispatch();
  return (
    <div className={`${props.status === 'active' ? 'block' : 'hidden'} fixed top-0 z-100 w-full h-screen bg-gray-700 bg-opacity-60 `}>
        <div className="relative flex flex-col justify-between bg-white w-36 h-20 md:w-96 mx-auto md:h-40 my-36 rounded-xl md:rounded-3xl p-3 md:p-7 ">
            <p className='m-0 text-exsm md:text-lg font-normal'>Login untuk booking {props.address === "/mhysaClass" ? "Kelas" : "Pembicara"}</p>
            <div className="w-full text-right">
                <button className='bg-blue-one text-suxs md:text-base text-white p-1 md:py-2 md:px-5 md:rounded-lg rounded-sm font-medium border border-blue-one ml-2.5' onClick={() => dispatch({ type: "ACTIVE", value: "" })} >Cancel</button>
                <button className='no-underline bg-blue-one text-suxs md:text-base text-white p-1 md:py-2 md:rounded-lg rounded-sm font-medium border border-blue-one ml-2.5'><a className=' md:px-5' href="/sign-in">Login</a></button>
                {/* <a className='no-underline bg-blue-one text-suxs md:text-base text-white p-1 md:py-2 md:px-5 md:rounded-lg rounded-sm font-medium border border-blue-one ml-2.5' href="/sign-in">Login</a> */}
            </div>

        </div>
    </div >
  );
}

export default Modal;
