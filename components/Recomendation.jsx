"use client";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//swiper modules
import { Autoplay } from "swiper/modules";

//swiper style
import "swiper/css";

//components
import { Button } from "./ui/button";
import Image from "next/image";

const recommendationData = [
  {
    name: "Shanghai Hotel",
    image: "/recommendation/hotel-1.png",
    location: "Shangai, China",
    desc: "Melhor Hotel da china para eventos particulares e fechado para empresas",
    price: 430,
    testimonial: {
      message: "Melhor experiência que minha empresa já se hopesdou",
      personame: "Rober Kennedy",
    },
  },
  {
    name: "Bariloche Hotel",
    image: "/recommendation/hotel-2.png",
    location: "Aspen, USA ",
    desc: "Melhor Hotel da china para eventos particulares e fechado para empresas",
    price: 120,
    testimonial: {
      message: "Melhor experiência que minha empresa já se hopesdou",
      personame: "Filie Arthur",
    },
  },
  {
    name: "Tropical Oasis Hotel",
    image: "/recommendation/hotel-3.png",
    location: "Bali, Indonesia ",
    desc: "Melhor Hotel da china para eventos particulares e fechado para empresas",
    price: 40,
    testimonial: {
      message: "Melhor experiência que minha empresa já se hopesdou",
      personame: "Fernanda Kimper",
    },
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Recomendation = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className=" pb-12 xl:pt-[150px] xl:pb-[112px] bg-soft_green-secondary relative"
    >
      {/**slider */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <Swiper
          modules={[ Autoplay ]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          speed={2000}
        >
          {recommendationData.map((hotel, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col xl:flex-row">
                  {/**text */}
                  <div
                    className="max-w-[345px] xl:pt-8 order-2 m xl:order-1 text-center mx-auto 
                xl:text-left xl:mx-[100px]"
                  >
                    <h2 className="h2 mb-4">{hotel.name}</h2>
                    <p className="text-soft_green text-sm">{hotel.location}</p>
                    <p className="mb-[60px]">{hotel.desc}</p>
                    <div className="flex items-center gap-[50px] mb-[50px]">
                      <Button variant="accent" className="px-[44px]">
                        Agende agora
                      </Button>
                      <div className="text-black">
                        <span className="font-bold text-2xl">
                          {hotel.price}
                        </span>
                        <span>/Night</span>
                      </div>
                    </div>
                  </div>
                  {/**image & testimonial */}
                  <div
                    className="order-1 xl:order-2 flex-1 flex flex-col justify-center
                 xl:justify-end relative h-[534px] mb-5"
                  >
                    <Image
                      src={hotel.image}
                      width={905}
                      height={528}
                      quality={100}
                      alt=""
                      className="rounded-tr-[20px] rounded-tl-[20px] xl:rounded-br-[0px] xl:rounded-tl-[30px] xl:rounded-bl-[30px]"
                    />
                    <div
                      className="bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] 
                  xl:min-h-[180px] xl:absolute xl:bottom-0 xl:translate-x-1/2  xl:rounded-xl xl:px-10 ]"
                    >
                      <p className="mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6">
                        {hotel.testimonial.message}
                      </p>
                      <p className="text-xl font-bold">
                        {hotel.testimonial.personame}
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
      <Image
        src={"/recommendation/pattern.svg"}
        width={240}
        height={240}
        alt=""
        className="hidden xl:flex absolute left-[135px] -bottom-[120px]"
      />
    </motion.section>
  );
};

export default Recomendation;
