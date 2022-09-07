import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import Netflix from "../../img/netflix.png";
import Krypt from "../../img/krypt.png";

import DeliFast from "../../img/delifast.png";

import Nft from "../../img/nft.png";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Pagination } from "swiper";

export const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>
      
      <Swiper
        autoplay={{ delay: 2000 }}
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://krypt-chirayu.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Krypt} alt="img" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://pronef.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Nft} alt="img" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://deli-fast.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={DeliFast} alt="img" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://netflix-clone-three-phi.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Netflix} alt="img" />
          </a>
        </SwiperSlide>
  
      </Swiper>
    </div>
  );
};
