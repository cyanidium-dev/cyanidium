"use client";

import { useState } from "react";
import Container from "@/utils/Container";
import { BsArrowUpRightSquare  } from "react-icons/bs";

import { useTranslations } from "next-intl";

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
      <Container>
        <div className="px-[120px] min-h-[1000px]">
          <header className="mb-[53px] inline-flex gap-[111px] align-start">
            <h2 className="inline-block text-[64px] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] text-nowrap">Our team</h2>
            <p className="mt-[9px] mb-[9px] text-[#EAEBFF] text-[18px]">We are a team of creative developers, designers, and marketers who have come together to create effective, stylish, and technologically advanced web solutions.</p>
          </header>
          <div className="grid grid-cols-2 gap-5">
          {teamMembers.map((member, index) => (
            <article
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`h-[600px] relative p-[1px] rounded-lg transition-all duration-300 bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] ${
                hoveredIndex === null
                  ? "bg-gray-700"
                  : hoveredIndex === index
                  ? "brightness-100 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                  : "brightness-50"
              } cursor-pointer`}
            >
                             <div className="absolute top-5 left-0 h-[70px] w-full flex items-center bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] overflow-hidden z-50">
                  <div className="animate-marquee flex w-max">
                    {[...Array(2)].map((_, idx) => (
                      <div key={idx} className="flex">
                        {Array(10)
                          .fill(member.infiniteLoop)
                          .map((text, i) => (
                            <span
                              key={`${idx}-${i}`}
                              className="inline-block text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#080218] to-[#2462FF] font-bold mr-4 uppercase"
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
              }}>
                <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-b from-transparent to-[#03051A] rounded-[7md]"></div>
                <div className="z-20">
                  <h3 className="mb-2 inline-block text-xl font-actay text-transparent bg-clip-text bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] font-bold uppercase">
                    {member.name}
                  </h3>
                  <h4 className="mb-5 text-base text-[#EAEBFF] font-semibold">{member.position}</h4>
                  <div className="flex items-center gap-[27px]">
                    <p className="text-[14px] text-[#EAEBFF] font-light">
                      {member.description}
                    </p>
                    <img src="/icons/link-arrow.png" alt="Link icon" />
                  </div>
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>
      </Container>
    );
  }