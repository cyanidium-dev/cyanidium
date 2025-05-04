import { useTranslations } from "next-intl";

export default function HeroPoints() {
  const t = useTranslations("HomeSection");

  const points = [t("point_1"), t("point_2"), t("point_3")];

  return (
    <div className="flex flex-col justify-center items-end lg:items-start gap-[40px] z-[10] max-w-[160px]">
      {points.map((point, index) => (
        <p
          key={index}
          className="text-right lg:text-left text-[16px] md:text-[24px] font-extralight uppercase font-raleway
                     text-white lg:bg-gradient-to-b lg:from-[#EAEBFF] lg:to-[#6A8FFF] lg:bg-clip-text lg:text-transparent"
        >
          {point}
        </p>
      ))}
    </div>
  );
}
