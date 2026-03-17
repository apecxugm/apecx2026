import Image from "next/image";
import Container from "./container";

const ComingSoon = () => {
  return (
    <Container className="z-2">
      <div className="flex flex-col items-center justify-center h-fit py-30 px-15 bg-secondary-100">
        <Image
          src="/logo/logo-purple.svg"
          alt="Logo"
          width={115}
          height={110}
        />
        <p className="text-black font-medium max-w-xl text-center">We’re finalizing the details to ensure a world-class experience.
          Stay tuned for the full APECX 2026 reveal.</p>

      </div>
    </Container>
  );
}

export default ComingSoon;