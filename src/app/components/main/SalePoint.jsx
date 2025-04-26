"use client";

import Container from "@/utils/Container";

import { useTranslations } from "next-intl";

export default function SalePoint() {
    const t = useTranslations("SalePointSection");
    return (
      <div className="relative overflow-hidden">
        <div className="absolute top-[15%] -left-[70%] lg:-left-[10%] w-[500px] h-[600px] bg-[#223AD5] opacity-20 blur-[280px] rounded-full z-0"></div>
        <Container>
          <div className="min-h-[1000px] flex flex-col items-center justify-center">
            <h1 className="pb-6 text-center font-actay text-[24px] lg:text-[44px] xl:text-[64px] font-bold uppercase bg-[linear-gradient(175deg,_#EAEBFF_3.91%,_#6A8FFF_123.62%)] bg-clip-text text-transparent">
              {t("title").split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
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