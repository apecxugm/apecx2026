import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";

interface EventCardProps {
  title: string;
  type: string;
  slug: string;
};

const EventCard = ({ title, type, slug }: EventCardProps) => {
  return (
    <div className="w-full relative overflow-hidden max-w-[400px] h-[242px] bg-neutral-100 border-4 border-tertiary-100 flex items-center justify-center">
      <Image src="/globe.webp" alt="Event Image" width={330} height={330} className="absolute -bottom-30 -right-35" />
      <div className="justify-between items-end flex flex-row self-end w-full px-4 py-5 z-10">
        <h4>{title}</h4>
        <Link href={`/${type}/${slug}`}>
          <Button variant="dark-blue" size="fit" className="z-10">
            Read More <ArrowRightIcon size={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default EventCard;