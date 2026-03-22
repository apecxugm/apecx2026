import Container from "@/src/components/ui/container";
import { Button } from "../../components/ui/button";
import Link from "next/link";

interface EventDescriptionProps {
  about?: string;
  date: string;
  location?: string;
  topNote?: string;
  bottomNote?: string;
  cta?: string;
  desc: Record<string, string>;
}

type ParsedBlock = {
  heading?: string;
  paragraphs: string[];
  bullets: string[];
};

const parseContentBlock = (content: string): ParsedBlock => {
  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const paragraphs: string[] = [];
  const bullets: string[] = [];
  let heading: string | undefined;

  lines.forEach((line) => {
    if (line.startsWith("•")) {
      bullets.push(line.replace("•", "").trim());
      return;
    }

    if (!heading && line.endsWith(":")) {
      heading = line;
      return;
    }

    paragraphs.push(line);
  });

  return { heading, paragraphs, bullets };
};

export default function EventDescription({
  about,
  date,
  location,
  topNote,
  bottomNote,
  cta,
  desc,
}: EventDescriptionProps) {
  const dateLabel = [date, location].filter(Boolean).join(" | ");

  return (
    <section className="bg-neutral-100 py-14 md:py-20">
      <Container>
        {topNote ? (
          <p className="text-base font-medium text-[#3d3d3d]">{topNote}</p>
        ) : null}
        <div className="flex flex-col md:flex-row md:gap-15 gap-11 w-full">
          <div className="space-y-5">
            {about ? (
              <h2 className="max-w-lg whitespace-pre-line text-2xl font-bold leading-tight text-primary-900 md:text-5xl">
                {about}
              </h2>
            ) : null}
            {dateLabel ? (
              <div className="inline-flex bg-[#82228d] px-6 py-3 md:text-lg font-semibold text-white">
                {dateLabel}
              </div>
            ) : null}
            {bottomNote ? (
              <p className="text-base text-[#3d3d3d]">{bottomNote}</p>
            ) : null}
          </div>


          <div className="flex flex-col gap-11 self-end w-full max-w-2xl md:text-lg leading-relaxed text-[#2f2f2f]">
            <div className="space-y-3">
              {Object.entries(desc).map(([key, content]) => {
                const block = parseContentBlock(content);

                return (
                  <div key={key} className="space-y-1">
                    {block.heading ? (
                      <p>
                        {block.heading}
                      </p>
                    ) : null}

                    {block.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {block.bullets.length > 0 ? (
                      <ul className="list-disc pl-7">
                        {block.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="w-full items-end justify-end md:justify-start flex">
              {cta ? cta !== "TBA" ? (
                <Link href={cta}>
                  <Button variant="dark-blue" size="fit" className="!text-sm">
                    Limited spots available, Register Now!
                  </Button>
                </Link>
              ) : 
                <Button variant="disabled" size="fit" className="!text-sm">
                  Registration is opening soon!
                </Button>
              : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
