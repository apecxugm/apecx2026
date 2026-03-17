const Theme = () => {
  return (
    <section id="theme" className="w-screen bg-primary-900 flex items-center justify-center">
      <div className="relative w-full max-w-[1328px] aspect-[398/640] md:aspect-[1328/640] bg-center bg-cover mx-4 md:mx-8 xl:mx-12 my-10 bg-[url('/theme-background-mobile.webp')] md:bg-[url('/theme-background.webp')]">
        <div className="absolute inset-0 flex items-end justify-end">
          <div className="text-left p-3 md:p-5 bg-secondary-100 max-w-4xl space-y-2 md:my-6 md:mx-6 mx-4 my-4">
            <span className="text-black font-bold text-[23px] md:text-[28px]">
              Redefining Energy Pathways: Shifting Perspectives Toward Optimized Energy Systems
            </span>
            <p className="text-black text-sm md:text-base leading-relaxed">
              To drive a sustainable energy transition through education, innovation, and industry-academic collaboration. We empower students to solve real-world challenges while shifting perspectives from petroleum to integrated, smart energy systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Theme;