import React, {useState} from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import bgDetailSpeaker from '../../asset/image/bg-speaker-detail.jpg';
import iconInstagram from '../../asset/image/icon_instagram.svg';
import iconLinked from '../../asset/image/icon_linked.svg';
import iconEmail from '../../asset/image/icon_email.svg';
import { MdThumbUpOffAlt, MdCreate } from "react-icons/md";
import dataAllCard from '../../JSON/allCard.json';
import IconSkills from '../../component/IconSkills';


function DetailSpeakerContent() {
    const {id} = useParams();

    const initialState = {
        all: 'list-active',
        image: '',
        video: '',
        show: 'all'
    }

    const [state, setstate] = useState(initialState);

    const handleList = (e) => {
        if (e.target.id === 'all') setstate({ all: "list-active", image: '', video: '', show: 'all' })
        else if (e.target.id === 'image') setstate({ all: '', image: "list-active", video: '', show: 'image' })
        else setstate({ all: '', image: '', video: "list-active", show: 'video' })


    }
  return (
        <div className="w-full bg-gray-300">
            <div className="w-full ">
                <img src={bgDetailSpeaker} alt="bg" />
            </div>

            {
                dataAllCard.allSpeaker.map((e,i) => {
                    if(e._id === id){
                        return (
                            <div className="flex flex-col w-11/12 mx-auto medium:flex-row medium:my-5" key={`card${i}`}>
                                <div className="medium:relative medium:-translate-y-32 large:-translate-y-40 flex my-3 bg-white py-5 small:px-5 medium:flex-col medium:w-1/3 large:w-96 medium:px-2 medium:my-0 medium:mr-3 large:px-7">
                                    <div className="text-center w-2/5 medium:w-full ">
                                        <div className="w-fit mx-auto">
                                            <img className='rounded-full w-20 h-20 small:w-24 small:h-24 medium:w-32 medium:h-32 large:w-40 large:h-40' src="image/mentor.jpg" alt="mentorIMG" />
                                        </div>
                                        <h1 className='text-xs text-blue-one small:text-sm medium:text-lg large:text-2xl'>{e.name}</h1>
                                        <p className='text-exsm text-blue-one small:text-xs medium:text-base large:text-xl medium:mb-4'>{e.position}</p>
                                        <a className='bg-blue-one shadow-md medium:shadow-lg text-white text-suxs py-2 px-3 small:px-5 medium:py-3 rounded-full small:text-exsm medium:text-xs  large:text-base focus:border-blue-one focus:border ' href={`/payment-speaker${id}`}>BOOKING SPEAKER</a>
                                        <div className="flex flex-wrap items-start justify-evenly my-3 medium:mt-5">
                                            <span className='text-suxs flex items-center small:text-exsm large:text-base text-gray-500'><img className='w-3 h-3 mr-px small:w-4 small:h-4 large:w-5 large:h-5' src={iconInstagram} alt="icon" />{e.instagram}</span>
                                            <span className='text-suxs flex items-center small:text-exsm large:text-base text-gray-500'><img className='w-3 h-3 mr-px small:w-4 small:h-4 large:w-5 large:h-5' src={iconLinked} alt="icon" />{e.linked}</span>
                                            <span className='text-suxs flex items-center small:text-exsm large:text-base text-gray-500'><img className='w-3 h-3 mr-px small:w-4 small:h-4 large:w-5 large:h-5' src={iconEmail} alt="icon" />{e.email}</span>
                                        </div>
                                    </div>
                                    <div className="px-3 w-3/5 flex flex-col justify-center small:px-5 medium:w-full">
                                        <div className="flex flex-col">
                                            <div className="flex justify-between">
                                                <p className='text-exsm font-semibold small:text-xs medium:text-sm large:text-base text-blue-one'>Tersedia</p>
                                                <p className='text-exsm small:text-xs medium:text-sm large:text-base text-gray-500'>Online</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className='text-exsm font-semibold small:text-xs medium:text-sm large:text-base text-blue-one'>Tarif</p>
                                                <p className='text-exsm small:text-xs medium:text-sm large:text-base text-gray-500'>Rp.{e.price}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className='text-exsm font-semibold small:text-xs medium:text-sm large:text-base text-blue-one'>Bahasa</p>
                                                <p className='text-exsm small:text-xs medium:text-sm large:text-base text-gray-500'>{e.languages}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className='text-exsm font-semibold small:text-xs medium:text-sm large:text-base text-blue-one'>Speaker</p>
                                                <p className='text-exsm small:text-xs medium:text-sm large:text-base text-gray-500'>Ya</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className='text-exsm font-semibold small:text-xs medium:text-sm large:text-base text-blue-one'>bio</p>
                                            <p className='text-suxs small:text-exsm small:text-xs medium:text-sm large:text-base text-gray-500 text-blue-one'>{e.bio}</p>
                                        </div>

                                        <div className="hidden medium:flex w-fit mx-auto medium:mt-10 large:mt-20">
                                            {
                                                e.iconSkills.map((e, i) => {
                                                    return < IconSkills e={e} i={i} key={`icon-${i}`}/>
                                                })
                                            }

                                        </div>
                                        <div className="text-center mt-3 hidden medium:block">
                                            <p className='text-sm large:text-base text-blue-one'>{e.skills}</p>
                                        </div>

                                    </div>
                                </div>


                                <div className="medium:w-2/3 ">
                                    <div className="flex flex-col medium:flex-row">
                                        <div className="py-2 px-5 bg-white medium:w-3/5 medium:mr-2 medium:overflow-y-scroll medium:h-60 large:h-72">
                                            <ul className='flex text-xs'>
                                                <li className={`${state.all === 'list-active' ? "border-b-2 border-blue-one": "" } mx-1`}>
                                                    <button className='large:text-sm' onClick={handleList} id="all">Semua</button>
                                                </li>
                                                <li className={`${state.image === 'list-active' ? "border-b-2 border-blue-one": "" } mx-1`}>
                                                    <button className='large:text-sm' onClick={handleList} id="image">foto</button>
                                                </li>
                                                <li className={`${state.video === 'list-active' ? "border-b-2 border-blue-one": "" } mx-1`}>
                                                    <button className='large:text-sm' onClick={handleList} id="video">video</button>
                                                </li>
                                            </ul>

                                            <div className="flex flex-wrap mt-3 ">
                                                {
                                                    e.allPhoto.map((e,i) => {
                                                        if (e.type === state.show) {
                                                            return <img className='w-16 h-16 m-1 medium:w-20 medium:h-20 large:w-28 large:h-28' src={e.imageUrl} alt="skill" key={`img-${i}`}/>
                                                        } else if (state.show === 'all') {
                                                            return <img className='w-16 h-16 m-1 medium:w-20 medium:h-20 large:w-28 large:h-28' src={e.imageUrl} alt="skill" key={`img-${i}`}/>

                                                        }

                                                    })
                                                }
                                            
                                            </div>
                                        </div>

                                        <div className="p-5 bg-white mt-3 medium:my-0 medium:py-3 medium:w-2/5">
                                            <h1 className='medium:px-3'>Rekomendasi</h1>
                                            <div className="flex flex-col items-center exsmall:flex-row medium:flex-col exsmall:justify-evenly h-full medium:justify-center">
                                                <span className='flex items-center py-3 px-4  bg-gray-200 border border-gray-400 rounded-xl my-2 text-sm medium:text-xs large:text-sm'>< MdThumbUpOffAlt className='mr-2'/>Rekomendasikan {e.name}</span>
                                                <span className='flex items-center py-3 px-4  bg-gray-200 border border-gray-400 rounded-xl my-2 text-sm medium:text-xs large:text-sm '>< MdCreate className='mr-2'/>Tulis Testimoni Kamu</span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="p-5 bg-white mt-3">
                                        <h1 className='text-sm medium:text-base large:text-lg'>Alasan Memilih {e.name}</h1>
                                        <p className='text-exsm small:text-xs medium:text-sm large:text-base mt-3'>{e.strongPoint}</p>
                                    </div>

                                    <div className="bg-white my-3 p-5 ">
                                        <h1 className='text-sm medium:text-base large:text-lg'>keahlihan</h1>
                                        <div className="flex justify-around mt-3">
                                            <span className={`${e.job === 'Social Branding' ? 'bg-blue-one text-white' : ''} text-exsm p-2 border border-gray-400 rounded-md small:text-xs medium:text-sm large:text-base large:px-5`}>Social Branding</span>
                                            <span className={`${e.job === 'Design Website' ? 'bg-blue-one text-white' : ''} text-exsm p-2 border border-gray-400 rounded-md small:text-xs medium:text-sm large:text-base large:px-5`}>Design Website</span>
                                            <span className={`${e.job === 'Product Management' ? 'bg-blue-one text-white' : ''} text-exsm p-2 border border-gray-400 rounded-md small:text-xs medium:text-sm large:text-base large:px-5`}>Product Management</span>

                                        </div>
                                    </div>

                                    <div className="p-5 mb-10">
                                        <h1>Pembicara lainnya</h1>
                                        <div className="flex flex-wrap justify-between ">
                                            {
                                                dataAllCard.allSpeaker.map((n, i) => {
                                                    if (i < 5) {
                                                        if (n.name !== e.name) {

                                                            return (
                                                            
                                                                <div className="flex items-center mt-2 medium:mr-5" key={`pembicara${i}`}>
                                                                    <img className='w-10 h-10 rounded-full medium:w-16 medium:h-16 large:w-20 large:h-20' src={n.imageUrl} alt="fc" />
                                                                    <div className="ml-2">
                                                                        <p className='text-exsm font-semibold medium:text-xs large:text-sm'>{n.name}</p>
                                                                        <p className='text-suxs medium:text-xs large:text-sm'>{n.job}</p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    }

                                                })
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default DetailSpeakerContent;
