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
        gradient: 'from-[#D4DBFF] to-[#1E43A9]'
      },
      {
        name: t("type_2.name"),
        description: t("type_2.description"),
        price: '~$1500',
        img: '/image/web-type-2.png',
        bgImg: '/image/site-type-back.png',
        textColor: '#020418',
        gradient: 'from-[#619AEA] to-[#163D67]'
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
              {/* <div className="h-[500px] relative pl-[60px] pt-[58px] flex-[1] border-[1px] rounded-lg text-left">
                <h3 className='mb-[12px] font-actay text-[36px] text-[#EAEBFF]'>LEAD GENERATION</h3>
                <p className="mb-[30px] text-[20px] text-[#EAEBFF]">Application, services, information sites</p>
                <strong className="inline-block text-[52px] text-transparent bg-clip-text bg-gradient-to-b from-[#D4DBFF] to-[#1E43A9]  font-actay">~$380</strong>
                <img src="/image/web-type-1.png" className="absolute bottom-0 right-0" alt="Web image"/>
              </div>
              <div className="flex-[1] relative pl-[60px] pt-[58px] border-[1px] rounded-lg text-left" style={{backgroundImage: 'url(/image/site-type-back.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                <h3 className='mb-[12px] font-actay text-[36px] text-[#020418]'>SITE SALES</h3>
                <p className="mb-[30px] text-[20px] text-[#020418]">E-commerce with payment systems</p>
                <strong className="inline-block text-[52px] text-transparent bg-clip-text bg-gradient-to-b from-[#619AEA] to-[#163D67]  font-actay">~$1500</strong>
                <img src="/image/web-type-2.png" className="absolute bottom-0 right-0" alt="Web image" />
              </div> */}
              {websiteTypes.map((website, index) => <div key={index} className={`h-[500px] relative pl-[60px] pt-[58px] flex-[1] border-[1px] rounded-lg text-left`} style={
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
                <h3 className={`mb-[12px] font-actay text-[36px] text-[${website.textColor}]`}>{website.name}</h3>
                  <p className={`mb-[30px] text-[20px] text-[${website.textColor}]`}>{website.description}</p>
                  <strong className={`inline-block text-[52px] text-transparent bg-clip-text bg-gradient-to-b ${website.gradient} font-actay`}>{website.price}</strong>
                  <img src={website.img} className="absolute bottom-0 right-0" alt="Web image" />
              </div>)}
            </div>
          </div>
        </Container>
      </div>
    );
  }