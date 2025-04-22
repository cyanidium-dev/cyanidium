"use client";

import Container from "@/utils/Container";
import { Button } from "@heroui/react";
import { useTranslations } from "next-intl";

import SelectLang from "../main/common/SelectLang";
import StarIcon from "../main/common/StarIcon";

export default function Hero() {
  const t = useTranslations("HomeSection");
  return (
    <Container>
      <div className="min-h-screen pt-[65px] px-[140px]">
          <div className="flex justify-between">
            {/* Левая часть */}
            <div>
              <h1 className="text-[#EAEBFF] font-bold text-[64px] uppercase mb-4 font-actay">
                {t("title")}
              </h1>
              <p className="text-[#EAEBFF] text-[20px] mb-[38px] font-raleway">
                {t("question").split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <button className="w-[245px] h-[48px] rounded-full border border-[#7192FF] bg-[#EAEBFF]">
                <div className="text-[#020418] text-[14px] font-bold uppercase font-raleway">
                  {t("button")}
                </div>
              </button>
            </div>

            {/* Правая часть */}
            <div className="flex pt-[12px]">
              <div className="pr-[18px]">
                <StarIcon width={48} height={48}/>
              </div>
              <div className="text-right text-[#EAEBFF] pr-[50px] uppercase font-actay text-[20.573px] leading-[103.301%]">
                <div className="pb-[5px]">CYANIDIUM.</div>
                <div>DEV</div>
              </div>
              <div>
                <SelectLang />
              </div>
            </div>
          </div>

          {/* Средняя секция */}
          <div className="flex justify-end">
            <div className="flex flex-col justify-center items-start gap-[40px]">
              {[t("point_1"), t("point_2"), t("point_3")].map((text, idx) => (
                <p
                  key={idx}
                  className="text-[24px] font-extralight uppercase bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] bg-clip-text text-transparent font-raleway"
                >
                  {text.split("\n").map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </p>
              ))}
            </div>
          </div>
      </div>
    </Container>
  );
}
