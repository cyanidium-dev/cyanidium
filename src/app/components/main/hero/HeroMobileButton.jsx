"use client";

import Image from "next/image";

export default function HeroMobileButton({ onOpen, label }) {
  return (
    <div className="flex lg:hidden justify-center pt-7">
      <button
        onClick={onOpen}
        className="w-[310px] h-[48px] rounded-full border border-[#0F41FD] bg-[#EAEBFF] overflow-hidden text-[#020418] text-[14px] font-bold uppercase font-raleway"
        style={{ backgroundImage: "url('/image/buttonbg-2.png')" }}
      >
          {label}
      </button>
    </div>
  );
}
