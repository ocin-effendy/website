import React from 'react';
import partnersImage from "../../asset/image/sponsor.jpg";

function Patners() {
  return (
      <div className="lg:my-24 my-6 text-center w-4/5 mx-auto">
          <h1 className='md:text-3xl font-Lato md:my-10 my-3 '>Sponsor</h1>
          <img src={partnersImage} alt="sponsor" />
      </div>
    )
}

export default Patners;
