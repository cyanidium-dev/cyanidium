"use client";

import Container from "@/utils/Container";
import { color, motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Price() {
  const [startAnimation, setStartAnimation] = useState(false);
    const t = useTranslations("PriceSection");
    const title = t("title");

  const words = title.split(" ");
    const websiteTypes = [
      {
        name: t("type_1.name"),
        description: t("type_1.description"),
        price: '~$380',
        img: '/image/web-type-1.png',
        textColor: '#EAEBFF',
        gradient: 'from-[#D4DBFF] to-[#1E43A9]',
        shadow: '#0d1943'
      },
      {
        name: t("type_2.name"),
        description: t("type_2.description"),
        price: '~$1500',
        img: '/image/web-type-2.png',
        bgImg: '/image/site-type-back.png',
        textColor: '#020418',
        gradient: 'from-[#619AEA] to-[#163D67]',
        shadow: '#92a6e5'
      },
    ]
    return (
      <div className="relative overflow-hidden">
        <div className="absolute top-[30%] -right-[10%] w-[500px] h-[400px] opacity-60 blur-[280px] rounded-full z-0 bg-gradient-to-r from-[#0F41FD] via-[#901090] to-[#5c0a5c] animate-gradientMove"></div>
        <Container>
          <div className="px-[25px] md:px-20 lg:px-[120px] min-h-[1200px] lg:min-h-[1000px]">
              <header className="mb-[65px] lg:mb-[72px] text-center">
                <motion.h2 
                initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            onViewportEnter={() => setStartAnimation(true)} className="text-[32px] md:text-5xl lg:text-[64px] font-bold font-actay text-[#EAEBFF] uppercase">
                          {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-2">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    initial={{ opacity: 0 }}
                    animate={startAnimation ? { opacity: 1 } : {}}
                    transition={{ delay: (wordIndex * 0.2) + (letterIndex * 0.05) }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
            </motion.h2>
                <p className="text-base md:text-2xl lg:text-[32px] text-[#8AA2FF] uppercase">{t("description")}</p>
              </header>
              <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-5">
              {websiteTypes.map((website, index) => (
                <motion.div                   
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 + index * 0.3}}
                viewport={{ once: true }} key={index} className="h-[368px] md:h-[430px] lg:h-[500px] p-[1px] md:flex-1 bg-[radial-gradient(ellipse_at_top_left,_#F0EEFF,_#6D65A3,_#1A1033)] rounded-lg overflow-hidden">
                  <div className="relative h-full rounded-[7px] overflow-hidden 
                  px-7 py-10 md:px-11 md:py-12 lg:pl-[60px] lg:pt-[58px]" style={
                    website.bgImg
                      ? {
                          backgroundImage: "url(/image/site-type-back.png)",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }
                      : { 
                          backgroundColor: "#020418",
                        }
                  }>
                    <div
                      className="absolute left-[30%] bottom-0 lg:left-[40%] lg:bottom-[-5%] w-[370px] h-[270px] blur-3xl rounded-full opacity-100"
                      style={{ backgroundColor: website.shadow, zIndex: 1 }}
                    ></div>

                    <div className="relative z-10">
                      <motion.h3 initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.3}}
                  viewport={{ once: true }} className="mb-[14px] font-actay text-2xl md:text-[30px]lg:text-4xl uppercase" style={{ color: website.textColor }}>
                        {website.name}
                      </motion.h3>
                      <p className="max-w-[150px] md:max-w-[70%] lg:max-w-full mb-10 md:mb-[35px] lg:mb-[30px] text-sm md:text-[16px] lg:text-xl" style={{ color: website.textColor }}>
                        {website.description}
                      </p>
                      <strong className={`inline-block text-[40px] md:text-[42px] lg:text-[52px] text-transparent bg-clip-text bg-gradient-to-b ${website.gradient} font-actay`}>
                        {website.price}
                      </strong>
                    </div>
                    <img src={website.img} className="max-w-[60%] max-h-[60%] absolute bottom-0 right-0 z-20" alt="Web image" />
                  </div>
                </motion.div>
              ))}
              </div>
            </div>
          </Container>
      </div>
    );
  }