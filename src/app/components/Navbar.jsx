"use client";

import { routes } from "@/utils/routes";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const currentRoute = pathname.split("/")[2] || "/";

  return (
    <ul className="p-2 h-[55px] fixed bottom-[65px] left-1/2 -translate-x-1/2 bg-[#e7e6f3] rounded-[4px] shadow-lg flex gap-[40px] z-[1000] items-center justify-center">
      {routes.map((route) => {
        const routeSlug = route.path === "/" ? "/" : route.path.replace("/", "");
        const isActive = currentRoute === routeSlug;
        console.log(currentRoute)
        console.log(route.path)
        console.log(isActive)
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
