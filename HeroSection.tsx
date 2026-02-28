import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Deals and products"
          className="h-full w-full object-cover"
        />

        {/* ✅ Liquid glass overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 text-center">

        <span
          className="inline-block rounded-full
          bg-white/20 backdrop-blur-md
          border border-white/20
          px-5 py-1.5 text-sm font-medium text-white mb-6">
          🔥 Updated Daily
        </span>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
          The Best Deals,
          <br />
          <span className="text-accent">Handpicked for You</span>
        </h1>

        <p className="mx-auto max-w-xl text-lg text-white/70">
          We find and curate the best products on Amazon so you don't have to.
          Every link is personally tested and reviewed.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;
