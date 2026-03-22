import Image from "next/image";

interface PrizeCardProps {
  amount: string;
  label: string;
  variant?: "champion" | "regular";
}

const PrizeCard = ({ amount, label, variant = "regular" }: PrizeCardProps) => {
  const isChampion = variant === "champion";

  if (isChampion) {
    return (
      <article className="relative h- md:h-50 overflow-hidden border-4 border-primary-500 bg-primary-200 p-5">
        <div className="max-w-3xs relative z-10 pr-18">
          <p className="text-[22px] md:text-[26px] font-bold leading-[1.12] text-tertiary-800">{amount}</p>
          <div className="my-2 h-px w-33 bg-neutral-1000" />
          <p className="md:text-lg text-neutral-1000">{label}</p>
        </div>
        <Image src="/champion.svg" width={300} height={400} alt="" className="absolute z-2 md:w-69 w-40 bottom-0 -right-5" />
        <Image src="/champion-background.webp" width={200} height={200} alt="" className="absolute object-cover w-full md:w-auto h-full bottom-0 right-0" />
      </article>
    );
  }

  return (
    <article className="relative md:h-50 overflow-hidden border-4 border-primary-500 bg-primary-200 p-5">
      <div className="relative z-10">
        <p className="text-[22px] md:text-[26px] font-bold leading-[1.12] text-tertiary-800">{amount}</p>
        <div className="my-2 h-px w-33 bg-neutral-1000" />
        <p className="md:text-lg text-neutral-1000">{label}</p>
      </div>
      <Image src="/regular-background.webp" width={200} height={200} alt="" className="absolute h-auto w-full object-cover bottom-0 right-0" />
    </article>
  );
};

export default PrizeCard;
