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
    <section className="py-16 md:py-20 px-margin-mobile md:px-margin-desktop bg-surface-gray">
      <div className="max-w-container-max mx-auto">
        {/* Section title */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-widest block mb-4">
            The GCV Edge
          </span>
          <h2 className="font-headline text-[32px] md:text-[48px] font-bold text-charcoal tracking-tight">
            Precision Engineering Meets Strategic Design.
          </h2>
        </div>

        {/* Card elements grid (Polished to match the Services card design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border border-surface-variant rounded-lg transition-all duration-500 hover:border-azure-blue hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Clean Azure-Blue Material Symbol */}
              <span className="material-symbols-outlined text-azure-blue text-[32px] mb-6 block select-none">
                {feature.icon}
              </span>

              <h3 className="font-headline text-lg font-semibold mb-3 text-charcoal">
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
