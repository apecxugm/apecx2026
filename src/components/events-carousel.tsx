"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/src/components/ui/carousel"
import EventCard from "@/src/components/event-card"
import { cn } from "@/src/lib/utils"

interface EventItem {
  title: string
  type: "competition" | "event"
  slug: string
  logo: string
}

interface EventsCarouselProps {
  items: readonly EventItem[]
}

export default function EventsCarousel({ items }: EventsCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    setCount(api.scrollSnapList().length)
    onSelect()
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  React.useEffect(() => {
    if (!api || count <= 1) return

    const interval = window.setInterval(() => {
      api.scrollNext()
    }, 2000)

    return () => {
      window.clearInterval(interval)
    }
  }, [api, count])

  return (
    <div className="flex flex-col gap-4">
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
        <CarouselContent className="-ml-4">
          {items.map((event, index) => (
            <CarouselItem key={index} className="basis-full pl-4 flex justify-center">
              <EventCard
                title={event.title}
                type={event.type}
                slug={event.slug}
                logo={event.logo}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-1">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === current
                ? "w-6 bg-secondary-100"
                : "w-2 bg-secondary-100/40"
            )}
          />
        ))}
      </div>
    </div>
  )
}
