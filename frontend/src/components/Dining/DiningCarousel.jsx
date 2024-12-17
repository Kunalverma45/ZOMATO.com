import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import { Navigation } from 'swiper/modules'; // Correct import for Navigation from 'swiper/modules'

const DeliveryCarousel = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true} // Enable navigation
            modules={[Navigation]} // Specify Navigation module
        >
            {/* Add SwiperSlide items here */}
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    );
};

export default DeliveryCarousel;
