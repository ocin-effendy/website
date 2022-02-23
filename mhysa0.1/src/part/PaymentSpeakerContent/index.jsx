import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import halfCircle from '../../asset/image/halfCircle1.svg';
import star from '../../asset/image/icon_star.svg';
import dataAllCard from '../../JSON/allCard.json';
import icon_calender from '../../asset/image/icon_yellowCalender.svg';
import icon_time from '../../asset/image/icon_yellowTime.svg';
import icon_arrowLeft from '../../asset/image/arrowLeft.svg'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { data } from 'autoprefixer';

function PaymentSpeakerContent() {
  const {id} = useParams();

  const [clickTime, setClickTime] = useState({one:false, two:false});
  
  const time1 = "09:00-12:00 WIB";
  const time2 = "19:00-22:00 WIB";
    const initialState = {
        date: new Date, time: '', event: '', desc: '', topic: '',
        result: '', scedule: '', otherEvent: '', input: ''
    }
    const [state, setstate] = useState(initialState);

    const handleState = (type, newValue, string) => {
      if (type === 'date') {
          setstate({
              ...state,
              date: newValue
          })
      } else if (type === 'time') {
          setstate({
              ...state,
              time: newValue
          })
      } else if (type === 'desc') {
          setstate({
              ...state,
              desc: newValue
          })
      } else if (type === 'topic') {
          setstate({
              ...state,
              topic: newValue
          })
      } else if (type === 'result') {
          setstate({
              ...state,
              result: string,
              scedule: newValue
          })
      } else if (type === 'other') {
          setstate({
              ...state,
              otherEvent: newValue
          })
      }
  }

  const handleDate = (date) => {
      handleState('date', date);
      console.log('ini merupakan date : ' + state.date);

  }

  const handleTime = (e) => {
      if (e.target.id === 'evening') {
          setClickTime({
            one:false,
            two:true
          });
          handleState('time', time2);
          console.log('apakah 19:00-22:00 WIB benar : ' + time2);
      } else if (e.target.id === 'morning') {
          setClickTime({
            one:true,
            two:false
          });
          handleState('time', time1);
          console.log('apakah 09:00-12:00 WIB benar : ' + state.time);


      }
  }

  const handleEvent = (e) => {
      let parent = e.target.parentElement;
      let child = parent.childNodes;
      const event = e.target.id;
      child.forEach(e => {
          e.className = 'mt-2 mr-2 px-3 py-1 large:mr-3  medium:px-6 large:px-14 border border-indigo-900 rounded-md hover:cursor-pointer';
      });
      if (event === 'Lain-lain') {
          setstate({
              date: state.date,
              time: state.time,
              event: event,
              desc: state.desc,
              topic: state.topic,
              result: state.result,
              scedule: state.scedule,
              otherEvent: state.otherEvent,
              input: 'off',
          })

      } else {
          setstate({
              date: state.date,
              time: state.time,
              event: event,
              desc: state.desc,
              topic: state.topic,
              result: state.result,
              scedule: state.scedule,
              otherEvent: state.otherEvent,
              input: '',
          })
      }

      e.target.className = 'mt-2 mr-2 px-3 py-1 large:mr-3  medium:px-6 large:px-14 border border-indigo-900 rounded-md hover:cursor-pointer bg-blue-one text-white';
  }

  const handleText = (e) => {
    if (e.target.id === 'desc') handleState('desc', e.target.value)
    else if (e.target.id === 'topic') handleState('topic', e.target.value);
  }


  const handleNext = () => {
    const dateFix = `${state.date.toLocaleString('default', { weekday: 'long' })}, ${state.date.getDate()} 
    ${state.date.toLocaleString('default', { month: 'long' })} ${state.date.getFullYear()}`
    if (state.time !== '' && state.event !== '' && state.desc !== '' && state.topic !== '') {
      if (state.event !== 'Lain-lain') {
        handleState('result', dateFix, 'result');
      } else {
        setstate({
          date: state.date,
          time: state.time,
          event: state.otherEvent,
          desc: state.desc,
          topic: state.topic,
          result: 'result',
          scedule: dateFix,
          otherEvent: state.otherEvent,
          input: state.input,
          })
        }
    } else {
      alert('Lengkapi Form Terlebih Dahulu!')
    }
  }

  const handleBack = () => {
    handleState('result', state.scedule, '')
  }

  const handleOtherEvent = (e) => {
    console.log('ini eventchange', e.target.value);
    handleState('other', e.target.value)
  }
  return (
      <div >
          {
            dataAllCard.allSpeaker.map((e,i) => {
              if(e._id === id){
                return (
                  <div className="w-4/5 mx-auto my-16 medium:my-20 large:my-32" key={`payment${i}`}>
                    <div className="w-fit mx-auto bg-pink-100 rounded-xl my-10 medium:w-3/5 ">
                      <div className="flex justify-center relative -translate-y-10 large:-translate-y-16">
                        <img className='w-16 h-16 medium:w-20 medium:h-20 large:w-28 large:h-28 ' src={halfCircle} alt="halfCircle" />
                        <img className='w-24 h-24 rounded-full mx-6 medium:w-28 medium:h-28 large:w-40 large:h-40' src="/image/mentor.jpg" alt="mentor" />
                        <img className='w-16 h-16 medium:w-20 medium:h-20 large:w-28 large:h-28' src={halfCircle} alt="halfCircle" />
                      </div>
                      <div className="text-center -translate-y-8 px-3 small:px-10 large:-translate-y-12">
                        <h1 className='medium:text-xl large:text-3xl'>{e.name}</h1>
                        <h1 className='medium:text-base large:text-xl'>{e.position}</h1>
                        <p className='text-xs my-5 medium:text-sm '>{e.bio}</p>
                        <div className="flex w-fit mx-auto">
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                      </div>
                      </div>
                    </div>

                    {
                      state.result=== '' ? (
                          <div className="">
                          <div className="flex flex-col medium:flex-row items-center justify-between">
                            <div className="w-full medium:w-1/2 medium:mr-3">
                              <label className='text-sm small:text-lg large:text-xl' htmlFor="date">Pilih Tanggal</label>
                              <DatePicker
                                name="date" id="date"
                                className="w-full py-2 px-4 text-xs border border-indigo-900 rounded-lg outline-none small:text-sm large:text-base"
                                selected={state.date}
                                onChange={(date) => handleDate(date)}
                                dateFormat="EEEE, dd MMMM yyyy"
                              />
                            </div>
            
                              <div className="mt-2 w-full medium:w-1/2 large:w-2/5 medium:m-0">
                                <label className='text-sm small:text-lg large:text-xl' htmlFor="time">Pilih Waktu</label>
                                <div className="flex justify-evenly medium:justify-start text-xs text-center ">
                                  <span className={`${clickTime.one ? 'bg-blue-one text-white' : ''} hover:cursor-pointer border border-indigo-900 py-2 px-4 medium:px-6 rounded-lg small:text-sm medium:mr-5 large:text-base`} onClick={handleTime} id="morning">09:00-12:00 WIB</span>
                                  <span className={`${clickTime.two ? 'bg-blue-one text-white' : ''} hover:cursor-pointer border border-indigo-900 py-2 px-4 medium:px-6 rounded-lg small:text-sm medium:mr-5 large:text-base`} onClick={handleTime} id="evening">19:00-22:00 WIB</span>
                                </div>
                              </div>
                          </div>
            
                          <div className="mt-2 medium:mt-8 large:mt-12">
                            <label className='text-sm small:text-lg large:text-xl' htmlFor="">Pilih Bentuk Acara</label>
                            <p className='mt-1 text-exsm small:text-sm large:text-base medium:mt-3'>Butuh pembicara mengisi:</p>
                            <div className="flex flex-wrap justify-center medium:justify-start text-exsm text-center small:text-sm large:text-lg">
                              <span onClick={handleEvent} className="mt-2 mr-2 px-3 py-1 large:mr-3  medium:px-6 large:px-14 border border-indigo-900 rounded-md hover:cursor-pointer" id="Webinar">Webinar</span>
                              <span onClick={handleEvent} className="mt-2 mr-2 px-3 py-1 large:mr-3  medium:px-6 large:px-14 border border-indigo-900 rounded-md hover:cursor-pointer" id="Talkshow" >Talkshow</span>
                              <span onClick={handleEvent} className="mt-2 mr-2 px-3 py-1 large:mr-3  medium:px-6 large:px-14 border border-indigo-900 rounded-md hover:cursor-pointer" id="Moderator" >Moderator</span>
                              <span onClick={handleEvent} className="mt-2 mr-2 px-3 py-1 large:mr-3  medium:px-6 large:px-14 border border-indigo-900 rounded-md hover:cursor-pointer" id="Workshops" >Workshops</span>
                              <span onClick={handleEvent} className="mt-2 mr-2 px-3 py-1 large:mr-3  medium:px-6 large:px-14 border border-indigo-900 rounded-md hover:cursor-pointer" id="Coference" >Coference</span>
                              <span onClick={handleEvent} className="mt-2 mr-2 px-3 py-1 large:mr-3  medium:px-6 large:px-14 border border-indigo-900 rounded-md hover:cursor-pointer" id="Lain-lain" >Lain-lain</span>
                              {
                                state.input === '' ?
                                  (
                                    <input className='mt-2 mr-2 px-3 py-1 border border-indigo-900 rounded-md hover:cursor-pointer' placeholder="Click Lain-lain" disabled />
                                  ) : (
                                     <input className='mt-2 mr-2 px-3 py-1 large:mr-3  border border-indigo-900 rounded-md hover:cursor-pointer' type="text" placeholder="Isi disini" onChange={handleOtherEvent} />
                                  )
                              }
                            </div>
                          </div>
            
                          <div className="mt-2 medium:mt-8 large:mt-12">
                            <label className='text-sm small:text-lg large:text-xl' htmlFor="">Deskripsi Acara</label>
                            <div className="flex flex-col items-center medium:flex-row medium:justify-between">
                                <div className="flex flex-col my-2 w-full medium:mx-5">
                                  <label className='text-exsm small:text-sm large:text-base' htmlFor="desc">Detail acara yang akan diisi :</label>
                                  <textarea name="desc" id="desc"  rows="8"
                                  className='border border-indigo-900 outline-none p-2 rounded-lg'
                                    placeholder="Isi disini"
                                    onChange={handleText}
                                    value={state.desc} />
                                </div>
                                <div className="flex flex-col w-full medium:mx-5">
                                  <label className='text-exsm small:text-sm large:text-base' htmlFor="topic">Topik yang ingin dibahas :</label>
                                  <textarea name="topic" id="topic"  rows="8"
                                  className='border border-indigo-900 outline-none p-2 rounded-lg'
                                    placeholder="Isi disini"
                                    onChange={handleText}
                                    value={state.topic} />
                                </div>
                              </div>
                          </div>

                          <div className="w-fit mx-auto mt-7">
                            <button className='bg-blue-one text-white py-1 px-5 text-sm rounded-md medium:text-lg medium:px-8' onClick={handleNext}>Lanjutkan</button>
                          </div>
                      </div>
                      ) :(
                        <div className="m-4/5 mx-auto my-28 rounded-md shadow-xl py-3 px-3 text-blue-one medium:w-1/2 medium:rounded-xl medium:py-5 medium:px-8 large:px-20">
                          <h1 className='font-semibold'>Konfirmasi Bookingan Kamu</h1>
                          <h1 className='mt-2 medium:mt-5'>Sesi <b>{state.event}</b> dengan <b>{e.name}</b> </h1>
                          <p className='text-xs'>Fee Pembicara <b>Rp.{e.price}</b></p>
                          <div className="border-b border-indigo-900 py-3 medium:flex medium:justify-evenly">
                            <span className='flex items-center medium:text-xs large:text-sm '><img src={icon_calender} alt="icon" />{state.scedule}</span>
                            <span className='flex items-center medium:text-xs large:text-sm '><img src={icon_time} alt="icon" />{state.time}</span>
                          </div>

                          <h1 className='my-3'>Deskripsi Acara</h1>
                          <div className="p-2 border border-indigo-900 text-xs h-44 medium:h-48 large:h-52">{state.desc}</div>

                          <div className="text-center">
                            <button className="w-full my-3 py-2 text-xs bg-blue-one text-white rounded-md" >Konfirmasi Booking</button>
                            <button 
                              onClick={handleBack}
                              className="w-full text-xs text-blue-one rounded-md flex items-center justify-center" >
                              <img src={icon_arrowLeft} alt="left" />
                              Ubah tanggal dan waktu</button>
                          </div>

                          

                        </div>
                      )
                      
                    }

                    
      
                    
      
                  </div>
                )
              }
            })
          }
        

      </div>
      
  );
}

export default PaymentSpeakerContent;
