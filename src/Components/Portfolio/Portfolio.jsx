import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import CuPedia from '../../img/cupedia.png'
import Delivery from '../../img/delivery.png'
import Login from '../../img/login.png'
import Tracker from '../../img/tracker.png'
import'swiper/css'
import {themeContext} from '../../Context'
import { useContext } from "react";


export const Portfolio = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="portfolio" id='Portfolio'>
        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={CuPedia} alt='img'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Login} alt='img'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Tracker} alt='img'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Delivery} alt='img'/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
