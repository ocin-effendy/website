import React, { useState } from "react";

import ButtonSlider from "../../component/ButtonSlider";
import Class from "../../component/Card/Class";
import { HiOutlinePresentationChartLine, HiOutlineFolderOpen } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { MdLaptopMac } from "react-icons/md";

function MhysaClassContent({ data, lastNumber, email }) {
  const [isProgram, setIsProgram] = useState(false);
  let d = 0,
    p = 0,
    m = 0;

  const initialState = {
    value: 1,
    countFirst: -1,
    countLast: 9,
    title: "All Class",
    number: lastNumber,
  };

  const [state, setstate] = useState(initialState);

  const handleNext = () => {
    if (state.value < state.number) {
      setstate({
        value: state.value + 1,
        countFirst: state.countFirst + 9,
        countLast: state.countLast + 9,
        title: state.title,
        number: state.number,
      });
    }
  };
  const handlePrev = () => {
    if (state.value > 1) {
      setstate({
        value: state.value - 1,
        countFirst: state.countFirst - 9,
        countLast: state.countLast - 9,
        title: state.title,
        number: state.number,
      });
    }
  };

  const changeTitle = (e) => {
    let amountData = 0;
    if (e.target.name === "Design") amountData = d;
    else if (e.target.name === "Programing") amountData = p;
    else if (e.target.name === "Marketing") amountData = m;
    else amountData = data.allClass.length;
    const countData = Math.ceil(amountData / 9);
    setstate({
      value: 1,
      countFirst: -1,
      countLast: 9,
      title: e.target.name,
      number: countData,
    });
    setIsProgram(false)
  };

  const returnCard = (e, i) => {
    return (
      <div className="allCard" key={`class-${i}`}>
        <Class data={e} key={`class-${i}`} email={email}/>
      </div>
    );
  };

  return (
    <div className="w-11/12 sm:w-4/5 mx-auto my-10 md:my-20">
      <div className="flex justify-between items-center">
        <div className="relative inline-block py-3 md:p-0 z-0">
          <button
            onClick={() => setIsProgram(!isProgram)}
            className="relative border border-blue-one rounded-md z-10 flex items-center p-1 md:p-2 text-sm text-blue-one "
            type="submit"
          >
            <span>{state.title}</span>
            <div className="relative">
              <svg className="w-5 h-5 absolute"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path className={`${!isProgram ? "block" : "hidden"}`}
                  d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path className={`${isProgram ? "block" : "hidden"}`}
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>

          <div className={`${ isProgram ? "block" : "hidden"} absolute z-20 w-40 py-2 mt-1 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800 px-1`}>
            <button
              className="flex items-center w-full z-50  py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-300 border-indigo-900"
              onClick={changeTitle}
              name="All Class"
            >
               < HiOutlineFolderOpen className="w-5 h-5 mr-1" />
              All Class
            </button>
            <button
              className="flex items-center w-full  py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-300 border-indigo-900"
              onClick={changeTitle}
              name="Design"
            >
              < FiEdit  className="w-5 h-5 mr-1" />
              Design
            </button>
            <button
              className="flex items-center w-full  py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-300 border-indigo-900"
              onClick={changeTitle}
              name="Programing"
            >
              < MdLaptopMac className="w-5 h-5 mr-1" />
              Pemograman
            </button>

            <button
              className="flex items-center w-full  py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-300 border-indigo-900"
              onClick={changeTitle}
              name="Marketing"
            >
              < HiOutlinePresentationChartLine className="w-5 h-5 mr-1" />
          
              Marketing
            </button>
          </div>
        </div>

        <ButtonSlider
          onClick1={handleNext}
          onClick2={handlePrev}
          value={state.value}
        />
      </div>

      <div className="flex flex-wrap justify-evenly ">
        {data.allClass.map((e, i) => {
          if (e.kind === "Design") d += 1;
          else if (e.kind === "Programing") p += 1;
          else if (e.kind === "Marketing") m += 1;

          if (state.title === "All Class") {
            if (i > state.countFirst && i < state.countLast) {
              return returnCard(e, i);
            }
          } else if (state.title === e.kind) {
            if ( e.kind === "Design" && i - (p + m) > state.countFirst &&i - (p + m) < state.countLast) {
              return returnCard(e, i);
            } else if (e.kind === "Programing" && i - (d + m) > state.countFirst && i - (d + m) < state.countLast) {
              return returnCard(e, i);
            } else if (e.kind === "Marketing" && i - (p + d) > state.countFirst && i - (p + d) < state.countLast) {
              return returnCard(e, i);
            }
          }
          
        })}
      </div>
    </div>
  );
}

export default MhysaClassContent;
