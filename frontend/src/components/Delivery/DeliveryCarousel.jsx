import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import { Navigation } from "swiper/modules"; // Correctly import Navigation from 'swiper/modules'

import DeliveryCategoryCard from "./DeliveryCategoryCard";

const DeliveryCarousel = () => {
    const categories = [
        {
            id: 1,
            image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
            title: "Chicken",
        },
        {
            id: 2,
            image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            title: "Pizza",
        },
        {
            id: 3,
            image: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
            title: "Biryani",
        },
        {
            id: 4,
            image: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
            title: "Rolls",
        },
        {
            id: 5,
            image: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
            title: "Burgers",
        },
        {
            id: 6,
            image: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
            title: "Thali",
        },
        {
            id: 7,
            image: "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
            title: "Chaat",
        },
        {
            id: 8,
            image: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
            title: "Paratha",
        },
        {
            id: 9,
            image: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
            title: "Momos",
        },
    ];

    const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
        modules: [Navigation], // Include Navigation in the modules array
        navigation: true, // Enable navigation
    };

    return (
        <>
            <h1 className="text-xl mt-4 md:mt-8 md:text-3xl md:font-semibold mb-5">
                Inspiration for your first order
            </h1>
            {/* Mobile and smaller screens */}
            <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center">
                {categories.map((food) => (
                    <DeliveryCategoryCard key={food.id} {...food} />
                ))}
            </div>
            {/* Large screens */}
            <div className="hidden lg:block">
                <Swiper {...slideConfig}>
                    {categories.map((food) => (
                        <SwiperSlide key={food.id}>
                            <DeliveryCategoryCard {...food} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default DeliveryCarousel;
