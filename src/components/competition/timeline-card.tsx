import type { TimelineItem } from "@/src/app/(navbar)/competition/[slug]/data";
import Image from "next/image";

interface TimelineCardProps {
  item: TimelineItem;
}

const TimelineCard = ({ item }: TimelineCardProps) => {
  return (
    <article className="relative md:h-[426px] h-[346px] w-[207px] md:w-[264px] overflow-hidden border-4 border-secondary-400 bg-secondary-200 p-6">
      <div className="relative z-10 flex h-full flex-col">
        <h4 className="text-[22px] md:text-[26px] font-bold text-neutral-1000">
          {item.date}
        </h4>
        <div className="h-px w-33 my-2 bg-neutral-1000" />
        <p className="md:text-lg text-neutral-1000">{item.title}</p>
      </div>

      <Image src="/globe.webp" width={580} height={630} alt="" className="absolute -right-20 -bottom-10" />

    </article>
  );
};

export default TimelineCard;
