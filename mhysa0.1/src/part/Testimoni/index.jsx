import React from 'react';
import bgTesti1 from "../../asset/image/img-bgTesti1.jpg";
import icon_pick1 from "../../asset/image/icon_pick1.svg";
import icon_pick2 from "../../asset/image/icon_pick2.svg";
import arrowRight from "../../asset/image/arrowRight.svg";
import arrowLeft from "../../asset/image/arrowLeft.svg";


function Testimoni() {
  return (
    <div className="mb-12 lg:my-24 overflow-x-hidden">
        <h1 className='md:text-3xl font-Lato md:my-10 my-3 text-center '>Testimoni</h1>
        <div className="flex justify-center items-center">
            

            <div className="flex justify-between w-4/5 mx-auto absolute">
                <div className="flex flex-col justify-center w-1/4 ">
                    <img className='w-16 h-16' src={icon_pick1} alt="pick1" />
                    <h1 className='font-semibold text-2xl'>Apa kata alumni setelah mengikuti kelas online</h1>
                    <img className='w-10 ' src={arrowRight} alt="arrowRight" />
                </div>
                <div className="flex flex-col justify-between w-3/5 h-96 px-16 py-8 bg-white rounded-xl shadow-2xl">
                    <div className="">
                        <h1 className='text-xl my-5'>kata Alumni</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam error suscipit placeat, quaerat unde.</p>
                    </div>
                    <div className="flex items-center">
                        <img className='w-20 h-20 rounded-lg' src="/image/mentor.jpg" alt="mentor" />
                        <div className="mx-2">
                            <h5>Dika Iriawan</h5>
                            <p>Alumni UI/UX Class</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-end">
                <img className='w-1/2' src={bgTesti1} alt="bgTesti1" />
            </div>






        </div>
        
        
    </div>
  )
}

export default Testimoni;
