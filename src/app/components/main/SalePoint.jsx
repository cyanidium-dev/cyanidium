"use client";

import Container from "@/utils/Container";

import { useTranslations } from "next-intl";

export default function SalePoint() {
    const t = useTranslations("SalePointSection");
    return (
      <Container>
        <div className="min-h-[1000px] flex flex-col items-center justify-center">
          <h1 className="pb-6 text-center font-actay text-[64px] font-bold uppercase bg-[linear-gradient(175deg,_#EAEBFF_3.91%,_#6A8FFF_123.62%)] bg-clip-text text-transparent">
            {t("title").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <span className="text-[#EAEBFF] text-center font-raleway text-[18px] font-normal">
            {t("message").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </span>
        </div>
      </Container>
    );
  }