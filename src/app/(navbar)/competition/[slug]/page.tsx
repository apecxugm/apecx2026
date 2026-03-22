import Hero from "@/src/modules/competition/hero"
import { COMPETITION } from "./data"
// import ComingSoon from "@/src/components/coming-soon"
import CompetitionTheme from "@/src/modules/competition/theme"
import CompetitionTimeline from "@/src/modules/competition/timeline"
import Guidebook from "@/src/modules/competition/guidebook"
import FAQ from "@/src/modules/competition/faq"
import FinalCTA from "@/src/modules/competition/final-cta"

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
      <Guidebook
        guidebook={data.guidebook}
        themeGuidebook={data.themeGuidebook}
        coreTheme={data.coreTheme}
        subTheme={data.subTheme}
        themeBreakdown={data.themeBreakdown}
        rules={data.rules}
        assessmentCriteriaGroups={data.assessmentCriteriaGroups}
        assessmentCriteriaNote={data.assessmentCriteriaNote}
        abstractCriteria={data.abstractCriteria}
        fullPaperCriteria={data.fullPaperCriteria}
        preliminaryCriteria={data.preliminaryCriteria}
        finalCriteria={data.finalCriteria}
        requiredDocument={data.requiredDocument}
        preliminaryPayment={data.preliminaryPayment}
      />
      <FAQ faq={data.faq} contactPerson={data.contactPerson} cpLink={data.cpLink} />
      <FinalCTA title={data.title} guidebook={data.guidebook} />
      {/* <div className="py-10">
        <ComingSoon />
      </div> */}
    </div>
  )
}

export default Page