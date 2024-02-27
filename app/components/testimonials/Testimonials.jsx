"use client"
import React from 'react'
import styles from './testimonials.module.css'
import {  Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
    return (
        <section className={StyleSheet.section}>
            <h2>Testimonials</h2>
            <p>Check out my clients and frinds say</p>

            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <div class="swiper-pagination"></div>
            </Swiper>
        </section>
    )
}

export default Testimonials