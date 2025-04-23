import { routes, footerLinks, socialLinks } from "@/utils/routes";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="flex flex-col items-center bg-[linear-gradient(30deg,_#05000E_10%,_#0B133F_60%,_#16237A_140%)]">
      <div className="pt-[80px] w-[1280px] overflow-hidden">
        {/* Левая часть */}
        <div className="flex justify-between px-[120px] pb-[70px]">
          <div className="flex flex-col items-start self-stretch">
            <h2 className="text-[32px] font-normal leading-[103.301%] uppercase text-white font-actay pb-[16px]">Cyanidium.dev</h2>
            <span className="text-white/80 pb-[36px] leading-relaxed">
              {t("Contact").split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </span>
            {/* Градиент не работает */}
            <div className="flex w-[325px] h-[40px] rounded-[4px] border border-[radial-gradient(circle,_#EBF0FF,_#4D62CA,_#1A1033)] bg-transparent">
              <input
                type="text"
                placeholder={t("Phone")}
                className="px-[16px] py-2 w-full text-[#6B6E9A] font-raleway text-[12px] font-normal leading-[20px] bg-transparent" 
              />
              <button className="flex w-[92px] h-[38px] px-[42px] py-[10px] justify-center items-center gap-[10px] shrink-0 rounded-[4px] bg-[linear-gradient(111deg,_#EAEBFF_37.36%,_#6A8FFF_182.03%)]">
                {t("Send")}
              </button>
            </div>
          </div>

          {/* Навигация и соцсети */}
          <div className="flex flex-col">
            <ul className="flex justify-end flex-wrap gap-10 text-sm uppercase font-semibold">
              {routes.map((route) => (
                <li key={route.path}>
                  <a href={route.path} className="text-white font-raleway text-[14px] font-semibold uppercase">
                  {t(route.name)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-end items-center gap-[18px] mt-[24px]">
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
      <div className="w-full overflow-hidden">
        <div className="animate-marquee flex w-max">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex">
              {Array(10).fill("Cyanidium.dev").map((text, i) => (
                <span
                  key={`${idx}-${i}`}
                  className="font-actay text-[150px] font-bold uppercase bg-[linear-gradient(175deg,_#EAEBFF_3.91%,_#6A8FFF_123.62%)] bg-clip-text text-transparent mr-[100px]"
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
