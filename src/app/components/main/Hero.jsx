"use client";

import dynamic from 'next/dynamic';
import StarIcon from "../main/common/StarIcon";
import Container from "@/utils/Container";
import { useDisclosure } from "@heroui/react"
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Image from "next/image"; 

import HeroLeft from "./hero/HeroLeft";
import HeroRight from "./hero/HeroRight";
import HeroPoints from "./hero/HeroPoints";

const ContactModal = dynamic(() => import("../modals/ContactModal"), { ssr: false });
const SelectLang = dynamic(() => import('../main/common/SelectLang'), { ssr: false });

export default function Hero() {
  const t = useTranslations("HomeSection");
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <div className="relative overflow-hidden">
      <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[1280px] z-0">
        <div className="relative w-full">
          <Image
            className="absolute z-[30] left-1/2 top-1/2 translate-y-1/2 -translate-x-1/2 pr-[140px]"
            width={855}
            height={426.5}
            src="/image/laptop.gif"
            alt="Laptop Gif"
          />
        </div>
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
      <div className="block absolute h-full w-[700px] left-[200px] top-[66.7%] -translate-y-1/2 z-[30]">
        
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
              >
                <HeroLeft onOpen={onOpen} />
              </motion.div>
              {/* Правая часть */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <HeroRight />
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
              <HeroPoints />
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
