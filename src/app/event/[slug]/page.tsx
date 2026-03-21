import Hero from "@/src/modules/competition/hero"
import { COMPETITION } from "./data"
import ComingSoon from "@/src/components/coming-soon"

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
      <Hero title={data.title} heroDesc={data.heroDesc} logo={data.logo} />
      <div className="py-10">
        <ComingSoon />
      </div>
    </div>
  )
}

export default Page