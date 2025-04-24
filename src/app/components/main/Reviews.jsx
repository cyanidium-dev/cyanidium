"use client";

import Container from "@/utils/Container";

import { useTranslations } from "next-intl";

export default function Reviews() {
    const t = useTranslations("ReviewsSection");
    return (
      <Container>
        <div className="px-[120px]">
          <header>
            <h2 className="inline-block text-[64px] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#EAEBFF] to-[#6A8FFF] text-center">REVIEWS - WHAT OUR CLIENTS SAY ABOUT US</h2>
          </header>
          <div className="flex gap-5">
            <div className="max-w-[333px] flex flex-col border-[1px] rounded-lg">
              <header className="flex gap-8 items-center p-[32px]">
                <img className="w-[74px] h-[74px] rounded-[50%]" src="/image/ava-1.jpg" alt="Avatar"/>
                <div>
                  <p className="mb-2 text-[20px] font-bold text-[#FFFFFF]">VOLODYMYR</p>
                  <p className="text-[14px] text-[#FFFFFF]">Founder Tatarka</p>
                </div>
              </header>
              <div className="py-[22px] pl-[32px] pr-[60px] relative bg-[#EAEBFF]">
                <h3 className="mb-2 text-[16px] text-black font-semibold">OUR TASK</h3>
                <p className="text-[14px] text-[#020418]">Develop a food delivery marketplace and landing page for a franchise</p>
                <img src="/icons/star.png" className="absolute top-3 right-3" alt="Star icon" />
              </div>
              <div className="px-[32px] py-[48px] text-[14px] text-[#EAEBFF] font-light">
                “A professional team that truly knows their craft! We ordered a corporate website, and the result exceeded our expectations. The design is stylish, everything runs smoothly, and most importantly, it's user-friendly for our clients.”
              </div>
            </div>
            <div className="max-w-[333px] flex flex-col border-[1px] rounded-lg" style={{backgroundImage: 'url(/image/ava-image-1.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
              <header className="flex gap-8 items-center p-[32px]">
                <div>
                  <p className="mb-2 text-[20px] font-bold text-[#FFFFFF]">VIKTOR</p>
                  <p className="text-[14px] text-[#FFFFFF]">Founder Real Estate</p>
                </div>
              </header>
              <div className="mt-auto mb-[10px] py-[22px] pl-[32px] pr-[60px]">
                <h3 className="mb-2 text-[16px] text-[#EAEBFF] font-semibold">OUR TASK</h3>
                <p className="text-[14px] text-[#EAEBFF]">Develop a food delivery marketplace and landing page for a franchise</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }