"use client";

import Image from "next/image";

export default function HeroMobileButton({ onOpen, label }) {
  return (
    <div className="flex lg:hidden justify-center pt-7">
      <button
        onClick={onOpen}
        className="relative w-[310px] h-[48px] rounded-full border border-[#0F41FD] bg-[#EAEBFF] overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full z-0">
          <Image
            src="/image/buttonbg-1.png"
            alt="Hero Background Mobile"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-[#020418] text-[14px] font-bold uppercase font-raleway">
          {label}
        </div>
      </button>
    </div>
  );
}
