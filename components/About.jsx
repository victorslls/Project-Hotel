'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "@/variants"
import {  useInView } from "react-intersection-observer"
import { Button } from "./ui/button"
import { useMediaQuery } from "react-responsive"
import Stats from "./Stats"

const About = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)"
  })
  const [ref, inView] = useInView({
    threshold: !isMobile ? 0.5 : null,
  });
  

  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          {/**img */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className=" flex-1 relative"
          >
            <Image src="/about/img2.png" width={599} height={721} alt="" />
          </motion.div>
          {/**text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className=" xl:max-w-[470px]"
          >
            <h2 className="h2 mb-[38px]">Sobre Hotely </h2>
            <p>
              A experiência e o conforto é algo magnifico. Hotely tem os mais
              variados serviços, em comodidade estamos no rank entre os 5
              melhores hoteis do mundo. Franquias localizadas em todos os
              continentes, equilibrando a expereniência de cada cultura em um so
              lugar, todos os lugares do mundo ta na Hotely.
            </p>
            {/**stats */}
            <div className=" my-10 xl:my-10 min-h-[38px] ">
              { inView && <Stats/>}
            </div>
            <p className="mb-10 ">
              Comprovada pele conselho regional de Serviços e garantia, todos os
              dados são legitimos, siga na integra.
            </p>
            {/**btn */}
            <Button variant="accent">Explore mais</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About