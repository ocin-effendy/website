import React from 'react';

function Speaker() {
  return (
    <div className="flex py-2 md:py-8 text-center flex-col w-24 sm:w-32 md:w-60 lg:w-80 border border-yellowOne rounded-lg cursor-pointer font-Lato">
        <div className="w-fit mx-auto">
            <img className='object-contain rounded-full w-11 h-11 md:w-32 md:h-32 ' src="/image/mentor.jpg" alt="speaker" />
        </div>

        <h3 className='font-semibold text-blue-one md:my-3 text-exsm md:text-base'>Dika Iriawan</h3>
        <div className="mb-1 md:mb-8 lg:mb-16">
            <h1 className='text-yellowOne md:text-2xl text-xs'>CEO DikaLearn</h1>
            <h4 className='text-blue-one text-exsm md:text-sm font-semibold'>Product Manager</h4>
        </div>

        <div className=" hidden md:flex justify-center relative my-2">
            <span className='flex justify-center' >
                <img className="w-8 h-8 mx-2 cursor-pointer relative z-10 peer" src='image/icon_speaker.jpg' alt="icon" />
                <b className='peer-hover:opacity-100 peer-hover:-translate-y-3 peer-hover:scale-100  w-0 h-0 border-x-8 border-t-8 border-solid border-x-transparent border-t-blue-one absolute opacity-0 scale-50 transition-all duration-500 ease-out' />
                <p className="peer-hover:opacity-100 peer-hover:-translate-y-11 peer-hover:scale-100 py-px px-1.5 rounded-md bg-blue-one text-white mx-0.5 absolute bottom-0 opacity-0 scale-50 transition-all duration-500 ease-out">Speaker</p>
            </span>

            <span className='flex justify-center' >
                <img className="w-8 h-8 mx-2 cursor-pointer relative z-10 peer" src='image/icon_design.jpg' alt="icon" />
                <b className='peer-hover:opacity-100 peer-hover:-translate-y-3 peer-hover:scale-100  w-0 h-0 border-x-8 border-t-8 border-solid border-x-transparent border-t-blue-one absolute opacity-0 scale-50 transition-all duration-500 ease-out' />
                <p className="peer-hover:opacity-100 peer-hover:-translate-y-11 peer-hover:scale-100 py-px px-1.5 rounded-md bg-blue-one text-white mx-0.5 absolute bottom-0 opacity-0 scale-50 transition-all duration-500 ease-out">Design</p>
            </span>

            <span className='flex justify-center' >
                <img className="w-8 h-8 mx-2 cursor-pointer relative z-10 peer" src='image/icon_userPersona.jpg' alt="icon" />
                <b className='peer-hover:opacity-100 peer-hover:-translate-y-3 peer-hover:scale-100  w-0 h-0 border-x-8 border-t-8 border-solid border-x-transparent border-t-blue-one absolute opacity-0 scale-50 transition-all duration-500 ease-out' />
                <p className="peer-hover:opacity-100 peer-hover:-translate-y-11 peer-hover:scale-100 py-px px-1.5 rounded-md bg-blue-one text-white mx-0.5 absolute bottom-0 opacity-0 scale-50 transition-all duration-500 ease-out">Persona</p>
            </span>

            <span className='flex justify-center' >
                <img className="w-8 h-8 mx-2 cursor-pointer relative z-10 peer" src='image/icon_presentation.jpg' alt="icon" />
                <b className='peer-hover:opacity-100 peer-hover:-translate-y-3 peer-hover:scale-100  w-0 h-0 border-x-8 border-t-8 border-solid border-x-transparent border-t-blue-one absolute opacity-0 scale-50 transition-all duration-500 ease-out' />
                <p className="peer-hover:opacity-100 peer-hover:-translate-y-11 peer-hover:scale-100 py-px px-1.5 rounded-md bg-blue-one text-white mx-0.5 absolute bottom-0 opacity-0 scale-50 transition-all duration-500 ease-out">Meet</p>
            </span>
        </div>


        <div className="lg:w-3/5 md:w-11/12 mx-auto">
            <p className='m-0 md:text-sm font-semibold text-blue-one text-suxs '>Design Thinking, Problem Solving, Empathy, User Persona</p>
        </div>

        

        

        

        
    </div>

  )
}

export default Speaker;
