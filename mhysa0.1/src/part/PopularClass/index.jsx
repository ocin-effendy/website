import React from 'react';
import Class from '../../component/Card/Class';

function PopularClass({data, email}) {
  return (
      <div className="sm:w-full md:w-11/12 xl:w-4/5 mx-auto mb-12 lg:my-24">
          <h1 className='md:text-3xl font-Lato md:my-10 my-3 text-center '>Popular Class</h1>
          <div className="flex justify-evenly md:justify-between">
              {
                data.popularClass.map((e, i) => {
                    return <Class data={e} key={`card-${i}`} email={email} />
                })

              }
          </div>
      </div>
  )
}

export default  PopularClass;
