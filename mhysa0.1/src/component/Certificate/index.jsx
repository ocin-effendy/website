import React from 'react';
import dataClass from '../../JSON/class.json';
import Class from '../Card/Class';

function Certificate({email, pathName}) {
  return (
    <div className="px-4 my-10 lg:px-16 lg:w-2/3 mt-3">
      <h1>Sertifikat Kelas</h1>


      <div className="flex flex-wrap">
        {
          dataClass.Class.map((e,i) => {
            return <Class data={e} key={`exam-${i}`} email={email} pathName={pathName} kind={'certificate'}/>
            
          })
        }
      </div>
    </div>

    
  )
}

export default Certificate