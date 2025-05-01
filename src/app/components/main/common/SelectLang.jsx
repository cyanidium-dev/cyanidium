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
    <div ref={ref} className="relative w-20 flex justify-end">
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

      {open && (
        <div className="absolute top-full mt-2 w-12 bg-[#020418] border border-white rounded shadow-lg">
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
      )}
    </div>
  );
}
