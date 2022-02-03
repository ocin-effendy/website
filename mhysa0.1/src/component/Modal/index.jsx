import React from 'react';
import { useDispatch } from "react-redux"; 

function Modal(props) {
    const dispatch = useDispatch();
  return (
    <div className={`${props.status === 'active' ? 'block' : 'hidden'}  fixed top-0 z-100 w-full h-screen bg-gray-700 bg-opacity-60 `}>
        <div className="relative flex flex-col justify-between bg-white w-96 mx-auto h-40 my-36 rounded-3xl p-7 z-50">
            <p className='m-0 text-lg font-normal'>Login untuk booking {props.address === "/mhysaClass" ? "Kelas" : "Pembicara"}</p>
            <div className="w-full text-right">
                <button className='bg-blue-one text-white py-2 px-5 rounded-lg font-medium border border-blue-one ml-2.5' onClick={() => dispatch({ type: "ACTIVE", value: "" })} >Cancel</button>
                <a className='no-underline bg-blue-one text-white py-2 px-5 rounded-lg font-medium border border-blue-one ml-2.5' href="/sign-in">Login</a>
            </div>

        </div>
    </div >
  );
}

export default Modal;
