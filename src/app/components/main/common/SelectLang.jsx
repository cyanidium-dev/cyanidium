"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const options = [
  { value: "en", label: "EN" },
  { value: "uk", label: "UK" },
  { value: "ru", label: "RU" },
];

export default function SelectLang() {
  const router = useRouter();
  const localeActive = useLocale();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("en");
  const ref = useRef(null);

  useEffect(() => {
    if (localeActive) {
      setSelected(localeActive);
    }
  }, [localeActive]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value) => {
    setSelected(value);
    router.replace(`/${value}`);
    setOpen(false);
  };

  return (
    <>
      {/* Оверлей з анімацією */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 bg-black/85 z-40 transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />
  
      {/* Селектор */}
      <div ref={ref} className="relative w-20 flex justify-end z-50">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex gap-1 items-center text-white border border-white rounded uppercase text-[16px] font-actay"
        >
          {selected}
          {open ? (
            <FaChevronUp className="text-white" size={12} />
          ) : (
            <FaChevronDown className="text-white" size={12} />
          )}
        </button>
  
        {/* Меню з плавною появою */}
        <div
          className={`
            absolute top-full mt-2 w-16 bg-[#020418] border border-white rounded shadow-lg
            transition-all duration-300 origin-top
            ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
          `}
        >
          {options.map(({ value, label }) => (
            <div
              key={value}
              onClick={() => handleSelect(value)}
              className="py-1 text-white hover:bg-white/10 cursor-pointer text-center text-[16px] font-actay"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
