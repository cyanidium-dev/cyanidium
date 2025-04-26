"use client";

import Container from "@/utils/Container";
import { useRef, useState } from "react";

import { useTranslations } from "next-intl";

export default function Reviews() {
    const t = useTranslations("ReviewsSection");
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
        <div className="px-[120px] min-h-[1000px]">
          <header className="mb-[47px]">
            <h2 className="inline-block text-[64px] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] text-center">{t("title")}</h2>
          </header>
          <div className="flex gap-5 overflow-x-hidden">
            {reviews.map((review, index) => 
              <div key={index} className="min-w-[333px] p-[1px] rounded-lg bg-[radial-gradient(ellipse_at_top_left,_#F0EEFF,_#6D65A3,_#1A1033)]">
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
                    }
              }>
                <header className="flex gap-8 items-center p-[32px]">
                  {index % 2 === 0 && <img className="w-[74px] h-[74px] rounded-[50%]" src={review.img} alt="Avatar"/>}
                  <div>
                    <p className="mb-2 text-[20px] font-bold text-[#FFFFFF] uppercase">{review.name}</p>
                    <p className="text-[14px] text-[#FFFFFF]">{review.position}</p>
                  </div>
                </header>
                {index % 2 === 0 ? (
                  <>
                    <div className="py-[22px] pl-[32px] pr-[60px] relative bg-[#EAEBFF]">
                      <h3 className="mb-2 text-[16px] text-black font-semibold">{review.taskHeader}</h3>
                      <p className="text-[14px] text-[#020418]">{review.task}</p>
                      <img src="/icons/star.png" className="absolute top-3 right-3" alt="Star icon" />
                    </div>
                    <div className="px-[32px] py-[48px] text-[14px] text-[#EAEBFF] font-light break-words whitespace-normal">
                      {review.description}
                    </div>
                  </>
                ) : (
                  <div className="mt-auto mb-[10px] py-[22px] pl-[32px] pr-[60px]">
                    <h3 className="mb-2 text-[16px] text-[#EAEBFF] font-semibold">{review.taskHeader}</h3>
                    <p className="text-[14px] text-[#EAEBFF]">
                      {review.task}
                    </p>
                  </div>
                )}
                </div>
              </div>
              )}      
          </div>
        </div>
      </Container>
    );
  }