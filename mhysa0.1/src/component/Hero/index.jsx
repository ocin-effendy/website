import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import hero1 from "../../asset/image/hero1.jpg";
import hero2 from "../../asset/image/hero2.jpg";
import hero3 from "../../asset/image/hero1.jpg";
import 'swiper/css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, {Autoplay, Pagination,Navigation} from 'swiper';
  
SwiperCore.use([Autoplay,Pagination,Navigation]);

function Hero() {
  return (
    <div className="block w-4/5 mx-auto my-5">
                
        <Swiper autoplay={{"delay": 3000,"disableOnInteraction": false}} slidesPerView={1} 
        spaceBetween={30} loop={true} pagination={{ "clickable": true}}  className="mySwiper"> 
        
            <SwiperSlide>
                <img src={hero1} alt="herp1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hero2} alt="herp2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hero3} alt="herp3" />
            </SwiperSlide>
        </Swiper>


    </div>

  )
}

export default Hero;
