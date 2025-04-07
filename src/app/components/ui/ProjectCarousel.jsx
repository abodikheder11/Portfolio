"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectCarousel({ images }) {
  return (
    <div className="w-[250px] md:w-[200px] mx-auto mt-4">
  <Swiper
    modules={[Navigation]}
    navigation
    spaceBetween={10}
    slidesPerView={1}
    className="rounded-xl overflow-hidden"
  >
    {images?.map((img, index) => (
      <SwiperSlide key={index}>
        <div className="h-[400px] md:h-[445px] flex items-center justify-center bg-zinc-100 rounded-lg overflow-hidden">
          <img
            src={img}
            alt={`Project slide ${index + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
}
