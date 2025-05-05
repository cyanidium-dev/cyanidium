import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden xl:block absolute left-1/2 transform -translate-x-1/2 h-[1283px] lg:w-[1920px] z-0">
        <div className="relative w-full">
          <Image
            className="absolute z-[30] left-1/2 top-1/2 translate-y-1/2 -translate-x-1/2 pr-[140px] xl:w-[930px]"
            width={855}
            height={426.5}
            src="/image/laptop2.gif"
            alt="Laptop Gif"
            loading="lazy"
          />
        </div>
        <Image
          src="/image/herobgxl.webp"
          alt="Hero Background Desktop"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block xl:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full lg:w-full z-0">
        <div className="relative w-full">
          <Image
            className="absolute z-[30] left-1/2 top-1/2 translate-y-1/2 -translate-x-1/2 pr-[140px] lg:w-[855px]"
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

      {/* Mobile */}
      <div className="block lg:hidden absolute left-1/2 transform -translate-x-1/2 h-full w-full z-0">
        <div className="relative w-full top-[17.5%] sm:top-[8.5%] md:top-[10%]">
          <video
            className="absolute z-[30] left-1/2 top-1/2 translate-y-1/2 -translate-x-1/2 pr-[0px] w-[350px] sm:w-[500px] md:w-[640px]"
            width="855"
            height="426.5"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/image/laptop2.webm" type="video/webm" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
        <Image
          src="/image/herobg-mobile.png"
          alt="Hero Background Mobile"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Overlay (если используется) */}
      <div className="block absolute h-full w-[700px] left-[200px] top-[66.7%] -translate-y-1/2 z-[30]" />
    </>
  );
}
