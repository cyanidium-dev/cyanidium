import { routes } from "@/utils/routes";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");
  return (
    <ul className="fixed bottom-[65px] left-1/2 -translate-x-1/2 bg-[#e7e6f3] rounded-[4px] shadow-lg p-2 flex gap-[40px] z-[1000]">
      {routes.map((route) => (
        <li key={route.path}>
          <a 
            href={route.path} 
            className="text-[#020418] text-[14px] font-semibold uppercase px-4 py-2 rounded-[6px] hover:bg-black/10 transition"
          >
            {t(route.name)}
          </a>
        </li>
      ))}
    </ul>
  );
}
