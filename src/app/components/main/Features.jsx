import Container from "@/utils/Container";
import { useTranslations } from "next-intl";
import Image from "next/image"; 

export default function Features() {
  const t = useTranslations("FeatureSection");
  const features = [
    {
      img: "/image/feature1.png",
      name: t("feature_1_name"),
      description: t("feature_1_description"),
      number: "3.5",
      point: t("point_1"),
    },
    {
      img: "/image/feature2.png",
      name: t("feature_2_name"),
      description: t("feature_2_description"),
      number: "200+",
      point: t("point_2"),
    },
    {
      img: "/image/feature3.png",
      name: t("feature_3_name"),
      description: t("feature_3_description"),
      number: "99%",
      point: t("point_3"),
    },
  ];

  return (
    <Container>
      <div className="min-h-screen">
        <h1 className="pb-[90px] text-center font-actay text-[64px] font-bold uppercase bg-[linear-gradient(175deg,_#EAEBFF_3.91%,_#6A8FFF_123.62%)] bg-clip-text text-transparent">
          {t("title").split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h1>
        <div className="flex justify-center gap-5">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col gap-5">
              <div className="overflow-hidden flex flex-col justify-start w-[333px] h-[480px] rounded-[8px] border-[1.5px] border-[#EEF3FF]">
                <Image
                  src={feature.img}
                  alt={feature.name}
                  width={500}
                  height={500} // можешь подогнать под нужный размер
                  className="w-full object-cover"
                />
                <div className="pl-7 pr-7 pt-8">
                  <h2 className="pb-4 text-[#EAEBFF] font-actay text-[16px] font-bold uppercase">
                    {feature.name}
                    </h2>
                  <span className="text-[#EAEBFF] font-raleway text-[14px] font-light">
                    {feature.description}
                  </span>
                </div>
                <div>

                </div>
              </div>
              <div className="w-[333px] h-[160px] bg-[url('/image/featurebg.png')] bg-no-repeat bg-cover bg-center rounded-lg">
                <div className="flex flex-col pl-7 pt-4">
                  <h2 className="font-actay text-[90px] font-bold uppercase bg-[conic-gradient(from_180deg_at_49.33%_50%,_#080218_0deg,_#254BD5_360deg)] bg-clip-text text-transparent">{feature.number}</h2>
                  <span className="font-actay text-[14px] font-bold uppercase bg-[linear-gradient(90deg,_#080218_0%,_#2462FF_116.67%)] bg-clip-text text-transparent">{feature.point}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
