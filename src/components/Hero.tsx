type Page =
  | "home"
  | "about"
  | "products"
  | "services"
  | "contact"
  | "work"
  | "case-study"
  | "privacy"

  | "terms";

interface HeroProps {
  onPageChange: (page: Page) => void;
}

export default function Hero({ onPageChange }: HeroProps) {
  return (
    <section className="relative min-h-[850px] flex items-center px-margin-mobile md:px-margin-desktop overflow-hidden mb-16 md:mb-24 bg-white">
      {/* 🎥 Background Video (Fully Visible & Un-dimmed) */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-75"
        >
          <source
            src="/assets/vecteezy_technology-network-background_4827152.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Soft overlay vignette to integrate the layout margins cleanly */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent z-10" />
      </div>

      <div className="max-w-container-max mx-auto grid grid-cols-12 gap-6 w-full relative z-20">
        <div className="col-span-full md:col-span-10 lg:col-span-8 py-[120px] z-10">
          
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-full select-none">
            <span className="w-2 h-2 bg-azure-blue rounded-full animate-pulse"></span>
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-slate-gray">
              Design-Driven Engineering At Scale
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-headline text-[44px] md:text-6xl font-bold leading-tight text-charcoal mb-8 tracking-tighter">
            Where Design Meets{" "}
            <span className="text-azure-blue italic">Engineering</span> to Solve
            Business Problems
          </h1>

          {/* Description */}
          <p className="font-body text-lg text-slate-gray max-w-2xl mb-12 leading-relaxed">
            At GCV, designers, researchers, strategists, and engineers
            collaborate to understand customer challenges and deliver innovative
            digital products, enterprise platforms, and AI-powered solutions.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onPageChange("contact")}
              className="px-8 py-4 bg-charcoal text-white font-body text-sm font-semibold rounded shadow-lg hover:bg-opacity-95 active:scale-98 transition-all cursor-pointer"
            >
              Start Your Project
            </button>
            <button
              onClick={() => onPageChange("work")}
              className="px-8 py-4 border border-charcoal text-charcoal font-body text-sm font-semibold rounded hover:bg-charcoal hover:text-white active:scale-98 transition-all cursor-pointer"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
