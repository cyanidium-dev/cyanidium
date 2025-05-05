"use client";

import { routes, footerLinks, socialLinks } from "@/utils/routes";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import IMask from "imask";
import { Button, useDisclosure } from "@heroui/react"


import SuccessModal from "../components/modals/SuccessModal";

export default function Footer() {
  const t = useTranslations("Footer");

  const [phone, setPhone] = useState("");
  const inputRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isError, setIsError] = useState(false);

  const handleSend = async () => {
    const trimmedPhone = phone.trim();
    if (!trimmedPhone || trimmedPhone.length !== 17) {
      setIsError(true);
      return;
    }

    setIsError(false);
  
    try {
      const res = await fetch("https://cyanidiumbot-production.up.railway.app/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "", 
          phone: phone,
          source: "Footer", 
        }),
      });

      if (res.ok) {
        setPhone(""); 
        setIsError(false);
        onOpen();
      }
    } catch (err) {
      console.error("Помилка запиту:", err);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      const maskOptions = {
        mask: "+38(000)000-00-00",
      };
      const mask = IMask(inputRef.current, maskOptions);
      mask.on("accept", () => {
        setPhone(mask.value); 
      });
    }
  }, []);

  return (
    <footer className="flex flex-col items-center bg-[linear-gradient(30deg,_#05000E_10%,_#0B133F_60%,_#16237A_140%)]">
      <SuccessModal isOpen={isOpen} onClose={onClose} />
      <div className="pt-[80px] xl:w-[1280px] overflow-hidden">
        {/* Левая часть */}
        <div className="flex flex-col xl:flex-row gap-10 justify-between px-[20px] md:px-[120px] pb-[70px]">
          <div className="flex flex-col items-start self-stretch">
            <h2 className="text-[24px] md:text-[32px] font-normal leading-[103.301%] uppercase text-white font-actay pb-[16px]">code-site.art</h2>
            <span className="font-raleway text-white/80 pb-[36px] leading-relaxed text-[12px] md:text-[13px]/[18px] lg:text-[14px]/[18px]">
              {t("Contact").split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </span>
            <div className="p-[1px] rounded-[5px] bg-[linear-gradient(190deg,_rgba(235,_240,_255,_1)_12%,_rgba(77,_98,_202,_1)_77%,_rgba(26,_16,_51,_1)_100%)]">
              <div className="flex w-[310px] md:w-[325px] h-[40px] rounded-[4px] bg-[#080218]">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={t("Phone")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-[16px] py-2 w-full text-[#6B6E9A] font-raleway text-[12px] font-normal leading-[20px] bg-transparent placeholder-[#6B6E9A]"
                />
                <button onClick={handleSend} className="font-raleway flex text-[14px] w-[88px] h-full justify-center items-center gap-[10px] shrink-0 rounded-[2px] bg-[linear-gradient(111deg,_#EAEBFF_37.36%,_#6A8FFF_182.03%)]">
                  <span className="bg-[linear-gradient(to_right,_#080218_50%,_#2462FF_100%)] inline-block text-transparent bg-clip-text">{t("Send")}</span>
                </button>
              </div>
            </div>
            {isError && (
              <p className="text-red-500 text-[12px] mt-2">{t("Error")}</p>
            )}
          </div>

          {/* Навигация и соцсети */}
          <div className="flex flex-col xl:flex-row justify-between xl:justify-start gap-[70px]">
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-actay text-[16px] font-bold leading-[103.301%] uppercase">{t("Contacts")}</h3>
              <div className="flex flex-col gap-3 md:gap-3 uppercase font-semibold items-start">
                <a href="tel:+380970068707" className="text-white text-center font-montserrat text-[14px] font-normal leading-[18px] uppercase hover:text-sky-600 transition-colors duration-200">
                  +380-97-006-87-07
                </a>
                <a href="mailto:cyanidiumdev@gmail.com" className="text-white text-center font-raleway text-[14px] font-light leading-[18px] uppercase hover:text-sky-600 transition-colors duration-200">
                  cyanidiumdev@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-actay text-[16px] font-bold leading-[103.301%] uppercase">{t("Media")}</h3>  
              <div className="flex justify-start xl:justify-end items-center gap-[18px]">
                {socialLinks.map((social) => (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className="animate-marquee flex w-max">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex">
              {Array(10).fill("code-site.art").map((text, i) => (
                <span
                  key={`${idx}-${i}`}
                  className="font-actay text-[50px] lg:text-[100px] xl:text-[150px] font-bold uppercase bg-[linear-gradient(175deg,_#EAEBFF_3.91%,_#6A8FFF_123.62%)] bg-clip-text text-transparent mr-[100px]"
                >
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
