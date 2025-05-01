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
      <div className="absolute top-[45%] md:top-[50%] sm:left-[40%] md:left-[40%] lg:left-[45%] xl:left-[50%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 z-30">
        <img
          className="relative max-w-[140%] sm:max-w-[110%] md:max-w-[110%] lg:min-1024:max-w-[100%] xl:min-1024:max-w-[85%] z-[30]"
          src="/image/laptop.gif"
          alt="Laptop Gif"
        />
        <div className="mt-[-70px] lg:mt-[-70px] z-[10]">
          <div 
            className="w-[140%] sm:w-[130%] md:w-[120%] lg:w-[110%] xl:w-full h-[120px] -rotate-3 bg-white rounded-b-full blur-sm"
            style={{
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, transparent 70%)"
            }}
          ></div>
        </div>
      </div>
      <ContactModal isOpen={isOpen} onClose={onClose} />
      <Container>
        <div className="relative min-h-[1000px] pt-[20px] md:pt-[40px] lg:pt-[65px] px-[20px] sm:px-[60px] md:px-[80px] lg:px-[140px] z-[50]">
            {/* <Laptop/> */}
            {/* <img className="absolute top-[35%] md:top-[35%] left-[45%] -translate-x-1/2 max-w-[60%] md:max-w-[50%] z-[1000]" src="/image/laptop.gif" alt="Laptop Gif" /> */}
            {/* <div className="absolute flex flex-col items-center top-[35%] md:top[45%] lg:top-[25%] left-1/2 -translate-x-1/2 w-full h-[1100px] overflow-hidden z-[900]">
              <img className="min-550:max-w-[80%] min-1024:max-w-[60%] -ml-[10%] z-30" src="/image/laptop.gif" alt="Laptop Gif" />
              <div className="-mt-[800px] min-420:-mt-[800px] min-451:-mt-[778px] min-608:-mt-[755px] min-690:-mt-[730px] md:-mt-[700px] min-771:-mt-[698px] min-788:-mt-[695px] min-840:-mt-[675px] min-890:-mt-[640px] min-1024:-mt-[650px] min-1110:-mt-[625px] min-1190:-mt-[590px] relative w-[200px] lg:w-[300px] h-[150%] bg-gradient-to-r from-transparent via-[#030415] to-transparent -rotate-90 z-100 opacity-100 overflow-hidden z-40" style={{ clipPath: "polygon(0% 0%, 60% 0%, 85% 100%, 0% 100%)"}}>
                <div className="absolute top-[40%] -translate-y-1/2 left-[55%] md:left-[45%] lg:left-[35%] w-[400px] md:w-[800px] lg:w-[1200px] h-[100%] bg-[#6d717d] blur-2xl z-100 rounded-full"></div>
              </div>
            </div> */}
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
                <button onClick={onOpen} className="hidden lg:block w-[245px] h-[48px] rounded-full border border-[#0F41FD] bg-[#EAEBFF]">
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
              className="flex justify-end pt-[300px] lg:pt-0"
            >
              <div className="flex flex-col justify-center items-start gap-[40px] z-[10000]">
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
              <button onClick={onOpen} className="w-[310px] h-[48px] rounded-full border border-[#0F41FD] bg-[#EAEBFF]">
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
