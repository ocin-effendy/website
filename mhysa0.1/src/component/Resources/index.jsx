import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import Class from '../Card/Class';
import dataClass from '../../JSON/class.json';
import { BiChevronRight } from "react-icons/bi";
import { useSelector } from 'react-redux';
import materi_blue from '../../asset/image/materi_blue.svg';
import materi_yellow from '../../asset/image/materi_yellow.svg';
import calendar_blue from '../../asset/image/calendar_blue.svg';
import calendar_yellow from '../../asset/image/calendar_yellow.svg';



function Resources({email, pathName}) {
  
  const [state, setState] = useState({active:'materi'});
  const acces = useSelector((state) => state.acces);
  const dispatch = useDispatch();

  const checked = (e) => {
    setState({
      active: e
    });
  }
  return (
   
    <div className='px-4 my-10 lg:px-16 lg:w-2/3 mt-3'>
      <div className="flex items-center">
        <h1 className={acces && 'text-gray-400 cursor-pointer'} onClick={() => dispatch({type:'ACCES', value:''})}>Materi Kelas</h1>
        {acces && <BiChevronRight />}
        {
          dataClass.Class.map((e,i) => {
            if(e._id === acces) return <h1>{e.type}</h1>
              
          })
        }
      </div>

      {
        acces !== '' ? (
          <div className="flex flex-col justify-between lg:h-128">
            {
              dataClass.Class.map((e,i) => {
                if(e._id === acces){
                  return (
                    <>
                      <p>{e.desc}</p>
                      <div className="mt-5">
                        <div className="flex ">
                          <button className={`${state.active === 'materi' ? 'border-t border-x text-yellow-300' : ''} flex items-center py-1 px-5  border-blue-one`} onClick={() => checked('materi')}><img className='mr-1' src={state.active === 'materi' ? materi_yellow : materi_blue} alt="icon" />Materi</button>
                          <button className={`${state.active === 'test' ? 'border-t border-x text-yellow-300' : ''} flex items-center py-1 px-5  border-blue-one`} onClick={() => checked('test')}><img className='mr-1' src={state.active === 'test' ? calendar_yellow : calendar_blue} alt="icon" />Post Test</button>
                        </div>
                        <textarea className='w-full h-52 border border-blue-one outline-none px-10 py-5' disabled name="materi" id="materi" value={state.active === 'materi' ?  e.materi : 'Isi sesuai content'} />
                      </div>
                    </>
                  )
                }
              })
            }
          </div>
        ) : 
        (
          <div className="flex flex-wrap">
            {
              dataClass.Class.map((e,i) => {
                return <Class data={e} key={`exam-${i}`} email={email} pathName={pathName} kind={'resources'}/>
            
              })
            }
          </div>
        )
      }


      
      
    </div>
  )
}




export default Resources;