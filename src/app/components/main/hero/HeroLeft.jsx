import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroLeft({ onOpen }) {
  const t = useTranslations("HomeSection");

  return (
    <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start lg:justify-between">
      <h1 className="text-[#EAEBFF] font-bold text-[32px] md:text-[44px] lg:text-[64px] uppercase mb-2 font-actay">
        {t("title")}
      </h1>
      <p className="text-[#EAEBFF] text-[14px] md:text-[16px] text-center lg:text-left lg:text-[20px] mb-[38px] sm:mb-[90px] md:mb-[210px] lg:mb-[38px] font-raleway">
        {t("question").split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <button
        onClick={onOpen}
        className="relative hidden lg:block w-[245px] h-[48px] rounded-full border border-[#0F41FD] bg-[#EAEBFF] overflow-hidden"
      >
        <div className="absolute left-[48%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full z-0">
          <Image
            src="/image/buttonbg-2.png"
            alt="Hero Background Mobile"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-[#020418] text-[14px] font-bold uppercase font-raleway">
          {t("button")}
        </div>
      </button>
    </div>
  );
}
