import React, {useState} from 'react';
import Speaker from "../../component/Card/Speaker"
import ButtonSlider from "../../component/ButtonSlider";
import { HiOutlinePresentationChartLine, HiOutlineFolderOpen } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { MdLaptopMac } from "react-icons/md";

function MhysaSpeakerContent({ data, lastNumber }) {
    const number = lastNumber;
   
    const initialState = {
      value: 1,
      countFirst: -1,
      countLast: 9
    };
  
    const [state, setstate] = useState(initialState);
  
    const handleNext = () => {
      if (state.value < number) {
        setstate({
          value: state.value + 1,
          countFirst: state.countFirst + 9,
          countLast: state.countLast + 9
        });
      }
    };
    const handlePrev = () => {
      if (state.value > 1) {
        setstate({
          value: state.value - 1,
          countFirst: state.countFirst - 9,
          countLast: state.countLast - 9
        });
      }
    };
  
    
  
    const returnCard = (e, i) => {
      return (
        <div className="allSpeaker" key={`speaker-${i}`}>
          < Speaker data={e} key={`speaker-${i}`} />
        </div>
      );
    };
  
  return (
    <div className="w-11/12 sm:w-4/5 mx-auto my-10 md:my-20">
        <div className="flex justify-between items-center">
        <div className="relative inline-block py-3 md:p-0">
            <button
            className="relative border border-blue-one rounded-md z-10 flex items-center p-1 md:p-2 text-sm text-blue-one "
            type="submit"
            >
            <span>All Speakers</span>
            </button>
        </div>

        <ButtonSlider
            onClick1={handleNext}
            onClick2={handlePrev}
            value={state.value}
        />
        </div>

        <div className="flex flex-wrap justify-evenly ">
            {
                data.allSpeaker.map((e, i) => {
                    if (i > state.countFirst && i < state.countLast) {
                        return  returnCard(e, i);
                    }
                })
            }
        </div>
    </div>

  )
}

export default MhysaSpeakerContent;
