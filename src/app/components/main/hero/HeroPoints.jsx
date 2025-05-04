import { useTranslations } from "next-intl";

export default function HeroPoints() {
  const t = useTranslations("HomeSection");

  return (
    <div className="flex flex-col justify-center items-end lg:items-start gap-[40px] z-[10000]">
      <p className="text-right lg:text-left text-[16px] md:text-[24px] font-extralight uppercase bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] bg-clip-text text-transparent font-raleway">
        {t("point_1").split("\n").map((line, i) => (
            <span key={`p1-${i}`} className="block">{line}</span>
        ))}
        </p>
        <p className="text-right lg:text-left text-[16px] md:text-[24px] font-extralight uppercase bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] bg-clip-text text-transparent font-raleway">
        {t("point_2").split("\n").map((line, i) => (
            <span key={`p2-${i}`} className="block">{line}</span>
        ))}
        </p>
        <p className="text-right lg:text-left text-[16px] md:text-[24px] font-extralight uppercase bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] bg-clip-text text-transparent font-raleway">
        {t("point_3").split("\n").map((line, i) => (
            <span key={`p3-${i}`} className="block">{line}</span>
        ))}
        </p>
    </div>
  );
}