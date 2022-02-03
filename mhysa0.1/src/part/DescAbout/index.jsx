import React, { useState }  from 'react';
import ButtonSlider from '../../component/ButtonSlider';

function DescAbout({data}) {
    const initialState = {
        value: 1,
        status: 'active',
    }

    const [state, setstate] = useState(initialState);

    const handleNext = () => {
        if (state.value < 3) {
            setstate({
                status: 'active',
                value: state.value + 1

            })

        }
    }

    const handlePrev = () => {
        if (state.value > 1) {
            setstate({
                status: 'active',
                value: state.value - 1

            })

        }

    }

    const handleListChange = (i) => {
        setstate({
            status: 'active',
            value: i

        })
    }
  return (
    <div className="my-12 exsmall:my-16 small:my-24 medium:my-32 font-Lato ">

        <div className="w-11/12 large:w-4/5 mx-auto">
            <div className="relative w-full h-36 exsmall:h-52 small:h-64 medium:h-80 large:h-128">
                {
                    data.description.map((e, i) => {
                        return (
                            <div className="absolute flex justify-between" key={`about-${i}`}>
                                <div className={`${state.value === i + 1 ? 'opacity-100' : '' } w-1/2 h-36 exsmall:h-52 small:h-64 medium:h-80 large:h-128 opacity-0 transition-all duration-500 ease`}>
                                    <img className='w-full h-full object-cover' src={e.imageUrl} alt="aboutImg" />
                                </div>
                                <div className={`${state.value === i + 1 ? 'opacity-100' : ''} w-1/2 px-2 exsmall:px-5 medium:px-10 large:px-16 text-blue-one opacity-0 transition-all duration-1000 ease`}>
                                    <h1 className='font-bold mb-2 exsmall:mb-3 large:mb-12 text-exsm exsmall:text-exsm small:text-sm medium:text-xl large:text-2xl'>{e.title}</h1>
                                    <p className='text-suxs exsmall:text-exsm small:text-xs medium:text-sm large:text-lg '>{e.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
                
    
                <div className="absolute w-1/2 flex justify-between items-center bottom-0 right-0 px-2 exsmall:px-5 medium:px-10 large:px-16">
                    <ButtonSlider onClick1={handleNext} onClick2={handlePrev} value={state.value}/>
                    <a className='px-2 py-1 medium:px-3 h-full large:py-2 text-blue-one font-semibold bg-orange-200 rounded-sm large:rounded-md text-xxxs exsmall:text-suxs medium:text-sm large:text-base ' href="#">View All Class</a>
                </div>
            </div>

            <div className="flex justify-between my-5 small:my-10 large:my-20">
            {
                    data.description.map((e, i) => {
                        return (
                            <div
                                className="w-24 h-16 exsmall:w-36 exsmall:h-24 small:w-48 small:h-36 medium:w-60 medium:h-44 large:w-80 large:h-56 relative cursor-pointer active:border-2 border-white"
                                key={`list-about${i}`}
                                onClick={() => handleListChange(i + 1)} >
                                <img className='w-full h-full object-cover rounded-sm  small:rounded-xl' src={e.imageUrl} alt="about" />
                                <div className="w-full bg-blue-one p-1 medium:py-2 small:px-4 rounded-b-sm small:rounded-b-xl absolute bottom-0">
                                    <p className='m-0 text-xxxs exsmall:text-exsm small:text-xs medium:text-sm large:text-xs text-white'>{e.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
        
        

    </div >
  )
}

export default DescAbout;
