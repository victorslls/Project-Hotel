"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Featured = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
      className="bg-soft_green-secondary xl:h-[240px]
     max-w-[1270px] ml-auto xl:-top-[120px] relative rounded-tl-[30px] rounded-bl-[30px] px-[80px] py-[60px]"
    >
      <div
        className="flex flex-col xl:flex-row items-center h-full gap-x-[30px]
      text-center xl:text-left"
      >
        <Image
          className="xl:mr-[50px]"
          src="/featured/icon.svg"
          width={76}
          height={80}
          alt=""
        />
        <h2 className="h2 flex-1 text-soft_green leading-relaxed">
          Reserve um quarto incrível em menos de 1 minuto
        </h2>
        <p className="flex-1 text-soft_green leading-loose">
          Os melhores benecifios você encontra aqui, o prazer e o conforto em culturas diferentes pertinho de você!
        </p>
      </div>
    </motion.section>
  );
};

export default Featured;
