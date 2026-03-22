import Container from "@/src/components/ui/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion";
import type { FaqItem } from "@/src/app/(navbar)/competition/[slug]/data";
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
            <p className="text-secondary-100">Contact our support team for any further clarifications.</p>
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
            <AccordionItem
              key="6"
              value={`faq-6`}
              className=""
            >
              <AccordionTrigger className="">
                FAQ details will be announced soon.
              </AccordionTrigger>
              <AccordionContent className="">
                Stay tuned for updates on our FAQ section, where we will provide answers to common questions about the competition. We are working hard to compile all the necessary information to assist you in your journey with us. In the meantime, if you have any urgent inquiries, please feel free to reach out to our support team for assistance.
              </AccordionContent>
            </AccordionItem>
          )}

          <AccordionItem
            key="common-resources"
            value="faq-common"
            className=""
          >
            <AccordionTrigger className="">
              How long is the payment confirmation process?

            </AccordionTrigger>
            <AccordionContent className="">
              <div className="space-y-4">
                <p>Confirmation will be sent to the team captain&apos;s email within a maximum of 2x24 hours. If you haven&apos;t received it after this period, please reach out to our designated confirmation contact person.</p>
                <div className="pt-4 space-y-2">
                  <Link className="text-normal" href="https://wa.me/62895639314478">
                    <Button variant="dark-blue" size="fit" className="!text-sm">
                      <Chat size={20} /> Ara (+62 895 6393 14478)
                    </Button>
                  </Link>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
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
    </section >
  )
}

export default FAQ;