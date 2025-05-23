"use client";

import Container from "@/utils/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  const t = useTranslations("FeatureSection");
  const features = [
    {
      img: "/image/feature1.png",
      name: t("feature_1.name"),
      description: t("feature_1.description"),
      number: "3.5",
      point: t("point_1"),
    },
    {
      img: "/image/feature2.png",
      name: t("feature_2.name"),
      description: t("feature_2.description"),
      number: "200+",
      point: t("point_2"),
    },
    {
      img: "/image/feature3.png",
      name: t("feature_3.name"),
      description: t("feature_3.description"),
      number: "99%",
      point: t("point_3"),
    },
  ];

  return (
    <div className="relative flex items-start justify-start">
      <div className="hidden md:block absolute h-[1200px] w-full top-[30%] -translate-y-1/2">
        <Image
          src="/image/featuresbg.png"
          alt="Gradient"
          fill
          className=""
        />
      </div>
      <Container>
        <div className="min-h-[2500px] lg:min-h-[1000px] flex flex-col justify-start">
          <h1 className="pb-[90px] text-center font-actay text-[32px] lg:text-[44px] xl:text-[64px] font-bold uppercase bg-[linear-gradient(175deg,_#EAEBFF_3.91%,_#6A8FFF_123.62%)] bg-clip-text text-transparent">
            {t("title").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-[335px] flex flex-col xl:flex-row item-center justify-center gap-5">
              {features.map((feature, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.3}}
                  viewport={{ once: true }}
                  key={feature.name} 
                  className="flex flex-col w-[335px] gap-5"
                >
                  <div className="bg-[linear-gradient(175deg,_#EAEBFF_3.91%,_#6A8FFF_123.62%)] p-[1px] rounded-lg">
                  <div className="relative overflow-hidden flex flex-col justify-start w-[333px] h-[480px] rounded-[7px] bg-[#020418]">
                    <Image
                      src={feature.img}
                      alt={feature.name}
                      width={500}
                      height={500}
                      className="w-full object-cover"
                    />
                    <div className="pl-7 pr-7 pt-8">
                      <h2 className="whitespace-pre-wrap pb-4 text-[#EAEBFF] font-actay text-center lg:text-left text-[14px] md:text-[16px] font-bold uppercase">
                          {feature.name.split(" ").map((letter, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 + i * 0.2 }} 
                              className="inline-block mr-1"
                            >
                            {letter}
                          </motion.span>
                          ))}
                        </h2>
                      <p className="text-[#EAEBFF] font-raleway text-center lg:text-left text-[12px] md:text-[14px] font-light">
                        {feature.description}
                      </p>
                    </div>
                    <div className="absolute -right-[35%] -bottom-[25%] w-[300px] h-[200px] bg-[#D4DFFF] opacity-20 blur-3xl rounded-full z-0"></div>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center gap-5">
              {features.map((feature, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.3}}
                  viewport={{ once: true }}
                  key={feature.name} 
                  className="w-[333px] h-[160px] bg-[url('/image/featurebg.png')] bg-no-repeat bg-cover bg-center rounded-lg"
                >
                  <div className="flex flex-col md:pl-7 pt-4">
                    <h2 className="font-actay text-center md:text-left text-[80px] md:text-[90px] font-bold uppercase bg-[conic-gradient(from_180deg_at_49.33%_50%,_#080218_0deg,_#254BD5_360deg)] bg-clip-text text-transparent">{feature.number}</h2>
                    <span className="font-actay text-center md:text-left text-[12px] md:text-[14px] font-bold uppercase bg-[linear-gradient(90deg,_#080218_0%,_#2462FF_116.67%)] bg-clip-text text-transparent">{feature.point}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
