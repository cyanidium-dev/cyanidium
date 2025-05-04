"use client";

import ContactModal from "../modals/ContactModal";
import Container from "@/utils/Container";
import { Button, useDisclosure } from "@heroui/react"
import Laptop from './common/Laptop';
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Image from "next/image"; 
import SelectLang from "../main/common/SelectLang";
import StarIcon from "../main/common/StarIcon";

export default function Hero() {
  const t = useTranslations("HomeSection");
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <div className="relative overflow-hidden">
      <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[1280px] z-0">
        <Image
          src="/image/herobg-2.png"
          alt="Hero Background Desktop"
          fill
          className="object-cover"
        />
      </div>

      <div className="block md:hidden absolute left-1/2 transform -translate-x-1/2 h-full w-full z-0">
        <Image
          src="/image/herobg-mobile.png"
          alt="Hero Background Mobile"
          fill
          className="object-cover"
        />
      </div>
      <div className="block absolute h-full w-[700px] left-[17%] top-[66.7%] -translate-y-1/2 z-[30]">
        <img
          className=""
          src="/image/laptop.gif"
          alt="Laptop Gif"
        />
      </div>

      <ContactModal isOpen={isOpen} onClose={onClose} />
      <Container>
        <div className="relative min-h-[900px] md:min-h-[1330px] pt-[20px] md:pt-[40px] lg:pt-[65px] px-[20px] sm:px-[60px] md:px-[80px] lg:px-[140px] z-[50]">
            <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
              {/* Левая часть */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 flex flex-col items-center lg:items-start lg:justify-between"
              >
                <h1 className="text-[#EAEBFF] font-bold text-[32px] md:text-[44px] lg:text-[64px] uppercase mb-2 font-actay">
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
                <button onClick={onOpen} className="relative hidden lg:block w-[245px] h-[48px] rounded-full border border-[#0F41FD] bg-[#EAEBFF] overflow-hidden">
                  <div className="absolute left-[48%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full z-0">
                    <Image
                      src="/image/buttonbg-2.png"
                      alt="Hero Background Mobile"
                      fill
                      className="object-cover"
                    />
                  </div>
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
                className="order-1 lg:order-2 flex pt-[12px] flex-col lg:flex-row items-center lg:items-start gap-7"
              >
                <div className="order-2 lg:order-1">
                  <StarIcon width={48} height={48}/>
                </div>
                <div className="flex justify-between order-1 lg:order-2 w-full">
                  <div className="text-left lg:text-right text-[#EAEBFF] uppercase font-actay text-[20.573px] leading-[103.301%]">
                    <div className="pb-[5px]">Code-art</div>
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
              className="flex justify-end pt-[180px] lg:pt-0"
            >
              <div className="flex flex-col justify-center items-end lg:items-start gap-[40px] z-[10000]">
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
              <button onClick={onOpen} className="relative w-[310px] h-[48px] rounded-full border border-[#0F41FD] bg-[#EAEBFF] overflow-hidden">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full z-0">
                  <Image
                    src="/image/buttonbg-1.png"
                    alt="Hero Background Mobile"
                    fill
                    className="object-cover"
                  />
                </div>
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
