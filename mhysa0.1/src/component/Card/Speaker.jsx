import React from 'react';
import IconSkills from '../IconSkills';

function Speaker({data}) {
  return (
    <div className="flex py-2 md:py-8 text-center flex-col w-24 sm:w-32 md:w-60 lg:w-80 border border-yellowOne rounded-lg cursor-pointer font-Lato">
        <div className="w-fit mx-auto">
            <img className='object-contain rounded-full w-11 h-11 md:w-32 md:h-32 ' src={data.imageUrl} alt="speaker" />
        </div>

        <h3 className='font-semibold text-blue-one md:my-3 text-exsm md:text-base'>{data.name}</h3>
        <div className="mb-1 md:mb-8 lg:mb-16">
            <h1 className='text-yellowOne md:text-2xl text-xs'>{data.position}</h1>
            <h4 className='text-blue-one text-exsm md:text-sm font-semibold'>{data.job}</h4>
        </div>

        <div className=" hidden md:flex justify-center relative my-2">
           
            {
                data.iconSkills.map((e, i) => {
                    return (
                        < IconSkills e={e} i={i} />
                    )
                })
            }

            
        </div>


        <div className="lg:w-3/5 md:w-11/12 mx-auto">
            <p className='m-0 md:text-sm font-semibold text-blue-one text-suxs '>{data.skills}</p>
        </div>

        

        

        

        
    </div>

  )
}

export default Speaker;
