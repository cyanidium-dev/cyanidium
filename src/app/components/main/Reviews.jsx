"use client";

import Container from "@/utils/Container";
import { useRef, useEffect, useState } from "react";
import {motion} from 'framer-motion'
import { useTranslations } from "next-intl";

export default function Reviews() {
    const scrollContainerRef = useRef(null);
    const t = useTranslations("ReviewsSection");
        const title = t("title");
    
        const words = title.split(" ");
          const [startAnimation, setStartAnimation] = useState(false);
    useEffect(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
  
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault(); // теперь точно сработает
        container.scrollLeft += e.deltaY;
      };
  
      container.addEventListener("wheel", onWheel, { passive: false });
  
      return () => {
        container.removeEventListener("wheel", onWheel);
      };
    }, []);
    const reviews = [
      {
        name: t("card_1.name"),
        position: t("card_1.position"),
        taskHeader: t("card_1.task_header"),
        task: t("card_1.task"),
        description: t("card_1.description"),
        img: '/image/ava-1.jpg'
      }, 
      {
        name: t("card_2.name"),
        position: t("card_2.position"),
        taskHeader: t("card_2.task_header"),
        task: t("card_2.task"),
        img: '/image/ava-image-1.jpg'
      }, 
      {
        name: t("card_3.name"),
        position: t("card_3.position"),
        taskHeader: t("card_3.task_header"),
        task: t("card_3.task"),
        description: t("card_3.description"),
        img: '/image/ava-2.jpg'
      }, 
      {
        name: t("card_4.name"),
        position: t("card_4.position"),
        taskHeader: t("card_4.task_header"),
        task: t("card_4.task"),
        img: '/image/ava-image-1.jpg'
      }, 
    ]
    return (
      <Container>
        <div className="min-h-[1000px]">
          <header className="mb-[47px] px-[25px] md:px-20 lg:pl-[120px]">
            <motion.h2 initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            onViewportEnter={() => setStartAnimation(true)}  className="inline-block text-[32px] md:text-5xl lg:text-[64px] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] text-center">
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
          </header>
          <div ref={scrollContainerRef} className="flex gap-5 overflow-y-hidden overflow-x-auto scrollbar-hide px-[25px]" style={{ touchAction: "pan-x", WebkitOverflowScrolling: 'touch' }}>
            {reviews.map((review, index) => 
              <motion.div initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 + index * 0.3}}
              viewport={{ once: true }} key={index} className={`${review.description ? 'min-w-[333px]' : 'min-w-[255px]'} h-[400px] md:h-[435px] lg:min-w-[333px] p-[1px] rounded-lg bg-[radial-gradient(ellipse_at_top_left,_#F0EEFF,_#6D65A3,_#1A1033)]`}>
                <div className="w-full h-full flex flex-col rounded-[7px]" style={
                index % 2 === 0
                  ? {
                      backgroundImage: "linear-gradient(164deg, #020418 52.91%, #0A157E 204.34%)",
                    }
                  : {
                      backgroundImage: "url(/image/ava-image-1.png)",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      objectFit: 'cover'
                    }
              }>
                <header className="flex gap-8 items-center p-[28px] md:p-[30px] lg:p-[32px]">
                  {index % 2 === 0 && <img className="h-[74px] w-[74px] rounded-[50%]" src={review.img} alt="Avatar"/>}
                  <div>
                    <p className="mb-2 text-[20px] font-bold text-[#FFFFFF] uppercase">{review.name}</p>
                    <p className="text-[14px] text-[#FFFFFF]">{review.position}</p>
                  </div>
                </header>
                {index % 2 === 0 ? (
                  <>
                    <div className="py-[22px] pl-[32px] pr-[32px] lg:pr-[60px] relative bg-[#EAEBFF]">
                      <h3 className="mb-2 text-[16px] text-black font-semibold uppercase">{review.taskHeader}</h3>
                      <p className="text-xs md:text-[13px] lg:text-sm text-[#020418]">{review.task}</p>
                      <img src="/icons/star.png" className="absolute top-3 right-3" alt="Star icon" />
                    </div>
                    <div className="px-[32px] py-10 md:py-11 lg:py-[48px] text-xs md:text-[13px] lg:text-[14px] text-[#EAEBFF] font-light break-words whitespace-normal">
                      {review.description}
                    </div>
                  </>
                ) : (
                  <div className="mt-auto lg:mb-[10px] p-8 lg:pr-[60px]">
                    <h3 className="mb-2 text-sm md:text-[15px] lg:text-base text-[#EAEBFF] font-semibold uppercase">{review.taskHeader}</h3>
                    <p className="text-xs md:text-[13px] lg:text-sm text-[#EAEBFF]">
                      {review.task}
                    </p>
                  </div>
                )}
                </div>
              </motion.div>
              )}      
          </div>
        </div>
      </Container>
    );
  }