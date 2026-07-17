import { useEffect, useState } from "react";

interface ServicesProps {
  activeSection: string | null;
  onClearSection: () => void;
}

export default function Services({
  activeSection,
  onClearSection,
}: ServicesProps) {
  const [highlightedGroup, setHighlightedGroup] = useState<string | null>(null);

  useEffect(() => {
    if (activeSection) {
      const el = document.getElementById(activeSection);
      if (el) {
        // Smooth scroll to the targeted section
        el.scrollIntoView({ behavior: "smooth", block: "center" });

        // Highlight the matching cards briefly
        setHighlightedGroup(activeSection);
        const timer = setTimeout(() => {
          setHighlightedGroup(null);
          onClearSection(); // Clear the parent routing state
        }, 2000);

        return () => clearTimeout(timer);
      }
    }
  }, [activeSection, onClearSection]);

  const strategyServices = [
    {
      title: "User Research",
      icon: "search_insights",
      description:
        "Deep-dive ethnographic studies and behavioral analysis to understand your core audience's unmet needs.",
    },
    {
      title: "Design Research",
      icon: "biotech",
      description:
        "Evaluating visual trends and usability patterns to ensure your product remains competitive and intuitive.",
    },
    {
      title: "Service Design",
      icon: "account_tree",
      description:
        "Orchestrating end-to-end consumer journeys across digital and physical touchpoints for seamless delivery.",
    },
    {
      title: "Product Discovery",
      icon: "explore",
      description:
        "Validating concepts through rapid prototyping and stakeholder alignment before major investment.",
    },
  ];

  const experienceServices = [
    {
      title: "Design Systems",
      icon: "category",
      description:
        "Building scalable libraries of components and tokens that ensure brand consistency across platforms.",
    },
    {
      title: "Interaction Design",
      icon: "gesture",
      description:
        "Defining the micro-interactions and transitions that make digital products feel alive and responsive.",
    },
    {
      title: "Accessibility",
      icon: "settings_accessibility",
      description:
        "Ensuring WCAG compliance so that digital products are usable by everyone, regardless of ability.",
    },
  ];

  const engineeringServices = [
    {
      title: "Software Engineering",
      tag: "Core",
      icon: "developer_mode_tv",
      description:
        "High-performance back-end and front-end development using modern frameworks and languages.",
    },
    {
      title: "Platform Engineering",
      tag: "Infrastructure",
      icon: "hub",
      description:
        "Creating internal developer platforms that streamline the software development lifecycle.",
    },
    {
      title: "Cloud Engineering",
      tag: "Scaling",
      icon: "cloud",
      description:
        "Architecting robust cloud environments on AWS, Azure, and GCP for maximum uptime and security.",
    },
    {
      title: "DevOps",
      tag: "Velocity",
      icon: "settings_suggest",
      description:
        "Implementing CI/CD pipelines and automation to accelerate delivery without compromising quality.",
    },
  ];

  const productDevServices = [
    {
      title: "Web/Mobile Apps",
      icon: "devices",
      description:
        "Native and cross-platform applications built for performance, security, and world-class UX.",
    },
    {
      title: "SaaS Products",
      icon: "cloud_done",
      description:
        "Designing and developing multi-tenant software architectures that support rapid business growth.",
    },
    {
      title: "AI Applications",
      icon: "psychology",
      description:
        "Integrating generative AI and machine learning models to create intelligent, automated user experiences.",
    },
  ];

  return (
    <div className="bg-[#f7f9fb] min-h-screen text-charcoal">
      {/* 🚀 Premium Full-Width Row Hero Section */}
      <section className="relative overflow-hidden bg-charcoal text-white py-20 md:py-32 px-margin-mobile md:px-margin-desktop border-b border-white/10 flex items-center min-h-[450px] z-10">
        {/* 🖼️ Full-width Background Image Row */}
        <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
          <img
            src="/assets/Services.png"
            alt="GCV Services Capabilities"
            className="w-full h-full object-cover opacity-85"
          />
          {/* Dark overlay gradient to blend text contrast */}
          <div className="absolute inset-0 bg-gradient-to-tr from-charcoal via-charcoal/40 to-charcoal/40 z-10" />
        </div>

        <div className="max-w-container-max mx-auto w-full relative z-20">
          <div className="max-w-3xl space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/10 rounded-full select-none">
              <span className="w-2 h-2 bg-azure-blue rounded-full animate-pulse"></span>
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-white/90">
                Our Expertise
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-headline text-[36px] md:text-6xl font-bold leading-tight text-white tracking-tighter">
              Engineering the future of digital experiences.
            </h1>

            {/* Description */}
            <p className="font-body text-lg text-slate-200/90 leading-relaxed">
              We combine high-level strategic consultancy with rigorous
              technical implementation to deliver enterprise-grade digital
              solutions that scale.
            </p>
          </div>
        </div>
      </section>

      {/* Category 1: Strategy & Research */}
      <section
        id="services-strategy"
        className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-[120px] scroll-mt-28"
      >
        <div className="flex items-baseline justify-between border-b border-surface-variant pb-4 mb-8">
          <h2 className="font-headline text-2xl md:text-[32px] font-bold text-charcoal tracking-tight">
            Strategy & Research
          </h2>
          <span className="font-body text-sm font-semibold text-slate-gray">
            01
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategyServices.map((service, idx) => (
            <div
              key={idx}
              className={`bg-white p-8 border rounded-lg transition-all duration-500 hover:border-azure-blue hover:shadow-lg hover:-translate-y-0.5 ${
                highlightedGroup === "services-strategy"
                  ? "border-azure-blue shadow-md ring-2 ring-azure-blue/20 scale-[1.02]"
                  : "border-surface-variant"
              }`}
            >
              <span className="material-symbols-outlined text-azure-blue mb-6 text-[32px]">
                {service.icon}
              </span>
              <h3 className="font-headline text-lg font-semibold mb-3 text-charcoal">
                {service.title}
              </h3>
              <p className="font-body text-sm text-slate-gray leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Category 2: Experience Design */}
      <section
        id="services-experience"
        className="bg-surface-gray py-[120px] scroll-mt-28"
      >
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex items-baseline justify-between border-b border-surface-variant pb-4 mb-8">
            <h2 className="font-headline text-2xl md:text-[32px] font-bold text-charcoal tracking-tight">
              Experience Design
            </h2>
            <span className="font-body text-sm font-semibold text-slate-gray">
              02
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className={`lg:col-span-2 bg-white p-8 border rounded-lg transition-all duration-500 hover:border-azure-blue hover:shadow-lg hover:-translate-y-0.5 relative overflow-hidden ${
                highlightedGroup === "services-experience"
                  ? "border-azure-blue shadow-md ring-2 ring-azure-blue/20 scale-[1.01]"
                  : "border-surface-variant"
              }`}
            >
              <div className="relative z-10">
                <span className="material-symbols-outlined text-azure-blue mb-6 text-[32px]">
                  grading
                </span>
                <h3 className="font-headline text-xl font-bold mb-3 text-charcoal">
                  UI/UX Design
                </h3>
                <p className="font-body text-base text-slate-gray leading-relaxed max-w-md">
                  Crafting world-class interfaces that balance aesthetic beauty
                  with functional precision for complex enterprise workflows.
                </p>
              </div>
            </div>

            {experienceServices.map((service, idx) => (
              <div
                key={idx}
                className={`bg-white p-8 border rounded-lg transition-all duration-500 hover:border-azure-blue hover:shadow-lg hover:-translate-y-0.5 ${
                  highlightedGroup === "services-experience"
                    ? "border-azure-blue shadow-md ring-2 ring-azure-blue/20 scale-[1.02]"
                    : "border-surface-variant"
                }`}
              >
                <span className="material-symbols-outlined text-azure-blue mb-6 text-[32px]">
                  {service.icon}
                </span>
                <h3 className="font-headline text-lg font-semibold mb-3 text-charcoal">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-slate-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category 3: Engineering */}
      <section
        id="services-engineering"
        className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-[120px] scroll-mt-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-40 space-y-6">
            <span className="font-body text-xs font-bold text-slate-gray uppercase tracking-widest block">
              03
            </span>
            <h2 className="font-headline text-2xl md:text-[32px] font-bold text-charcoal leading-tight tracking-tight">
              Rigorous Engineering
            </h2>
            <p className="font-body text-base text-slate-gray leading-relaxed">
              We don't just build software; we engineer resilient platforms
              capable of handling high-stakes enterprise demands.
            </p>
            {/* <button className="border border-azure-blue text-azure-blue font-body text-sm font-semibold px-6 py-3 rounded-lg hover:bg-azure-blue hover:text-white transition-all cursor-pointer">
              View Technology Stack
            </button> */}
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {engineeringServices.map((service, idx) => (
              <div
                key={idx}
                className={`bg-white p-8 border rounded-lg transition-all duration-500 hover:border-azure-blue hover:shadow-lg hover:-translate-y-0.5 ${
                  highlightedGroup === "services-engineering"
                    ? "border-azure-blue shadow-md ring-2 ring-azure-blue/20 scale-[1.02]"
                    : "border-surface-variant"
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-azure-blue text-[32px]">
                    {service.icon}
                  </span>
                  <span className="text-[10px] font-body font-semibold text-slate-gray px-2 py-1 bg-surface-container-low rounded border border-surface-variant">
                    {service.tag}
                  </span>
                </div>
                <h3 className="font-headline text-lg font-semibold mb-3 text-charcoal">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-slate-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category 4: Product Development */}
      <section
        id="services-product-dev"
        className="bg-charcoal py-[120px] text-white scroll-mt-28"
      >
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="font-body text-xs font-bold text-[#7d8497] uppercase tracking-widest mb-3 block">
                04
              </span>
              <h2 className="font-headline text-[32px] md:text-[40px] font-bold tracking-tight">
                Product Development
              </h2>
              <p className="font-body text-base text-slate-gray leading-relaxed mt-4">
                End-to-end realization of digital products, from initial concept
                to market launch and continuous improvement.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productDevServices.map((service, idx) => (
              <div
                key={idx}
                className={`group border-l pl-6 py-6 transition-all duration-500 ${
                  highlightedGroup === "services-product-dev"
                    ? "border-azure-blue bg-white/5 ring-1 ring-azure-blue/10"
                    : "border-white/10 hover:border-white"
                }`}
              >
                <span className="material-symbols-outlined text-azure-blue mb-6 text-[40px] transition-transform duration-300 group-hover:scale-105">
                  {service.icon}
                </span>
                <h3 className="font-headline text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-slate-gray leading-relaxed mb-6">
                  {service.description}
                </p>
                {/* <a
                  className="inline-flex items-center gap-2 text-azure-blue font-body text-sm font-semibold hover:underline"
                  href="#"
                >
                  Explore work{" "}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
