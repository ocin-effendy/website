import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import iconTime from "../../asset/image/icon_time.svg";
import iconMember from "../../asset/image/member_icon.svg";



function Class({data, email, pathName, kind}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = useState({pathName: pathName});

    const goPayment = (id) => {
        if (email !== '') navigate("/payment-class" + id);
        else dispatch({type: "ACTIVE", value: "active"});
    }

    const checkButton = () => {
        if(kind === 'dashboard') return <button className='bg-blue-one text-white text-xs py-px px-2 rounded-full md:text-sm md:px-5 md:py-1 active:bg-white active:text-blue-one'>Join Class</button>;
        else if(kind === 'resources') return <button onClick={() => dispatch({type:'ACCES', value:data._id})} className='bg-blue-one text-white text-xs py-px px-2 rounded-full md:text-sm md:px-5 md:py-1 active:bg-white active:text-blue-one'>Acces</button>
        else return <button className='bg-blue-one text-white text-xs py-px px-2 rounded-full md:text-sm md:px-5 md:py-1 active:bg-white active:text-blue-one'>Downloads</button>
    }

  return (
      <div className={`${state.pathName === '/myClass' ? 'md:w-32 lg:w-40 my-2 mr-3' : 'md:w-60 lg:w-80 my-5 lg:mx-5 lg:my-10'} flex flex-col justify-between w-24 sm:w-32  border border-indigo-900 overflow-hidden rounded-xl md:rounded-2xl shadow-sm cursor-pointer font-Lato `} 
       onClick={state.pathName === '/myClass' ? () =>'' : () =>goPayment(data._id)}>
            <div className="">
                <div className={`${state.pathName === '/myClass' ? 'md:h-16 lg:h-24' : 'md:h-40 lg:h-56 '} w-full h-16 sm:h-20 overflow-hidden`}>
                    <img className='object-cover h-full w-full' src={data.imageUrl} alt="card" />
                </div>
                <div className={`${state.pathName === '/myClass' ? 'md:px-1 md:my-1 lg:my-2' : 'md:px-6 md:my-2 lg:my-4'} px-2 py-1 md:py-0  text-blue-one `}>
                    <div className={`${state.pathName === '/myClass' ? 'md:text-xs' : 'md:text-sm'} flex flex-col md:flex-row justify-between text-exsm `} >
                        <span>{data.type}</span>
                        <span className='hidden md:block'>{data.date}</span>
                    </div>
                    <h2 className={`${state.pathName === '/myClass' ? 'md:text-sm md:font-bold' : 'md:text-base font-semibold'}  text-exsm  leading-3`} >{data.title}</h2>
                </div>

            </div>

          <div className={`${state.pathName === '/myClass' ? '' : 'lg:flex'} hidden bg-blue-one justify-evenly items-center mb-2 py-4`}>
              <div className="flex">
                  <img src={iconTime} alt="icon_time" />
                  <p className='text-white mx-1'>{data.time}</p>
              </div>
              <div className="flex">
                <img src={iconMember} alt="icon_time" />
                  <p className='text-white mx-1'>{data.members} Students</p>
              </div>
          </div>

          <div className={`${state.pathName === '/myClass' ? '' : 'md:flex'} hidden border-y border-indigo-900 mt-2`}>
              <div className="w-10 h-10  md:w-20 md:h-20">
                <img className='object-contain' src="/image/mentor.jpg" alt="mentor" />
              </div>
              <div className="py-1 md:py-3 px-3 text-blue-one text-xs md:text-base">
                  <h3>{data.nameMentor}</h3>
                  <p>{data.experienceJob}</p>
              </div>
          </div>
            {
                state.pathName === '/myClass' ? (
                    <div className="flex justify-center p-1 md:py-3 md:px-6 border-t border-indigo-900 md:border-0">
                       {
                           checkButton()
                       }

                    </div>
                ) : (
                    <div className="flex justify-end items-center p-1 md:py-3 md:px-6 border-t border-indigo-900 md:border-0">
                        <h1 className='text-blue-one md:font-semibold text-xs md:text-xl'>Rp.{data.price},-</h1>
                    </div>
                )
            }

          
      </div>
  )
}

export default Class;
