import { useTranslations } from "next-intl";

export default function HeroPoints() {
  const t = useTranslations("HomeSection");

  return (
    <div className="flex flex-col justify-center items-end lg:items-start gap-[40px] z-[10] max-w-[160px]">
        <p className="text-right lg:text-left text-[16px] md:text-[24px] font-extralight uppercase text-[#6A8FFF] font-raleway">
            {t("point_1")}
        </p>
        <p className="text-right lg:text-left text-[16px] md:text-[24px] font-extralight uppercase text-[#6A8FFF] font-raleway">
            {t("point_2")}
        </p>
        <p className="text-right lg:text-left text-[16px] md:text-[24px] font-extralight uppercase text-[#6A8FFF] font-raleway">
            {t("point_3")}
        </p>
    </div>
  );
}