import Container from "@/src/components/ui/container";
import EventCard from "@/src/components/event-card";
import EventsCarousel from "../../components/events-carousel";
import Image from "next/image";

const COMPETITION = [
  {
    title: "Paper & Poster Competition",
    type: "competition",
    slug: "paper-and-poster"
  },
  {
    title: "Business Case Competition",
    type: "competition",
    slug: "business-case"
  },
  {
    title: "Petrosmart Competition",
    type: "competition",
    slug: "petrosmart"
  },
  {
    title: "Plan of Development",
    type: "competition",
    slug: "plan-of-development"
  },
  {
    title: "Supply Chain Management & Logistics",
    type: "competition",
    slug: "supply-chain-management-logistics"
  }
] as const;

const EVENTS = [
  {
    title: "Social Event 1",
    type: "event",
    slug: "social-event-1"
  },
  {
    title: "Social Event 2",
    type: "event",
    slug: "social-event-2"
  },
  {
    title: "Company Visit",
    type: "event",
    slug: "company-visit"
  },
  {
    title: "Talkshow",
    type: "event",
    slug: "talkshow"
  },
  {
    title: "Exhibition",
    type: "event",
    slug: "exhibition"
  },
  {
    title: "Awarding Night",
    type: "event",
    slug: "awarding-night"
  }
] as const;

const Events = () => {
  return (
    <main id="events" className="relative w-screen bg-primary-900 flex items-center justify-center">

      <Image className="floating md:block hidden absolute -left-35 top-80 h-[650px] w-auto" src="/triangles-left.webp" alt="Left Triangles" width={500} height={600} />

      <Image className="floating md:block hidden absolute -right-70 -bottom-30 h-[640px] w-auto" src="/triangles-right.webp" alt="Right Triangles" width={500} height={600} />

      <Container className="md:py-30 py-18">
        <div className="flex flex-col md:gap-15 gap-10 z-10">
          <div className="flex md:flex-row flex-col justify-between w-full gap-3 text-secondary-100 text-left md:items-center">
            <h3 className="font-bold whitespace-nowrap">Compete. Connect. Explore.</h3>
            <p className="max-w-xl">A comprehensive look at our flagship competitions and curated side events. Open to all disciplines, built for the next generation of energy leaders.</p>
          </div>

          <div className="flex flex-col gap-10">
            <section className="flex flex-col gap-[18px]">
              <h4 className="font-bold text-secondary-100">Compete at the Core.</h4>
              {/* Mobile carousel */}
              <div className="md:hidden">
                <EventsCarousel items={COMPETITION} />
              </div>
              {/* Desktop grid */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[18px]">
                {COMPETITION.map((event, index) => (
                  <EventCard key={index} title={event.title} type={event.type} slug={event.slug} />
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-[18px]">
              <h4 className="font-bold text-secondary-100">The Exhibition & Beyond.</h4>
              {/* Mobile carousel */}
              <div className="md:hidden">
                <EventsCarousel items={EVENTS} />
              </div>
              {/* Desktop grid */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[18px]">
                {EVENTS.map((event, index) => (
                  <EventCard key={index} title={event.title} type={event.type} slug={event.slug} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Events;