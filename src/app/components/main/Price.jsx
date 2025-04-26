"use client";

import Container from "@/utils/Container";
import { color } from "framer-motion";

import { useTranslations } from "next-intl";

export default function Price() {
    const t = useTranslations("PriceSection");
    const websiteTypes = [
      {
        name: t("type_1.name"),
        description: t("type_1.description"),
        price: '~$380',
        img: '/image/web-type-1.png',
        textColor: '#EAEBFF',
        gradient: 'from-[#D4DBFF] to-[#1E43A9]',
        shadow: '#0d1943'
      },
      {
        name: t("type_2.name"),
        description: t("type_2.description"),
        price: '~$1500',
        img: '/image/web-type-2.png',
        bgImg: '/image/site-type-back.png',
        textColor: '#020418',
        gradient: 'from-[#619AEA] to-[#163D67]',
        shadow: '#92a6e5'
      },
    ]
    return (
      <div className="relative overflow-hidden">
        <div className="absolute top-[15%] -right-[10%] w-[500px] h-[600px] bg-[#223AD5] opacity-20 blur-[280px] rounded-full z-0"></div>
      <Container>
        <div className="px-[120px] min-h-[1000px]">
            <header className="mb-[72px] text-center">
              <h2 className="text-[64px] font-bold font-actay text-[#EAEBFF] uppercase">{t("title")}</h2>
              <p className="text-[32px] text-[#8AA2FF] uppercase">{t("description")}</p>
            </header>
            <div className="flex gap-5">
            {websiteTypes.map((website, index) => (
              <div key={index} className="h-[500px] p-[1px] flex-1 bg-[radial-gradient(ellipse_at_top_left,_#F0EEFF,_#6D65A3,_#1A1033)] rounded-lg overflow-hidden">
                <div className="relative h-full rounded-[7px] overflow-hidden pl-[60px] pt-[58px]" style={
                  website.bgImg
                    ? {
                        backgroundImage: "url(/image/site-type-back.png)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }
                    : {
                        backgroundColor: "#020418",
                      }
                }>
                  {/* Тень СНАЧАЛА */}
                  <div
                    className="absolute left-[40%] bottom-[-5%] w-[370px] h-[270px] blur-3xl rounded-full opacity-100"
                    style={{ backgroundColor: website.shadow, zIndex: 1 }}
                  ></div>

                  {/* Контент */}
                  <div className="relative z-10">
                    <h3 className="mb-[12px] font-actay text-[36px] uppercase" style={{ color: website.textColor }}>
                      {website.name}
                    </h3>
                    <p className="mb-[30px] text-[20px]" style={{ color: website.textColor }}>
                      {website.description}
                    </p>
                    <strong className={`inline-block text-[52px] text-transparent bg-clip-text bg-gradient-to-b ${website.gradient} font-actay`}>
                      {website.price}
                    </strong>
                  </div>

                  {/* Картинка */}
                  <img src={website.img} className="absolute bottom-0 right-0 z-20" alt="Web image" />
                </div>
              </div>
            ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }