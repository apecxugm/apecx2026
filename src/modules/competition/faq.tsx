import Container from "@/src/components/ui/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion";
import type { FaqItem } from "@/src/app/competition/[slug]/data";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Chat } from "@phosphor-icons/react/dist/ssr";

interface FAQProps {
  faq: FaqItem[];
  contactPerson: string;
  cpLink: string;
}

const FAQ = ({ faq, contactPerson, cpLink }: FAQProps) => {
  const hasFaqItems = faq.length > 0;

  return (
    <section className="bg-primary-900 py-12 md:py-30">
      <Container className="flex md:flex-row flex-col gap-6 h-full">
        <div className="max-h-full justify-between flex flex-col">
          <div className="text-secondary-100 space-y-2">
            <h2>
              Frequently Asked Questions!
            </h2>
            <p className="md:text-lg">
              Find quick answers to common questions about participation and requirements.
            </p>
          </div>
          <div className="hidden md:block bg-primary-1000 p-5 space-y-10">
            <p className="text-secondary-100">Tanya aja</p>
            <Link href={cpLink}>
              <Button variant="dark-blue" size="fit" className="!text-sm">
                <Chat size={20} />{contactPerson}
              </Button>
            </Link>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue={hasFaqItems ? "faq-0" : undefined}
          className="w-full max-w-2xl space-y-[18px]"
        >
          {hasFaqItems ? (
            faq.map((item, index) => (
              <AccordionItem
                key={`${item.question}-${index}`}
                value={`faq-${index}`}
                className=""
              >
                <AccordionTrigger className="">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))
          ) : (
            <p className="rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 md:text-base">
              FAQ details will be announced soon.
            </p>
          )}
        </Accordion>

        <div className="md:hidden bg-primary-1000 p-5 space-y-10">
          <p className="text-secondary-100">Tanya aja</p>
          <Link href={cpLink}>
            <Button variant="dark-blue" size="fit" className="!text-sm">
              <Chat size={20} />{contactPerson}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default FAQ;