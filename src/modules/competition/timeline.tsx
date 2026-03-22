"use client";

import * as React from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/src/components/ui/carousel";
import Container from "@/src/components/ui/container";
import type { TimelineItem } from "@/src/app/(navbar)/competition/[slug]/data";
import TimelineCard from "@/src/components/competition/timeline-card";
import PrizeCard from "@/src/components/competition/prize-card";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import Image from "next/image";

interface CompetitionTimelineProps {
  timeline: TimelineItem[];
  bestThing?: string;
}

const BASE_PRIZES = [
  { amount: "IDR 5,000,000 / USD 294", label: "Champion", variant: "champion" as const },
  { amount: "IDR 3,500,000 / USD 206", label: "1st Runner Up", variant: "regular" as const },
  { amount: "IDR 2,000,000 / USD 117", label: "2nd Runner Up", variant: "regular" as const },
];

const CompetitionTimeline = ({ timeline, bestThing }: CompetitionTimelineProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [count, setCount] = React.useState(0);

  const prizeCards = React.useMemo(() => {
    if (!bestThing || !bestThing.trim()) {
      return BASE_PRIZES;
    }

    return [
      ...BASE_PRIZES,
      {
        amount: "IDR 500,000 / USD 29",
        label: `Best ${bestThing}`,
        variant: "regular" as const,
      },
    ];
  }, [bestThing]);

  React.useEffect(() => {
    if (!api) return;

    const updateCount = () => {
      setCount(api.scrollSnapList().length);
    };

    updateCount();
    api.on("reInit", updateCount);

    return () => {
      api.off("reInit", updateCount);
    };
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-primary-900">
      <Image src="/timeline-background.svg" alt="Timeline Background" fill className="object-cover object-center" />
      <Image className="shoot-left md:block hidden absolute -left-70 bottom-30 h-[650px] w-auto z-10" src="/triangles-left.webp" alt="Left Triangles" width={500} height={600} />
      <Image className="shoot-right md:block hidden absolute -right-80 bottom-10 h-[640px] w-auto z-10" src="/triangles-right.webp" alt="Right Triangles" width={500} height={600} />

      <Container className="relative z-10 flex flex-col gap-16 py-16 md:py-20">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h3 className="text-3xl font-bold text-secondary-100 md:text-[42px]">The Road to Innovation.</h3>
            <p className="text-secondary-100 md:text-lg">
              Don&apos;t miss a single beat. Follow the official competition&apos;s schedule.
            </p>
          </div>

          <div className="relative">
            <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
              <CarouselContent className="">
                {timeline.map((item, index) => (
                  <CarouselItem
                    key={`${item.date}-${index}`}
                    className="basis-[58%] pl-3 md:basis-[26%] xl:basis-[24%] md:pl-4"
                  >
                    <TimelineCard item={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {count > 1 ? (
              <>
                <Button
                  type="button"
                  variant="dark-blue"
                  size="icon"
                  aria-label="Previous timeline item"
                  onClick={() => api?.scrollPrev()}
                  className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 md:-translate-x-4"
                >
                  <CaretLeft size={20} weight="bold" />
                </Button>
                <Button
                  type="button"
                  variant="dark-blue"
                  size="icon"
                  aria-label="Next timeline item"
                  onClick={() => api?.scrollNext()}
                  className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-1/2 md:translate-x-4"
                >
                  <CaretRight size={20} weight="bold" />
                </Button>
              </>
            ) : null}
          </div>

        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h3 className="text-3xl font-bold text-secondary-100 md:text-[42px]">The Rewards of Excellence.</h3>
            <p className="text-secondary-100 md:text-lg">
              Compete for prizes, official certificates, and exclusive industry networking.
            </p>
          </div>

          <div className={cn("grid gap-4", prizeCards.length === 3 ? "grid-cols-4 md:grid-cols-4" : "grid-cols-1 md:grid-cols-14")}>
            {prizeCards.map((item, index) => {
              const isThree = prizeCards.length === 3;
              const isChampion = item.variant === "champion";
              const colSpan = isThree ? isChampion ? "col-span-2" : "col-span-1" : isChampion ? "md:col-span-5" : "md:col-span-3";

              return (
                <div
                  key={`${item.label}-${index}`}
                  className={cn(colSpan)}
                >
                  <PrizeCard
                    amount={item.amount}
                    label={item.label}
                    variant={item.variant}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {timeline.length === 0 ? (
          <div className="rounded-lg border border-secondary-100/25 px-5 py-4 text-secondary-100/80">
            Timeline details will be announced soon.
          </div>
        ) : null}
      </Container>
    </section>
  );
};

export default CompetitionTimeline;