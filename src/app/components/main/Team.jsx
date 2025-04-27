"use client";

import { useState } from "react";
import Container from "@/utils/Container";

import { useTranslations } from "next-intl";
import Image from "next/image"; 

export default function Team() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const t = useTranslations("TeamSection");
    const teamMembers = [
      {
        name: t("developer_1.name"),
        position: t("developer_1.position"),
        description: t("developer_1.description"),
        infiniteLoop: t("developer_1.infinite_loop"),
        img: '/image/team-member-1.jpg', 
      },
      {
        name: t("developer_2.name"),
        position: t("developer_2.position"),
        description: t("developer_2.description"),
        infiniteLoop: t("developer_2.infinite_loop"),
        img: '/image/team-member-2.jpg',
      },
    ]
    
    return (
      <div className="relative overflow-hidden">
        <div className="absolute top-[10%] -rotate-12 left-1/2 transform -translate-x-1/2 w-[70%] h-[800px] bg-[#0F41FD] opacity-30 blur-3xl rounded-full z-10"></div>
        <div className="absolute top-[10%] -rotate-12 left-1/2 transform -translate-x-1/2 w-[50%] h-[800px] bg-[#020418] opacity-90 blur-3xl rounded-full z-10"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 rotate-12 h-[70%] w-[120%] z-0">
          <Image
            src="/image/herobg.png"
            alt="Phone"
            fill
            className=""
          />
          </div>
        <Container>
        <div className="relative z-10 px-[25px] md:px-20 lg:px-[120px] min-h-[1300px] md:min-h-[1350px] lg:min-h-[1200px]">
          <header className="mb-10 md:mb-[47px] lg:mb-[53px] flex flex-col lg:flex-row gap-5 lg:gap-[111px] align-start">
            <h2 className="inline-block text-[32px] md:text-5xl lg:text-[64px] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] text-nowrap">Our team</h2>
            <p className="mt-[9px] mb-[9px] text-[#EAEBFF] text-[14px] md:text-base lg:text-[18px]">We are a team of creative developers, designers, and marketers who have come together to create effective, stylish, and technologically advanced web solutions.</p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {teamMembers.map((member, index) => (
            <article
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`h-[440px] md:h-[520px] lg:h-[600px] relative p-[1px] rounded-lg transition-all duration-300 bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] ${
                hoveredIndex === null
                  ? "bg-gray-700"
                  : hoveredIndex === index
                  ? "brightness-100 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                  : "brightness-50"
              } cursor-pointer`}
            >
                <div className="absolute top-5 left-0 h-[43px] md:h-[61px] lg:h-[70px] w-full flex items-center bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] overflow-hidden z-50">
                  <div className="animate-marquee flex w-max">
                    {[...Array(2)].map((_, idx) => (
                      <div key={idx} className="flex">
                        {Array(10)
                          .fill(member.infiniteLoop)
                          .map((text, i) => (
                            <span
                              key={`${idx}-${i}`}
                              className="inline-block text-xl md:text-[28px] lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#080218] to-[#2462FF] font-bold mr-4 uppercase"
                            >
                              {text}
                            </span>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              <div className={`h-full w-full relative flex flex-col justify-end overflow-hidden rounded-[7px] p-7`}               
              style={{
                backgroundImage: `url(${member.img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                objectFit: "cover"
              }}>
                <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-b from-transparent to-[#03051A] rounded-[7md]"></div>
                <div className="z-20 relative">
                  <h3 className="mb-2 inline-block text-base md:text-[18px] lg:text-xl font-actay text-transparent bg-clip-text bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] font-bold uppercase">
                    {member.name}
                  </h3>
                  <h4 className="mb-5 text-sm md:text-[15px] lg:text-base text-[#EAEBFF] font-semibold">{member.position}</h4>
                  <div className="flex items-center gap-[27px]">
                    <p className="text-xs md:text-[13px] lg:text-[14px] text-[#EAEBFF] font-light">
                      {member.description}
                    </p>
                    <img className="absolute top-0 right-0 w-[44px] h-[44px] md:w-[52px] md:h-[52px] lg:h-[60px] lg:w-[60px] md:static" src="/icons/link-arrow.png" alt="Link icon" />
                  </div>
                </div>
              </div>
            </article>
          ))}
          </div>
          </div>
        </Container>
      </div>
    );
  }