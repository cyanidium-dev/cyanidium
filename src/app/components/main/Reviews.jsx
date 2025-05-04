"use client";

import Container from "@/utils/Container";
import { useRef, useEffect, useState } from "react";
import {motion} from 'framer-motion'
import { useTranslations } from "next-intl";
import VideoPlayer from "./common/VideoPlayer";

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
        img: '/image/ava-1.webp'
      }, 
      {
        name: t("card_2.name"),
        position: t("card_2.position"),
        taskHeader: t("card_2.task_header"),
        task: t("card_2.task"),
        img: 'https://player.vimeo.com/video/1081080701?h=1d0d2cac4c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
      }, 
      {
        name: t("card_3.name"),
        position: t("card_3.position"),
        taskHeader: t("card_3.task_header"),
        task: t("card_3.task"),
        description: t("card_3.description"),
        img: '/image/ava-2.webp'
      }, 
      {
        name: t("card_4.name"),
        position: t("card_4.position"),
        taskHeader: t("card_4.task_header"),
        task: t("card_4.task"),
        img: 'https://player.vimeo.com/video/1081080427?h=22ed5fe823&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
      },
      {
        name: t("card_5.name"),
        position: t("card_5.position"),
        taskHeader: t("card_5.task_header"),
        task: t("card_5.task"),
        description: t("card_5.description"),
        img: '/image/ava-3.webp'
      }, 
      {
        name: t("card_6.name"),
        position: t("card_6.position"),
        taskHeader: t("card_6.task_header"),
        task: t("card_6.task"),
        img: 'https://player.vimeo.com/video/1081079972?h=9fcc4fa9ee&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
      }, 
    ]
    return (
      <Container>
        <div className="min-h-[700px] sm:min-h-[800px]">
          <header className="mb-[47px] px-[25px] md:px-20 lg:pl-[120px]">
            <motion.h2 initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            onViewportEnter={() => setStartAnimation(true)}  className="font-actay lg:max-w-[1000px] inline-block text-[32px] md:text-5xl lg:text-[64px] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] text-center">
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
              viewport={{ once: true }} key={index} className={`${review.description ? 'min-w-[333px]' : 'min-w-[227px] md:min-w-[248px]'} h-[400px] md:h-[435px] p-[1px] rounded-lg bg-[radial-gradient(ellipse_at_top_left,_#F0EEFF,_#6D65A3,_#1A1033)]`}>
                <div className="w-full h-full flex flex-col rounded-[7px]" style={{
                      backgroundImage: "linear-gradient(164deg, #020418 52.91%, #0A157E 204.34%)",
                    }}>
                {index % 2 === 0 ? 
                <>
                                <header className="font-raleway flex gap-8 items-center p-[28px] md:p-[30px] lg:p-[32px]">
                  {index % 2 === 0 && <img className="h-[74px] w-[74px] rounded-[50%]" src={review.img} alt="Avatar"/>}
                  <div>
                    <p className="mb-2 text-[20px] font-bold text-[#FFFFFF] uppercase">{review.name}</p>
                    <p className="text-[14px] text-[#FFFFFF]">{review.position}</p>
                  </div>
                </header>
                  <div className="font-raleway py-[22px] pl-[32px] pr-[32px] lg:pr-[60px] relative bg-[#EAEBFF]">
                    <h3 className="mb-2 text-[16px] text-black font-semibold uppercase">{review.taskHeader}</h3>
                    <p className="text-xs md:text-[13px] lg:text-sm text-[#020418]">{review.task}</p>
                    <img src="/icons/star.png" className="absolute top-3 right-3" alt="Star icon" />
                  </div>
                  <div className="font-raleway px-[32px] py-10 md:py-11 lg:py-[48px] text-xs md:text-[13px] lg:text-[14px] text-[#EAEBFF] font-light break-words whitespace-normal">
                      {review.description}
                  </div>
                </> : <div className="w-full aspect-video">
                  <VideoPlayer videoUrl={review.img}/>
                </div>}
                </div>
              </motion.div>
              )}      
          </div>
        </div>
      </Container>
    );
  }