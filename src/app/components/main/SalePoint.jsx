"use client";

import Container from "@/utils/Container";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image"; 

export default function SalePoint() {
  const t = useTranslations("SalePointSection");
  const title = t("title");

  const words = title.split(" "); // розбиваємо на слова

  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <div className="relative">
      <div className="hidden md:block absolute h-[1800px] w-[768px] top-1/2 -translate-y-1/2">
        <Image
          src="/image/blue-gradient.png"
          alt="Gradient"
          fill
          className=""
        />
      </div>
      <div className="block md:hidden absolute h-[2000px] w-full top-[55%] -translate-y-1/2">
        <Image
          src="/image/salepointbg.png"
          alt="Gradient"
          fill
          className=""
        />
      </div>      
      <Container>
        <div className="min-h-[500px] flex flex-col items-center justify-center">
          <motion.h1
            className="whitespace-pre-wrap w-[330px] sm:w-[600px] lg:w-[950px] pb-6 text-center font-actay text-[24px] lg:text-[44px] xl:text-[64px] font-bold uppercase bg-[linear-gradient(175deg,_#EAEBFF_3.91%,_#6A8FFF_123.62%)] bg-clip-text text-transparent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            onViewportEnter={() => setStartAnimation(true)}
          >
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
          </motion.h1>

          <span className="text-[#EAEBFF] text-center font-raleway text-[14px] lg:text-[18px] xl:text-[18px] font-normal">
            {t("message").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </span>
        </div>
      </Container>
    </div>
  );
}
