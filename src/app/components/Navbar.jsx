"use client";

import { routes } from "@/utils/routes";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [hideNavbar, setHideNavbar] = useState(false);

  const currentRoute = pathname.split("/")[2] || "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      // Если скролл + высота окна >= полной высоты страницы
      if (scrollTop + windowHeight >= fullHeight - 500) {
        setHideNavbar(true); // Прячем навбар
      } else {
        setHideNavbar(false); // Показываем навбар
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul className={`p-2 h-[55px] fixed bottom-[65px] left-1/2 -translate-x-1/2 bg-[#e7e6f3] rounded-[4px] shadow-lg flex gap-[40px] z-[1000] items-center justify-center" transition-all duration-300 
      ${hideNavbar ? "opacity-0 pointer-events-none" : "opacity-100"}
    `}>
      {routes.map((route) => {
        const routeSlug = route.path === "/" ? "/" : route.path.replace("/", "");
        const isActive = currentRoute === routeSlug;
        
        return (
          <li className={`flex items-center justify-center p-3 rounded-[4px] ${
            isActive
              ? "bg-[#020418] text-white"
              : "text-[#020418] hover:text-[#020418]"
          }`} key={route.path}>
            <a 
              href={route.path} 
              className="text-[14px] font-raleway font-semibold uppercase whitespace-nowrap"
            >
              {t(route.name)}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
