import SelectLang from "../common/SelectLang";
import StarIcon from "../common/StarIcon";

export default function HeroRight() {
  return (
    <div className="order-1 lg:order-2 flex pt-[12px] flex-col lg:flex-row items-center lg:items-start gap-7">
      <div className="order-2 lg:order-1">
        <StarIcon width={48} height={48} />
      </div>
      <div className="flex justify-between order-1 lg:order-2 w-full">
        <div className="text-left lg:text-right text-[#EAEBFF] uppercase font-actay text-[20.573px] leading-[103.301%]">
          <div className="pb-[5px]">code-site</div>
          <div>ART</div>
        </div>
        <div>
          <SelectLang />
        </div>
      </div>
    </div>
  );
}