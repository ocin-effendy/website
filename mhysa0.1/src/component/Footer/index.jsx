import React from 'react';
import logo from "../../asset/image/logo.svg";
import icon_footer1 from "../../asset/image/icon_footer1.svg";
import icon_footer2 from "../../asset/image/icon_footer2.svg";
import icon_footer3 from "../../asset/image/icon_footer3.svg";


function Footer() {
  return (
        <div className="bg-blue-one">
            <div className="flex flex-col md:flex-row py-10 w-4/5 mx-auto justify-between">
              <div className="md:w-1/4 flex md:block py-5 md:py-0">
                    <img className='w-16 h-16 py-1' src={logo} alt="logo" />
                    <p className='text-sm text-white mx-3 md:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quia qui quasi animi tenetur ea eligendi!</p>
              </div>

              <div className="flex md:w-1/2 justify-center md:py-5 py-16">
                <div className="flex flex-col mx-5 text-white">
                        <h4 className='font-semibold my-1'>Explore</h4>
                        <a className='text-sm my-2' href='#'>Media Partner</a>
                        <a className='text-sm my-2' href='#'>Popular Class</a>
                        <a className='text-sm my-2' href='#'>Testimoni</a>
                </div>
                <div className="flex flex-col mx-5 text-white">
                        <h4 className='font-semibold my-1'>Social</h4>
                        <a className='text-sm my-2' href='#'>Instagram</a>
                        <a className='text-sm my-2' href='#'>LinkedIn</a>
                        <a className='text-sm my-2' href='#'>Tiktok</a>
                </div>
                <div className="flex flex-col mx-5 text-white">
                        <h4 className='font-semibold my-1'>Information</h4>
                        <a className='text-sm my-2' href='/'>Home</a>
                        <a className='text-sm my-2' href='/about'>About</a>
                        <a className='text-sm my-2' href='contact'>Contact</a>
                </div>
              </div>

             


              <div className="flex flex-col md:w-1/4 sm:px-16 md:py-5 text-white">
                    <h3 className='my-2'>Media Partner</h3>
                    <div className="flex justify-between">
                        <img className='md:w-8 md:h-8' src={icon_footer1} alt="icon"/>
                         <img className='md:w-8 md:h-8' src={icon_footer2} alt="icon"/>
                         <img className='md:w-8 md:h-8' src={icon_footer3} alt="icon"/>
                    </div>

                    <h3 className='my-2'>Commudity</h3>
                    <div className="flex justify-between">
                        <img className='md:w-8 md:h-8' src={icon_footer1} alt="icon"/>
                        <img className='md:w-8 md:h-8' src={icon_footer2} alt="icon"/>
                        <img className='md:w-8 md:h-8' src={icon_footer3} alt="icon"/>
                    </div>
                </div>

            </div>

            <div className="border-2 border-gray-500">
                <div className="text-center md:w-1/4 w-11/12 mx-auto py-5 text-xs text-white">
                        <p>Copyright © 2021 All rights reserved | This template is made with by Mhysa Learning</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;