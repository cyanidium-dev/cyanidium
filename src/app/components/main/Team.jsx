"use client";

import Container from "@/utils/Container";
import { GoArrowUpRight  } from "react-icons/go";

import { useTranslations } from "next-intl";

export default function Team() {
    const t = useTranslations("TeamSection");
    const teamMembers = [
      {
        name: 'FEDIR ALPATOV',
        position: 'Full-Stack Developer',
        description: 'Creating a website for selling courses is a complex process that includes several key stages. Each of them is aimed at ensuring user convenience and effective sales.',
        img: '/image/team-member-1.jpg', 
      },
      {
        name: 'DIANA MERKOTUN',
        position: 'UI/UX Designer',
        description: 'Creating a website for selling courses is a complex process that includes several key stages. Each of them is aimed at ensuring user convenience and effective sales.',
        img: '/image/team-member-2.jpg',
      },
    ]
    
    return (
      <Container>
        <div className="px-[120px]">
          <header className="mb-[53px] inline-flex gap-[111px] align-start">
            <h2 className="inline-block text-[64px] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] text-nowrap">Our team</h2>
            <p className="mt-[9px] mb-[9px] text-[#EAEBFF] text-[18px]">We are a team of creative developers, designers, and marketers who have come together to create effective, stylish, and technologically advanced web solutions.</p>
          </header>
          <div className="grid grid-cols-2 gap-5">
            {teamMembers.map((member, index) => <article key={index} className="h-[600px] relative p-7 flex flex-col justify-end bg-gray-700 border-[1px] rounded-lg" style={{ backgroundImage: `url(${member.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <div className="absolute top-5 left-0 h-[70px] w-full bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF]">
                <p className="inline-block text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#080218] to-[#2462FF] font-bold">DEVELOPER</p>
              </div>
              <h3 className="mb-2 inline-block text-xl text-transparent bg-clip-text bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] font-bold">
                {member.name}
              </h3>
              <h4 className="mb-5 text-base text-[#EAEBFF] font-semibold">{member.position}</h4>
              <div className="flex items-end gap-[27px]">
                <p className="text-[14px] text-[#EAEBFF] font-light">
                  {member.description}
                </p>
                <div className="rounded-[6px] border-[1px]">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="iconGradient" x1="0" y1="0" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D1D7FF" />
                        <stop offset="100%" stopColor="#141E4A" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="url(#iconGradient)"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </article>)}
          </div>
        </div>
      </Container>
    );
  }