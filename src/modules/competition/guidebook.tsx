"use client";

import { useMemo, useState } from "react";
import Container from "@/src/components/ui/container";
import { Button } from "@/src/components/ui/button";
import type { CompetitionData } from "@/src/app/competition/[slug]/data";

type GuidebookTabId = "themes" | "rules" | "registration";

interface GuidebookProps {
  guidebook: CompetitionData["guidebook"];
  themeGuidebook?: CompetitionData["themeGuidebook"];
  coreTheme?: CompetitionData["coreTheme"];
  subTheme?: CompetitionData["subTheme"];
  themeBreakdown?: CompetitionData["themeBreakdown"];
  rules: CompetitionData["rules"];
  abstractCriteria?: CompetitionData["abstractCriteria"];
  preliminaryCriteria?: CompetitionData["preliminaryCriteria"];
  finalCriteria?: CompetitionData["finalCriteria"];
  requiredDocument: CompetitionData["requiredDocument"];
  preliminaryPayment: CompetitionData["preliminaryPayment"];
}

const TAB_LABELS: { id: GuidebookTabId; label: string }[] = [
  { id: "themes", label: "Themes" },
  { id: "rules", label: "Rules & Criteria" },
  { id: "registration", label: "Registration & Fee" },
];

const Guidebook = ({
  guidebook,
  themeGuidebook,
  coreTheme,
  subTheme,
  themeBreakdown,
  rules,
  abstractCriteria,
  preliminaryCriteria,
  finalCriteria,
  requiredDocument,
  preliminaryPayment,
}: GuidebookProps) => {
  const [activeTab, setActiveTab] = useState<GuidebookTabId>("themes");

  const content = useMemo(() => {
    if (activeTab === "themes") {
      const hasCoreThemeVariant = Boolean(coreTheme?.trim()) || Boolean(subTheme && subTheme.length > 0);

      if (hasCoreThemeVariant) {
        return {
          title: "Core and Sub-Themes",
          description: coreTheme?.trim() || "Core theme details will be announced soon.",
          sections: [
            {
              heading: subTheme && subTheme.length === 5 ? "The 5 Sub-Themes" : "Sub-Themes",
              items:
                subTheme && subTheme.length > 0
                  ? subTheme
                  : ["Sub-theme details will be announced soon."],
            },
          ],
        };
      }

      return {
        title: "Theme Description",
        description:
          themeGuidebook?.trim() ||
          "Theme details will be announced soon.",
        sections: [
          {
            heading: "Theme Breakdown",
            items: (themeBreakdown && themeBreakdown.length > 0)
              ? themeBreakdown
              : ["Theme breakdown details will be announced soon."],
          },
        ],
      };
    }

    if (activeTab === "rules") {
      const hasAbstract = Boolean(abstractCriteria && abstractCriteria.length > 0);
      const hasPreliminary = Boolean(preliminaryCriteria && preliminaryCriteria.length > 0);
      const hasFinal = Boolean(finalCriteria && finalCriteria.length > 0);

      const ruleSections = [
        {
          heading: "Competition Rules",
          items: rules.length > 0 ? rules : ["Rules will be announced soon."],
        },
      ];

      if (hasPreliminary || hasFinal) {
        if (hasPreliminary) {
          ruleSections.push({
            heading: "Preliminary Criteria",
            items: preliminaryCriteria as string[],
          });
        }

        if (hasFinal) {
          ruleSections.push({
            heading: "Final Criteria",
            items: finalCriteria as string[],
          });
        }
      } else if (hasAbstract) {
        ruleSections.push({
          heading: "Assessment Criteria",
          items: abstractCriteria as string[],
        });
      } else {
        ruleSections.push({
          heading: "Assessment Criteria",
          items: ["Assessment criteria will be announced soon."],
        });
      }

      return {
        title: "Rules and Assignment Criteria",
        description: "Please review all rules and assessment criteria carefully before submission.",
        sections: ruleSections,
      };
    }

    return {
      title: "Registration & Fee",
      description: "Complete all required documents and payment steps to finalize your registration.",
      sections: [
        {
          heading: "Required Documents",
          items:
            requiredDocument.length > 0
              ? requiredDocument
              : ["Required documents will be announced soon."],
        },
        {
          heading: "Preliminary Payment",
          items:
            preliminaryPayment.length > 0
              ? preliminaryPayment
              : ["Preliminary payment details will be announced soon."],
        },
      ],
    };
  }, [
    activeTab,
    themeGuidebook,
    coreTheme,
    subTheme,
    themeBreakdown,
    rules,
    abstractCriteria,
    preliminaryCriteria,
    finalCriteria,
    requiredDocument,
    preliminaryPayment,
  ]);

  return (
    <section className="bg-[#FCEFFB] py-12 md:py-38">
      <Container className="flex flex-col gap-0 px-0 md:px-8 xl:px-12">
        <div className="px-4 flex md:flex-row flex-col justify-between items-center mb-6 space-y-2 w-full">
          <h3>The Essentials.</h3>
          <p className="max-w-2xl">A streamlined version of the official guidebook. Review the core requirements and participation flow before you register.</p>
        </div>
        <div className="flex flex-row mx-4 md:mx-0 items-end gap-2 md:gap-3">
          {TAB_LABELS.map((tab) => {
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={[
                  "rounded-t-lg px-3 bg-tertiary-900 text-white py-[10px] text-sm font-medium transition-colors md:px-6 cursor-pointer transition-all duration-300 whitespace-nowrap",
                  isActive
                    ? "md:pb-7 pb-5"
                    : "",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="overflow-hidden bg-secondary-1000">
          <div className="p-6 space-y-2 h-[450px] overflow-y-scroll">
            <h3 className="font-bold text-secondary-100">{content.title}</h3>
            <p className="text-secondary-100">{content.description}</p>

            {content.sections.map((section) => (
              <div className="" key={section.heading}>
                <h5 className="text-lg font-semibold text-secondary-100 ">{section.heading}</h5>
                <ul className="list-disc pl-6 text-secondary-100 text-lg">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex justify-end bg-primary-900 px-6 py-6">
            <Button
              type="button"
              variant="dark-blue"
              size="fit"
              className="!text-sm md:!text-base"
              onClick={() => {
                if (guidebook?.trim()) {
                  window.open(guidebook, "_blank", "noopener,noreferrer");
                }
              }}
            >
              Download Guidebook
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Guidebook;