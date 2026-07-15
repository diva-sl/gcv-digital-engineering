const features = [
  {
    icon: "lightbulb",
    title: "Design-Led Innovation",
    description:
      "We start with the user, ensuring every line of code serves a human purpose and business goal.",
  },
  {
    icon: "settings_suggest",
    title: "Engineering Excellence",
    description:
      "Rigorous technical standards and scalable architectures built for enterprise-grade performance.",
  },
  {
    icon: "trending_up",
    title: "Business-First Thinking",
    description:
      "Technology investments mapped directly to ROI, market speed, and operational efficiency.",
  },
  {
    icon: "psychology",
    title: "AI-Ready Solutions",
    description:
      "Future-proofed platforms integrating cognitive services and machine learning models.",
  },
];

export default function Features() {
  return (
    <section className="py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-gray">
      <div className="max-w-container-max mx-auto">
        {/* Section title */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-widest block mb-4">
            The GCV Edge
          </span>
          <h2 className="font-headline text-[32px] md:text-[48px] font-bold text-charcoal tracking-tight">
            Precision Engineering Meets Strategic Design.
          </h2>
        </div>
        {/* Card elements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="service-card group">
              <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center rounded mb-6 group-hover:bg-azure-blue group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[24px]">
                  {feature.icon}
                </span>
              </div>
              <h3 className="font-headline text-[20px] font-semibold text-charcoal mb-4">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-slate-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



