import React from 'react';
import logo from "./../../asset/image/logo.svg";

export default function Nav() {
    return (
        <div className="w-full font-Lato h-16 bg-slate-300 flex items-center">
            <nav className='flex flex-row w-4/5 mx-auto justify-between items-center '>
                <div className="flex flex-row items-center">
                    <img src={logo} alt="logo" />
                    <h1 className='text-2xl ml-4 font-semibold text-blue-one'>Mhysa Learning</h1>
                </div>

                <div className="flex flex-row">
                    <ul className='flex flex-row items-center'>
                        <li className='mx-5'>
                            <a  href="/" className='font-xs text-blue-one' >Home</a>
                        </li>
                        <li  className='mx-5'>
                            <a href="/program" className='font-xs text-blue-one'>Program</a>
                        </li>
                        <li  className='mx-5'>
                            <a href="/about" className='font-xs text-blue-one'>About Us</a>
                        </li>
                        <li  className='mx-5'>
                            <a href="/contact" className='font-xs text-blue-one'>Contact Us</a>
                        </li>
                        <li  className='mx-5'>
                            <a href="/blog" className='font-xs text-blue-one'>Blog</a>
                        </li>
                    </ul>

           
                </div>

                <div className="flex flex-row items-center  relative">
                        <a href="/sign-in" className="
                        text-l bg-white rounded-3xl pl-7 py-1.5 border-2 
                        border-blue-one text-blue-one pr-32"
                        >Login</a>
                        <a href="/sign-up" className="text-l bg-blue-one rounded-3xl px-7 py-1.5 border-2 
                        border-blue-one text-white absolute right-0"
                        >Sign Up</a>
                    </div>


            </nav>

        </div>
    )
}
