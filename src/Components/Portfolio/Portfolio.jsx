import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import CuPedia from "../../img/cupedia.png";
import Netflix from "../../img/netflix.png";
import Login from "../../img/login.png";
import Tracker from "../../img/tracker.png";
import Spotify from "../../img/spotify.png";
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
            href="netflix-clone-three-phi.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Netflix} alt="img" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="" target="_blank" rel="noreferrer">
            <img src={Spotify} alt="img" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="" target="_blank" rel="noreferrer">
            <img src={CuPedia} alt="img" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="" target="_blank" rel="noreferrer">
            <img src={Login} alt="img" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="" target="_blank" rel="noreferrer">
            <img src={Tracker} alt="img" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
