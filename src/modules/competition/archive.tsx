import Container from "@/src/components/ui/container";
import Image from "next/image";

const DEFAULT_ARCHIVE_IMAGES = [
  "/dummy.webp",
  "/competition-cta.webp",
  "/theme-background.webp",
  "/regular-background.webp",
  "/regist-background.webp",
  "/navbar-dropdown-image.webp",
];

const ARCHIVE_IMAGES_BY_SLUG: Record<string, string[]> = {
  bcc: [
    "/archive/bcc-1.webp",
    "/archive/bcc-2.webp",
    "/archive/bcc-3.webp",
    "/archive/bcc-4.webp",
    "/archive/bcc-5.webp",
    "/archive/bcc-6.webp",
  ],
  ppc: [
    "/archive/ppc-1.webp",
    "/archive/ppc-2.webp",
    "/archive/ppc-3.webp",
    "/archive/ppc-4.webp",
    "/archive/ppc-5.webp",
    "/archive/ppc-6.webp",
  ],
  petrosmart: [
    "/archive/petrosmart-1.webp",
    "/archive/petrosmart-2.webp",
    "/archive/petrosmart-3.webp",
    "/archive/petrosmart-4.webp",
    "/archive/petrosmart-5.webp",
    "/archive/petrosmart-6.webp",
  ],
  pod: [
    "/archive/pod-1.webp",
    "/archive/pod-2.webp",
    "/archive/pod-3.webp",
    "/archive/pod-4.webp",
    "/archive/pod-5.webp",
    "/archive/pod-6.webp",
  ],
  scml: [
    "/archive/scml-1.webp",
    "/archive/scml-2.webp",
    "/archive/scml-3.webp",
    "/archive/scml-4.webp",
    "/archive/scml-5.webp",
    "/archive/scml-6.webp",
  ],
};

const Archive = ({ title, slug }: { title: string; slug: string }) => {
  const images = ARCHIVE_IMAGES_BY_SLUG[slug] ?? DEFAULT_ARCHIVE_IMAGES;

  return (
    <section className="bg-neutral-100 py-18 md:py-[120px]">
      <Container className="gap-[30px]">
        <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
          <h5 className="text-[26px] font-bold leading-tight text-neutral-1000 md:text-[32px] md:leading-[48px]">
            The APECX 2026 Archive
          </h5>
          <p className="max-w-[682px] text-base font-medium leading-relaxed text-neutral-1000 md:text-justify md:text-lg md:leading-[27px]">
            Capturing the energy, ambition, and teamwork from the ground up on the {title}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:gap-5 md:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={src}
              className="relative aspect-[402/260] w-full overflow-hidden bg-neutral-300"
            >
              <Image
                src={src}
                alt={`APECX 2026 Archive ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Archive;
