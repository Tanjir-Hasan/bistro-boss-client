import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Collection = () => {
    return (

        <section>
            <SectionTitle
                subHeading={"---From 11:00am to 10:00pm---"}
                heading={"ORDER ONLINE"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper w-9/12"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <p className='text-center font-[Cinzel] text-3xl text-white uppercase -mt-14'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <p className='text-center font-[Cinzel] text-3xl text-white uppercase -mt-14'>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <p className='text-center font-[Cinzel] text-3xl text-white uppercase -mt-14'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <p className='text-center font-[Cinzel] text-3xl text-white uppercase -mt-14'>Deserts</p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Collection;