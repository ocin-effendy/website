import React from 'react';
import Class from '../../component/Card/Class';

function PopularClass() {
  return (
      <div className="sm:w-full md:w-11/12 xl:w-4/5 mx-auto mb-12 lg:my-24">
          <h1 className='md:text-3xl font-Lato md:my-10 my-3 text-center '>Popular Class</h1>
          <div className="flex justify-evenly md:justify-between">
              <Class />
              <Class />
              <Class />
          </div>

      </div>
  )
}

export default  PopularClass;
