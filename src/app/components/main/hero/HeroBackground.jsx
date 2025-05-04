import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[1280px] z-0">
        <div className="relative w-full">
          <Image
            className="absolute z-[30] left-1/2 top-1/2 translate-y-1/2 -translate-x-1/2 pr-[140px]"
            width={855}
            height={426.5}
            src="/image/laptop2.gif"
            alt="Laptop Gif"
            loading="lazy"
          />
        </div>
        <Image
          src="/image/herobg-2.png"
          alt="Hero Background Desktop"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="block md:hidden absolute left-1/2 transform -translate-x-1/2 h-full w-full z-0">
        <Image
          src="/image/herobg-mobile.png"
          alt="Hero Background Mobile"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="block absolute h-full w-[700px] left-[200px] top-[66.7%] -translate-y-1/2 z-[30]" />
    </>
  );
}
