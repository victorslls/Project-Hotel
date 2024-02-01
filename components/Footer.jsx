"use client";

import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Footer = () => {
  return (
    <footer className="bg-soft_green-secondary relative pt-12 xl:pt-0">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
        >
          <div
            className="flex flex-col xl:flex-row bg-white p-8 rounded-xl min-h-[394px]
           xl:p:-20 xl:-translate-y-36 xl:gap-x-12"
          >
            {/**logo e text */}
            <div className="xl:w-[470px] mb-6 xl:mb-0">
              <Link href="/">
                <Image
                  src="/footer/logo.svg"
                  width={80}
                  height={36}
                  alt=""
                  className="mb-2"
                />
              </Link>
              <p className="mt-6">
                Todas as comodidades prontas e esperando por você, venha
                conhecer a melhor franqui de Hoteis, conhecida em todos os
                continentes do planeta. experiência e cultura a sua disposição
              </p>
            </div>
            <div className="flex  xl:gap-x-16 xl:ml-32 justify-center">
              {/**navigation */}
              <div className="flex-1">
                <h4 className="h4 mb-6">Navegação</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Encontrar Hotel</Link>
                  </li>
                  <li>
                    <Link href="/">Sobre nos</Link>
                  </li>
                  <li>
                    <Link href="/">Contate nos</Link>
                  </li>
                </ul>
              </div>
              {/**contact */}
              <div className="flex-1">
                <h4 className="h4 mb-6">Contato</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>+61 123 84567894</li>
                  <li>info@Hotely.com</li>
                  <li>+61 123 84567894</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        {/**copy */}
        <motion.div
           variants={fadeIn("right", 0.4)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0 }}
          className="py-12 xl:-mt-32 flex flex-col xl:flex-row xl:justify-between"
        >
          <p className="text-black font-semibold text-center mb-4 xl:mb-0">Copyright &copy; 2024. all rights reserved.</p>
          <Socials containerStyles="flex gap-x-4 text-black mx-auto xl:mx-0" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
