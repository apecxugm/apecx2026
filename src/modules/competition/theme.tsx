import Container from "@/src/components/ui/container";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { ReactNode } from "react";

function renderBoldText(content: ReactNode) {
  if (typeof content !== "string") {
    return content;
  }

  const parts = content.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-primary-700">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

const CompetitionTheme = ({ title, theme, themeDesc }: { title: string, theme: string, themeDesc: ReactNode }) => {
  return (
    <section className="relative items-center justify-center bg-neutral-100">
      <Container className="flex flex-col py-18 md:pt-30 md:pb-20 gap-0">
        <p>
          This Year&apos;s Theme
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-15">
          <p className="text-[22px] md:text-[26px] font-bold text-secondary-1000">{theme}</p>
          <div>
            <p className="text-black text-justify text-base font-normal md:font-medium">
              {renderBoldText(themeDesc)}
            </p>
            <div className="flex flex-col md:flex-row items-end gap-[10px] mt-6 ml-auto md:ml-0 lg:self-start self-end">
              <Link href="https://wa.me/6281390422049">
                <Button variant="dark-blue" size="fit" className="!text-sm">
                  Register for {title}!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompetitionTheme;