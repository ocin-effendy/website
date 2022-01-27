import React from 'react';
import imgImpress1 from '../../asset/image/img-impress1.jpg';
import imgImpress2 from '../../asset/image/img-impress2.jpg';




function Impress() {
  return (
      <div className="flex w-3/4 mx-auto my-8 small:my-16 large:my-28 justify-between font-Lato h-36 exsmall:h-48 small:h-60 medium:h-72 large:h-128">
          <div className="relative flex items-center group w-28 exsmall:w-44 small:w-56 medium:w-64 large:w-96 xllarge:w-128 rounded-md small:rounded-xl medium:rounded-2xl large:rounded-3xl overflow-hidden cursor-pointer ">
              <span className='absolute  bg-black opacity-70 w-full h-full z-10' />
              <img className='object-cover  scale-150 group-hover:scale-100 transition-all duration-500 ease-out ' src={imgImpress1} alt="impress1" />

              <div className="absolute bottom-0 w-full mb-3 exsmall:mb-5 large:mb-10 bg-transparent text-center z-20 ">
                  <div className="exsmall:mb-4 medium:mb-10 large:mb-16 w-24 exsmall:w-32 small:w-44 large:w-72 mx-auto" >
                    <h1 className='text-white text-suxs exsmall:text-xs small:text-sm medium:text-base large:text-2xl large:my-3'>Gabung Kelas</h1>
                    <p className='text-white text-suxs exsmall:text-exsm small:text-sm large:text-xl'>Begabung untuk menambah ilmu dan skill</p>
                  </div>
                  <a className='text-suxs exsmall:text-exsm small:text-sm large:text-base px-2 py-1 small:px-3 large:px-5 large:py-3 bg-white text-blue-one rounded-sm medium:rounded-md large:rounded-lg hover:bg-gray-300' href="#">Gabung Kelas</a>
              </div>
          </div>

          

          <div className="relative flex items-center group w-28 exsmall:w-44 small:w-56 medium:w-64 large:w-96 xllarge:w-128 rounded-md small:rounded-xl medium:rounded-2xl large:rounded-3xl overflow-hidden cursor-pointer ">
              <span className='absolute  bg-black opacity-70 w-full h-full z-10' />
              <img className='object-cover  scale-150 group-hover:scale-100 transition-all duration-500 ease-out ' src={imgImpress1} alt="impress1" />

              <div className="absolute bottom-0 w-full mb-3 exsmall:mb-5 large:mb-10 bg-transparent text-center z-20 ">
                  <div className="exsmall:mb-4 medium:mb-10 large:mb-16 w-24 exsmall:w-32 small:w-44 large:w-72 mx-auto" >
                    <h1 className='text-white text-suxs exsmall:text-xs small:text-sm medium:text-base large:text-2xl large:my-3'>Mencari Speaker</h1>
                    <p className='text-white text-suxs exsmall:text-exsm small:text-sm large:text-xl'>Bagikan pengalaman dan skill kamu bersama kami</p>
                  </div>
                  <a className='text-suxs exsmall:text-exsm small:text-sm large:text-base px-2 py-1 small:px-3 large:px-5 large:py-3 bg-white text-blue-one rounded-sm medium:rounded-md large:rounded-lg hover:bg-gray-300' href="#">Gabung Speaker</a>
              </div>
          </div>
      </div>
    )
}

export default Impress;
