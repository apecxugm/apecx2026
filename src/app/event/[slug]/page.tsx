import Hero from "@/src/modules/event/hero"
import { EVENTS } from "./data"
import ComingSoon from "@/src/components/coming-soon"
import EventDescription from "@/src/modules/event/event-description"

type Params = {
  slug: string
}

const Page = async ({ params }: { params: Promise<Params> }) => {
  const { slug } = await params
  const data = EVENTS.find(
    (item) => item.slug === slug
  )

  if (!data) {
    return <div>Not Found</div>
  }

  return (
    <div>
      <Hero title={data.title} heroDesc={data.heroDesc} logo={data.logo} />
      {Object.keys(data.desc).length > 0 && (
        <EventDescription
          about={data.about}
          date={data.date}
          location={data.location}
          topNote={data.topNote}
          bottomNote={data.bottomNote}
          cta={data.cta}
          desc={data.desc}
        />
      )}
      {data.comingSoon && (
        <div className="py-10">
          <ComingSoon />
        </div>
      )}
    </div>
  )
}

export default Page