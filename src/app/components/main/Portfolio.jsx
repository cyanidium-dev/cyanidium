"use client";

import Container from "@/utils/Container";

import { useTranslations } from "next-intl";
import Image from "next/image"; 

export default function Portfolio() {
    const t = useTranslations("PortfolioSection");

    const sections = [
      {
        section: t("section_1"),
      },
      {
        section: t("section_2"),
      },
      {
        section: t("section_3"),
      },
      {
        section: t("section_4"),
      },
      {
        section: t("section_5"),
      },
      {
        section: t("section_6"),
      },
      {
        section: t("section_7"),
      },
      {
        section: t("section_8"),
      },
      {
        section: t("section_9"),
      },
      {
        section: t("section_10"),
      },
      {
        section: t("section_11"),
      },
    ];

    const sites = [
      {
        img: "/image/site1.png",
        name: t("site_1.name"),
        description: t("site_1.description"),
      },
      {
        img: "/image/site2.png",
        name: t("site_2.name"),
        description: t("site_2.description"),
      },
      {
        img: "/image/site3.png",
        name: t("site_3.name"),
        description: t("site_3.name"),
      },
    ];

    return (
      <div className="relative overflow-hidden">
        <div className="absolute top-[5%] md:top-[10%] left-1/2 transform -translate-x-1/2 w-[90%] h-[800px] bg-[#0F41FD] opacity-30 blur-3xl rounded-full z-10"></div>
        <div className="absolute top-[15%] md:top-[30%] left-1/2 transform -translate-x-1/2 w-full h-[800px] bg-[#020418] opacity-90 blur-3xl rounded-full z-10"></div>
        <div className="absolute rotate-2 top-[5%] md:top-[10%] left-1/2 transform -translate-x-1/2 h-[20%] lg:h-[40%] w-[120%] z-0">
          <Image
            src="/image/herobg.png"
            alt="Phone"
            fill
            className=""
          />
        </div>
        <Container>
          <div className="relative z-10 min-h-[1200px] md:min-h-[1500px] flex flex-col justify-center items-center gap-10 pl-[20px] pr-[20px] md:pl-[70px] md:pr-[70px] xl:pl-[110px] xl:pr-[110px]">
            <div className="flex items-center justify-center md:justify-between w-full">
              <h1 className="text-[#EAEBFF] text-center font-actay text-[32px] lg:text-[44px] xl:text-[64px] font-bold uppercase">
                {t("title")}
              </h1>
              <button className="hidden md:block w-[315px] h-[50px] flex-shrink-0 rounded-[32px] border border-[#9097FC] bg-[#EAEBFF]">
                <span className="text-[#020418] font-raleway text-[16px] font-bold uppercase">
                  {t("button")}
                </span>
              </button>
            </div>
            <div className="flex flex-wrap justify-between gap-4 xl:gap-9">
              {sections.map((s) => ( //поменять на ссылку
                <div key={s.section} className="text-[#EAEBFF] font-raleway text-[12px] lg:text-[16px] xl:text-[18px] font-normal">
                  <p>
                    {s.section}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col gap-20 xl:gap-12">
              {sites.map((site) => (
                <div key={site.name} className="flex flex-col gap-12">
                  <div className="hidden md:block w-full h-[1px] bg-[linear-gradient(90deg,_#4D62CA_0%,_#03072F_100%)]"></div>
                  <div className="flex flex-col items-center md:flex-row gap-11">
                    <Image
                      src={site.img}
                      alt={site.name}
                      width={500}
                      height={500}
                      className="w-[260px] object-cover"
                    />
                    <div className="flex flex-col gap-5 items-center md:items-start justify-center md:justify-center">
                      <div className="flex items-center gap-8">
                        <h2 className="text-[#EAEBFF] text-center font-actay text-[24px] lg:text-[36px] font-bold uppercase">
                          {site.name}
                        </h2>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="34"
                          viewBox="0 0 33 34"
                          fill="none"
                          className="w-[33px] h-[34px]"
                        >
                          <path
                            d="M32.3255 1.37622C32.3175 0.823995 31.8633 0.382821 31.3111 0.39083L22.3121 0.521373C21.7598 0.529385 21.3187 0.983546 21.3267 1.53577C21.3347 2.088 21.7888 2.52918 22.3411 2.52116L30.3402 2.40513L30.4563 10.4043C30.4643 10.9565 30.9184 11.3977 31.4707 11.3897C32.0229 11.3817 32.4641 10.9275 32.4561 10.3753L32.3255 1.37622ZM1.71729 33.3059L32.0429 2.0875L30.6083 0.693949L0.282711 31.9124L1.71729 33.3059Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <p className="text-[#EAEBFF] font-raleway text-center md:text-left text-[14px] lg:text-[18px] font-normal">
                        {site.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="block md:hidden w-[310px] h-[50px] flex-shrink-0 rounded-[32px] border border-[#9097FC] bg-[#EAEBFF]">
                <span className="text-[#020418] font-raleway text-[14px] font-bold uppercase">
                  {t("button")}
                </span>
              </button>
          </div>
        </Container>
      </div>
    );
  }