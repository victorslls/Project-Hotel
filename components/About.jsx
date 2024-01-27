'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "@/variants"
import { useInView } from "react-intersection-observer"
import { Button } from "./ui/button"
import { useMediaQuery } from "react-responsive"
import Stats from "./Stats"

const About = () => {
  return (
    <section className="py-12 xl:pt-0 xl:pb-24">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          {/**img */}
          <div className=" flex-1 relative">
            <Image src="/about/img2.png" width={599} height={721} alt="" />
          </div>
          {/**text */}
          <div className="xl:max-w-[470px]">
            <h2 className="h2 mb-[38px]">Sobre Hotely </h2>
            <p>
              A experiência e o conforto é algo magnifico. Hotely tem os mais
              variados serviços, em comodidade estamos no rank entre os 5
              melhores hoteis do mundo. Franquias localizadas em todos os
              continentes, equilibrando a expereniência de cada cultura em um so
              lugar, todos os lugares do mundo ta na Hotely.
            </p>
            {/**stats */}
            <dir className=' my-5 xl:my-10 min-h-[35px] '>
                <Stats/>
            </dir>
            <p className="mb-10">Comprovada pele conselho regional de Serviços e garantia, todos os dados são legitimos, siga na integra.</p>
            {/**btn */}
            <Button variant='accent'>Explore mais</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About