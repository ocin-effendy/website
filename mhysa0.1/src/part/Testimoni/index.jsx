import React, {useState} from 'react';
import bgTesti1 from "../../asset/image/img-bgTesti1.jpg";
import bgTesti2 from "../../asset/image/img-bgTesti2.jpg";
import icon_pick1 from "../../asset/image/icon_pick1.svg";
import icon_pick2 from "../../asset/image/icon_pick2.svg";
import arrowRight from "../../asset/image/arrowRight.svg";
import arrowLeft from "../../asset/image/arrowLeft.svg";


function Testimoni({data}) {
    const initialState = {
        className: 'active',
        count1: 0,
        count2: 0
    }
    const [state, setState] = useState(initialState)
    if (data.length === 0) return null;


    const moveSLiderAlumni = (i) => {
        setState({
            className: 'active',
            count1: i,
            count2: state.count2
        })
    }
    const moveSLiderPembicara = (i) => {
        setState({
            className: 'active',
            count1: state.count1,
            count2: i
        })
    }
  return (
    <div className="mb-12 lg:my-24 overflow-x-hidden">
        <h1 className='md:text-3xl font-Lato md:my-10 my-3 text-center '>Testimoni</h1>
        <div className="flex justify-center items-center">
            <div className="flex justify-between w-11/12 exsmall:w-4/5 mx-auto absolute">
                <div className="flex flex-col justify-center w-1/2 exsmall:w-1/4">
                    <img className='w-5 h-5 exsmall:w-8 exsmall:h-8 large:w-16 large:h-16' src={icon_pick1} alt="pick1" />
                    <h1 className='font-semibold text-exsm small:text-sm large:text-2xl'>Apa kata alumni setelah mengikuti kelas online</h1>
                    <img className='w-5 small:w-8 large:w-10 ' src={arrowRight} alt="arrowRight" />
                </div>
                <div className="relative w-3/5 h-28 exsmall:h-36 small:h-48 medium:h-56 large:h-96  bg-white rounded-lg small:rounded-xl large:rounded-large shadow-2xl shadow-gray-500" >
                    {
                        data.alumni.map((e, i) => {
                            if (e.title === "Kata Alumni") {
                                return (
                                    <div className={`${state.count1 === i ? 'opacity-100' : ''} flex flex-col justify-between h-full absolute py-1 exsmall:py-2 px-2 small:px-4 medium:px-5 large:px-10 large:py-6 opacity-0 transition-all duration-700 ease-out`} key={`alumni-${i}`}>
                                        <div>
                                            <h1 className='text-suxs exsmall:text-exsm small:text-xs medium:text-sm large:text-xl my-1 medium:my-2 large:my-5'>{e.title}</h1>
                                            <p className="text-suxs exsmall:text-suxs small:text-exsm large:text-base">{e.desc}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <img className='w-6 h-6 exsmall:w-8 exsmall:h-8 small:w-12 small:h-12 medium:w-14 medium:h-14 small:rounded-md  large:w-20 large:h-20 rounded-sm large:rounded-2xl' src={e.imageTesti} alt="mentor" />
                                            <div className="mx-1 small:mx-3 large:mx-5 text-xxxs exsmall:text-suxs small:text-exsm medium:text-xs large:text-base">
                                                <h5>{e.name}</h5>
                                                <p>{e.as}</p>
                                            </div>
                                        </div>
                                    </div>

                                    )
                                }

                            })
                        }
                   
                    
                    <div className="flex absolute right-0 bottom-0 p-2 exsmall:p-4 large:p-6 ">
                        {
                            data.alumni.map((e, i) => {
                                if (e.title === "Kata Alumni") {
                                    return <button
                                            key={`button-alumni-${i}`}
                                            onClick={() => moveSLiderAlumni(i)}
                                            className={`${state.count1 === i ? 'bg-blue-one' : ''} w-1 h-1 small:w-2 small:h-2 large:w-3 large:h-3 mx-1 medium:mx-2 rounded-full ring-1 ring-offset-1 ring-blue-one transition-all duration-500 ease-out`}
                                            />
                                }
                            })
                        }
                    </div>
                </div>

    
            </div>

            <div className="w-full flex justify-end">
                <img className='w-1/2' src={bgTesti1} alt="bgTesti1" />
            </div>
        </div>


        <div className="flex justify-center items-center">
            <div className="flex justify-between w-11/12 exsmall:w-4/5 mx-auto absolute">
                <div className="relative w-3/5 h-28 exsmall:h-36 small:h-48 medium:h-56 large:h-96 bg-white rounded-lg small:rounded-xl large:rounded-large shadow-2xl shadow-gray-500" >
                    {
                        data.pembicara.map((e, i) => {
                            if (e.title === "Kata Pembicara") {
                                return (
                                    <div className={`${state.count2 === i ? 'opacity-100' : ''} flex flex-col justify-between h-full absolute py-1 exsmall:py-2 px-2 small:px-4 medium:px-5 large:px-10 large:py-6 opacity-0 transition-all duration-700 ease-out`} key={`pembicara-${i}`}>
                                        <div>
                                            <h1 className='text-suxs exsmall:text-exsm small:text-xs medium:text-sm large:text-xl my-1 medium:my-2 large:my-5'>{e.title}</h1>
                                            <p className="text-suxs exsmall:text-suxs small:text-exsm large:text-base">{e.desc}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <img className='w-6 h-6 exsmall:w-8 exsmall:h-8 small:w-12 small:h-12 medium:w-14 medium:h-14 small:rounded-xl large:w-20 large:h-20 rounded-sm large:rounded-2xl' src={e.imageTesti} alt="mentor" />
                                            <div className="mx-1 small:mx-3 large:mx-5 text-xxxs exsmall:text-suxs small:text-exsm medium:text-xs large:text-base">
                                                <h5>{e.name}</h5>
                                                <p>{e.as}</p>
                                            </div>
                                        </div>
                                    </div>

                                    )
                                }

                            })
                        }
                   

                    <div className="flex absolute right-0 bottom-0 p-2 exsmall:p-4 large:p-6 ">
                        {
                            data.pembicara.map((e, i) => {
                                if (e.title === "Kata Pembicara") {
                                    return <button
                                            key={`button-pembicara-${i}`}
                                            onClick={() => moveSLiderPembicara(i)}
                                            className={`${state.count2 === i ? 'bg-blue-one' : ''} w-1 h-1 small:w-2 small:h-2 large:w-3 large:h-3 mx-1 medium:mx-2 rounded-full ring-1 ring-offset-1 ring-blue-one transition-all duration-500 ease-out`}
                                            />
                                }
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-col justify-center items-end text-right w-1/2 exsmall:w-1/4">
                    <img className='w-5 h-5 exsmall:w-8 exsmall:h-8 large:w-16 large:h-16' src={icon_pick2} alt="pick2" />
                    <h1 className='font-semibold text-exsm small:text-sm large:text-2xl'>Apa kata pembicara setelah mengisi workshop</h1>
                    <img className='w-5 small:w-8 large:w-10 ' src={arrowLeft} alt="arrowLeft" />
                </div>

    
            </div>

            <div className="w-full flex justify-start">
                <img className='w-1/2' src={bgTesti2} alt="bgTesti2" />
            </div>
        </div>



        





    </div>
  )
}

export default Testimoni;
