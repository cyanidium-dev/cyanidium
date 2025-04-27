"use client";

import Container from "@/utils/Container";
import { Button } from "@heroui/react"
import Laptop from './common/Laptop';
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Image from "next/image"; 
import SelectLang from "../main/common/SelectLang";
import StarIcon from "../main/common/StarIcon";

export default function Hero() {
  const t = useTranslations("HomeSection");
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -rotate-12 md:rotate-0 -left-[15%] md:left-0 top-[25%] lg:top-[20%] h-[30%] md:h-[40%] lg:h-[70%] w-[120%] md:w-full z-0">
        <Image
          src="/image/herobg.png"
          alt="Phone"
          fill
          className=""
        />
      </div>
      <div className="absolute left-[55%] md:left-1/2 top-[300px] -translate-x-[100%] z-0">
        <Image
          src="/image/planet.png"
          alt="Phone"
          width={325}
          height={325}
          className=""
        />
      </div>
      <div className="absolute top-[5%] w-[1800px] h-[500px] bg-[#7192FF] opacity-10 blur-3xl rounded-full z-0 [transform:rotateX(55deg)_rotateZ(-40deg)]"></div>
      <div className="absolute -right-[25%] bottom-[5%] w-[800px] h-[500px] bg-[#7192FF] opacity-20 blur-3xl rounded-full z-0 [transform:rotateX(55deg)_rotateZ(40deg)]"></div>
      <div className="absolute -right-[5%] bottom-[5%] w-[600px] h-[400px] bg-black opacity-80 blur-3xl rounded-full z-0"></div>
      <Container>
        <div className="relative min-h-[1000px] pt-[20px] md:pt-[40px] lg:pt-[65px] px-[20px] sm:px-[60px] md:px-[80px] lg:px-[140px] z-10">
            <Laptop/>
            {/* <div className="absolute left-[45%] -translate-x-[45%] top-[68%] w-[50%] h-[50px] bg-[#a8aece] blur-[5px] rounded-b-2xl z-0"></div> */}
            <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
              {/* Левая часть */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 flex flex-col items-center lg:items-start lg:justify-between"
              >
                <h1 className="text-[#EAEBFF] font-bold text-[32px] md:text-[44px] lg:text-[64px] uppercase mb-4 font-actay">
                  {t("title")}
                </h1>
                <p className="text-[#EAEBFF] text-[14px] md:text-[16px] text-center lg:text-left lg:text-[20px] mb-[38px] font-raleway">
                  {t("question").split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <button className="hidden lg:block w-[245px] h-[48px] rounded-full border border-[#0F41FD] bg-[#EAEBFF]">
                  <div className="text-[#020418] text-[14px] font-bold uppercase font-raleway">
                    {t("button")}
                  </div>
                </button>
              </motion.div>
              {/* Правая часть */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 flex pt-[12px] flex-col lg:flex-row items-center lg:items-start gap-8"
              >
                <div className="order-2 lg:order-1">
                  <StarIcon width={48} height={48}/>
                </div>
                <div className="flex justify-between order-1 lg:order-2 w-full">
                  <div className="text-left lg:text-right text-[#EAEBFF] uppercase font-actay text-[20.573px] leading-[103.301%]">
                    <div className="pb-[5px]">CYANIDIUM.</div>
                    <div>DEV</div>
                  </div>
                  <div>
                    <SelectLang />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Средняя секция */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-end pt-[270px] lg:pt-0"
            >
              <div className="flex flex-col justify-center items-start gap-[40px]">
                {[t("point_1"), t("point_2"), t("point_3")].map((text, idx) => (
                  <p
                    key={idx}
                    className="text-right lg:text-left text-[16px] md:text-[24px] font-extralight uppercase bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] bg-clip-text text-transparent font-raleway"
                  >
                    {text.split("\n").map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </p>
                ))}
              </div>
            </motion.div>
            <div className="flex lg:hidden justify-center pt-7">
              <button className="w-[245px] h-[48px] rounded-full border border-[#0F41FD] bg-[#EAEBFF]">
                <div className="text-[#020418] text-[14px] font-bold uppercase font-raleway">
                  {t("button")}
                </div>
              </button>
            </div>
        </div>
      </Container>
    </div>
  );
}
