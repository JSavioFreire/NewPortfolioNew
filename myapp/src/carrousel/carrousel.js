import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App(props) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={props.foto1}/></SwiperSlide>
        <SwiperSlide><img src={props.foto2}/></SwiperSlide>
        <SwiperSlide><img src={props.foto3}/></SwiperSlide>
        <SwiperSlide><img src={props.foto4}/></SwiperSlide>
        <SwiperSlide><img src={props.foto5}/></SwiperSlide>
      </Swiper>
    </>
  );
}
