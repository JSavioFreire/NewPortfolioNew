import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App(props) {
  return (
    <>
      <Swiper
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
