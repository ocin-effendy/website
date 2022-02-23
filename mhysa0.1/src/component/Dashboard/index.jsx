import React from 'react';
import Class from '../Card/Class';
import dataAllCard from '../../JSON/allCard.json';
import dataClass from '../../JSON/class.json';



function Dashboard({email, pathName}) {
  return (
    <div className="md:flex lg:w-9/12">
        <div className="flex flex-col lg:w-4/5 lg:px-16 my-10 md:my-0 lg:mt-3">
            <div className="">
                <div className="flex justify-between text-blue-one px-3 md:px-0">
                    <h1>Kelas Yang Diambil</h1>
                    <p>See All</p>
                </div>
                <div className="flex flex-wrap justify-evenly md:justify-between">
                    {
                        dataClass.Class.map((e,i) => {
                            return < Class data={e} key={`exam-${i}`} email={email} pathName={pathName} kind={'dashboard'} />
                        })
                    }
                </div>

            </div>
            <div className="mt-5">
                <div className="flex justify-between text-blue-one px-3 lg:px-0">
                    <h1>Speaker Yang Dipesan</h1>
                    <p>See All</p>
                </div>
                <div className="flex flex-wrap justify-evenly md:justify-between">
                    {/* <Speaker data={dataAllCard.allSpeaker[0]} key={`exam-1`} email={email}/>
                    <Speaker data={dataAllCard.allSpeaker[1]} key={`exam-2`} email={email}/>
                    <Speaker data={dataAllCard.allSpeaker[2]} key={`exam-3`} email={email}/> */}
                    {
                        dataClass.Class.map((e,i) => {
                            return < Class data={e} key={`exam-${i}`} email={email} pathName={pathName} kind={'dashboard'} />
                        })
                    }
                </div>
            </div>

        </div>

        <div className="px-5 hidden md:block lg:my-10">
            <div className="border border-blue-one rounded-xl px-5 py-4">
                <div className="w-36 h-28 mx-auto rounded-xl overflow-hidden">
                    <img className='object-cover' src="/image/mentor.jpg" alt="mentor" />
                </div>
                <div className="text-sm flex flex-col my-3">
                    <label htmlFor="name">name</label>
                    <input className='outline-none bg-transparent border-b border-blue-one' type="text" id='name' />
                    <label className='mt-2' htmlFor="email">email</label>
                    <input className='outline-none bg-transparent border-b border-blue-one' type="text" id='email' />
                </div>
                <div className="text-center mt-10">
                    <button className=' py-2 px-4 bg-blue-one text-white rounded-lg'>Ubah Profil</button>
                </div>
            </div>
            <h1 className='text-center my-5'>Reminder</h1>
            <div className="rounded-xl bg-blue-one text-center text-white py-5 px-5">
                <h1 className='text-sm mb-3' >Pemrograman</h1>
                <div className="w-3/4 mx-auto">
                    <p className='text-xs'>Kelas akan berlangsung 3 hari lagi</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard