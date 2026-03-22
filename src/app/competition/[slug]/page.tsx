import Hero from "@/src/modules/competition/hero"
import { COMPETITION } from "./data"
// import ComingSoon from "@/src/components/coming-soon"
import CompetitionTheme from "@/src/modules/competition/theme"
import CompetitionTimeline from "@/src/modules/competition/timeline"

type Params = {
  slug: string
}

const Page = async ({ params }: { params: Promise<Params> }) => {
  const { slug } = await params
  const data = COMPETITION.find(
    (item) => item.slug === slug
  )

  if (!data) {
    return <div>Not Found</div>
  }

  return (
    <div>
      <Hero title={data.title} logo={data.logo} />
      <CompetitionTheme title={data.title} theme={data.theme} themeDesc={data.themeDesc} />
      <CompetitionTimeline timeline={data.timeline} bestThing={data.bestThing} />
      {/* <div className="py-10">
        <ComingSoon />
      </div> */}
    </div>
  )
}

export default Page