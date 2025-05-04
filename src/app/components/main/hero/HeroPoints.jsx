import { useTranslations } from "next-intl";

export default function HeroPoints() {
  const t = useTranslations("HomeSection");

  return (
    <div className="flex flex-col justify-center items-end lg:items-start gap-[40px] z-[10000]">
      {[t("point_1"), t("point_2"), t("point_3")].map((text, idx) => (
        <p
          key={idx}
          className="text-right lg:text-left text-[16px] md:text-[24px] font-extralight uppercase bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] bg-clip-text text-transparent font-raleway"
        >
          {text.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </p>
      ))}
    </div>
  );
}