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

  const handleSend = async () => {
    if (!phone.trim()) return;
  
    try {
      const res = await fetch("https://cyanidiumbot-production.up.railway.app/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "", // имя может быть пустым
          phone: phone,
          source: "Footer", // идентификатор источника
        }),
      });

      if (res.ok) {
        setPhone(""); // Очищаем поле ввода после успешной отправки
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
        setPhone(mask.value); // Обновляем состояние при изменении маски
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
            <h2 className="text-[24px] md:text-[32px] font-normal leading-[103.301%] uppercase text-white font-actay pb-[16px]">Code-art.dev</h2>
            <span className="text-white/80 pb-[36px] leading-relaxed text-[12px] md:text-[16px]">
              {t("Contact").split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </span>
            <div className="flex w-[310px] md:w-[325px] h-[40px] rounded-[4px] border border-[radial-gradient(circle,_#EBF0FF,_#4D62CA,_#1A1033)] bg-transparent">
              <input
                ref={inputRef}
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="px-[16px] py-2 w-full text-[#6B6E9A] font-raleway text-[12px] font-normal leading-[20px] bg-transparent"
              />
              <button onClick={handleSend} className="flex w-[92px] h-full px-[42px] py-[10px] justify-center items-center gap-[10px] shrink-0 rounded-[2px] bg-[linear-gradient(111deg,_#EAEBFF_37.36%,_#6A8FFF_182.03%)]">
                {t("Send")}
              </button>
            </div>
          </div>

          {/* Навигация и соцсети */}
          <div className="flex flex-col xl:flex-row justify-between xl:justify-start gap-[70px]">
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-actay text-[16px] font-bold leading-[103.301%] uppercase">{t("Contacts")}</h3>
              <ul className="flex flex-col gap-3 md:gap-3 text-sm uppercase font-semibold items-start">
                  <li className="text-white text-center font-raleway text-[14px] font-light leading-[18px] uppercase">+380-97-006-87-07</li>
                  <li className="text-white text-center font-raleway text-[14px] font-light leading-[18px] uppercase">cyanidiumdev@gmail.com</li>
              </ul>
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
              {Array(10).fill("Code-art.dev").map((text, i) => (
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
