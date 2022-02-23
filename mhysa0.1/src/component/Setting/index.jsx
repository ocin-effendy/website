import React from 'react'

function Setting() {
  return (
    <div className='px-4 my-10 lg:px-16 lg:w-2/3 mt-3'>
      <div className="flex flex-col md:flex-row justify-center md:justify-between">
        <div className="w-full md:w-1/2 px-3">
          <div className="w-32 h-32 mx-auto">
            <img className='w-full h-full rounded-full' src="/image/mentor.jpg" alt="profile" />
          </div>
          <h1 className='text-center text-2xl'>Profile</h1>
          <div className="my-5 ">
            <label className='block' htmlFor="name">Full Name</label>
            <input className='w-full px-3 py-1 text-lg outline-none border  border-gray-300 rounded-lg' id='name' placeholder='Ex. Harry Style' type="text" />
          </div>
          <div className="my-5">
            <label className='block' htmlFor="number">Phone Number</label>
            <input className='w-full px-3 py-1 text-lg outline-none border  border-gray-300 rounded-lg' id='number' placeholder='Ex. +6288213xxxx' type="text" />
          </div>
          <div className="my-5">
            <label className='block' htmlFor="email">Email</label>
            <input className='w-full px-3 py-1 text-lg outline-none border  border-gray-300 rounded-lg' id='email' placeholder='Ex. name@example.com' type="text" />
          </div>

        </div>
        <div className="w-full md:w-1/2 mt-12 px-3">
            <h1 className='text-center text-2xl'>Account</h1>
            <div className="my-5">
              <label className='block' htmlFor="username">Username</label>
              <input className='w-full px-3 py-1 text-lg outline-none border  border-gray-300 rounded-lg' id='username' placeholder='Ex. Harry Style' type="text" />
            </div>
            <div className="my-5">
              <label className='block' htmlFor="old">Old Password</label>
              <input className='w-full px-3 py-1 text-lg outline-none border  border-gray-300 rounded-lg' id='old' placeholder='Ex. +6288213xxxx' type="text" />
            </div>
            <div className="my-5">
              <label className='block' htmlFor="new">New Password</label>
              <input className='w-full px-3 py-1 text-lg outline-none border  border-gray-300 rounded-lg' id='new' placeholder='Ex. name@example.com' type="text" />
            </div>
            <div className="my-5">
              <label className='block' htmlFor="confirm">Confirm Password</label>
              <input className='w-full px-3 py-1 text-lg outline-none border  border-gray-300 rounded-lg' id='confirm' placeholder='Ex. name@example.com' type="text" />
            </div>
        </div>
      </div>
      <div className="w-full text-center">
        <button className='bg-blue-one px-10 py-1 text-white text-base rounded-xl'>SAVE</button>

      </div>


    </div>
  )
}

export default Setting