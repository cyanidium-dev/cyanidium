"use client";

import { useState } from "react";
import Container from "@/utils/Container";
import {motion} from 'framer-motion'
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
        link: '@FreelancerOnMondays', 
      },
      {
        name: t("developer_2.name"),
        position: t("developer_2.position"),
        description: t("developer_2.description"),
        infiniteLoop: t("developer_2.infinite_loop"),
        img: '/image/team-member-2.jpg',
        link: '@di_merk', 
      },
    ]
    
    return (
      <div className="relative overflow-hidden">
        <div className="hidden sm:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full z-0">
          <Image
            src="/image/teambg.webp"
            alt="Phone"
            fill
            className=""
          />
          </div>
        <Container>
        <div className="relative z-10 px-[25px] md:px-20 lg:px-[120px] min-h-[1300px] md:min-h-[1350px] lg:min-h-[1200px] flex flex-col justify-center">
          <header className="mb-10 md:mb-[47px] lg:mb-[53px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[111px] align-start">
            <motion.h2 initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3}}
                  viewport={{ once: true }} className="font-actay inline-block text-[32px] md:text-5xl lg:text-[64px] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] text-nowrap">
                  {t('title')}
            </motion.h2>
            <motion.p initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3}}
                  viewport={{ once: true }} className="font-raleway mt-[9px] mb-[9px] text-[#EAEBFF] text-[14px] md:text-base lg:text-[18px]">{t("description")}</motion.p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {teamMembers.map((member, index) => (
            <motion.article
            initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.3}}
                  viewport={{ once: true }}
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
                              className="font-raleway inline-block text-xl md:text-[28px] lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#080218] to-[#2462FF] font-bold mr-4 uppercase"
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
                  <motion.h3 initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.3}}
                  viewport={{ once: true }} className="mb-2 inline-block text-base md:text-[18px] lg:text-xl font-actay text-transparent bg-clip-text bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] font-bold uppercase">
                    {member.name}
                  </motion.h3>
                  <motion.h4 initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.3}}
                  viewport={{ once: true }} className="font-raleway mb-5 text-sm md:text-[15px] lg:text-base text-[#EAEBFF] font-semibold">{member.position}</motion.h4>
                  <div className="flex items-center gap-[27px]">
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 + index * 0.3 }}
                    viewport={{ once: true }}
                    className="font-raleway text-xs/[18px] md:text-[13px]/[18px] lg:text-[14px]/[18px] text-[#EAEBFF] font-light md:pr-[55px] lg:pr-[80px]"
                  >
                    {member.description}
                  </motion.p>

                  <a
                    href={`https://t.me/${member.link.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-0 top-0 md:right-0 md:top-[65%] inline-block w-[44px] h-[44px] md:w-[52px] md:h-[52px] lg:h-[60px] lg:w-[60px] "
                  >
                    <img
                      className="w-full h-full object-contain"
                      src="/icons/link-arrow.png"
                      alt="Link icon"
                    />
                  </a>
                </div>
                </div>
              </div>
            </motion.article>
          ))}
          </div>
          </div>
        </Container>
      </div>
    );
  }