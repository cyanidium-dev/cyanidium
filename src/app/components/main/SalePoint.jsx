"use client";

import Container from "@/utils/Container";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "framer-motion";

export default function SalePoint() {
  const t = useTranslations("SalePointSection");
  const title = t("title");

  const words = title.split(" "); // розбиваємо на слова

  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-[25%] -left-[115%] sm:-left-[30%] lg:-left-[20%] xl:-left-[10%] w-[500px] h-[500px] opacity-80 blur-[280px] rounded-full z-0 bg-gradient-to-r from-[#0F41FD] via-[#901090] to-[#5c0a5c] animate-gradientMove"></div>
      <Container>
        <div className="min-h-[1000px] flex flex-col items-center justify-center">
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
