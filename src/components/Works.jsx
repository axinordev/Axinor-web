import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";

import work1 from "../assets/card.jpg";
import work2 from "../assets/card.jpg";
import work3 from "../assets/card.jpg";
import work4 from "../assets/card.jpg";

const works = [
  { image: work1, title: "Insurva | Web App", description: "Lorem ipsum dolor sit amet." },
  { image: work2, title: "Insurva | AI Bot", description: "Ut arcu nunc nulla diam at nulla." },
  { image: work3, title: "Insurva | Analytics", description: "Integer ipsum curabitur sit nulla posuere." },
  { image: work4, title: "Insurva | Dashboard", description: "Lorem ipsum dolor sit amet consectetur." },
  { image: work4, title: "Insurva | Dashboard", description: "Lorem ipsum dolor sit amet consectetur." },
];

export default function Works() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-transparent text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-xl text-[#194EFF] mb-2 ">WORKS</h3>
        <h1 className="text-4xl font-bold mb-10 tracking-wide">What We've Created</h1>

        <div className="relative py-28 my-swiper-wrapper overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            centeredSlides={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={800}
            spaceBetween={20} // reduce space on mobile
            slidesPerView={1.2} // slightly show next slide
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 }, // small tablets
              768: { slidesPerView: 2, spaceBetween: 25 }, // tablets
              1024: { slidesPerView: 3, spaceBetween: 30 }, // desktop
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            grabCursor={true}
            className="pb-16 overflow-visible"
          >
            {works.map((work, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => swiperRef.current?.slideToLoop(index)}
                  className={`bg-[#0B0B2E]/70 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-lg mx-auto transition-all duration-500
                    ${
                      index === activeIndex
                        ? "scale-105 opacity-100 z-20"
                        : "scale-90 opacity-70 z-10"
                    }`}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-60 md:h-64 lg:h-72 object-cover rounded-3xl"
                  />
                  <div className="p-4 md:p-6 text-left">
                    <h3 className="text-lg md:text-xl font-gilroy-bold mb-2">{work.title}</h3>
                    <p className="text-gray-300 text-sm md:text-base font-gilroy-light">{work.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


          {/* Navigation Buttons */}
          <div className="absolute left-[35%] right-[35%] md:left-[45%] md:right-[45%] bottom-6 flex justify-center items-center gap-6 md:-mt-10 Z-50">
            <button className="swiper-button-prev border border-blue-700 hover:bg-blue-600 text-white p-3 rounded-full transition">
              <ArrowLeft size={18} />
            </button>
            <button className="swiper-button-next border border-blue-700 hover:bg-blue-600 text-white p-3 rounded-full transition">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <button className="mt-16 bg-blue-600 hover:bg-blue-500 text-white font-gilroy-bold px-8 py-3 rounded-full flex items-center gap-2 mx-auto transition">
          Explore More <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
