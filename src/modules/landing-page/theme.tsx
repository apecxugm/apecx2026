const Theme = () => {
  return (
    <section id="theme" className="w-screen bg-primary-900 flex items-center justify-center">
      <div className="relative w-full max-w-[1328px] aspect-[398/640] md:aspect-[1328/640] bg-center bg-cover mx-4 md:mx-8 xl:mx-12 my-10" style={{ backgroundImage: "url('/dummy.webp')" }}>
        <div className="absolute inset-0 flex items-end justify-end">
          <div className="text-left p-3 md:p-10 max-w-2xl space-y-2">
            <h3 className="text-black font-bold">
              gtw ini tema apaan
            </h3>
            <p className="text-black text-sm md:text-base leading-relaxed">
              APECX is the flagship annual event hosted by the SPE UGM Student Chapter. For over 15 years, it has been a prestigious hub where students, academics, and industry experts meet to solve the world&apos;s toughest energy challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Theme;