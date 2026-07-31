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
      title: "Product Strategy",
      icon: "track_changes",
      description:
        "Aligning business goals with user needs to define clear product roadmaps, feature scoping, and market positioning.",
    },
    {
      title: "Software Architecture & Design",
      icon: "schema",
      description:
        "Designing scalable, secure, and distributed microservice architectures using Go/Gin, Node.js, and high-performance databases.",
    },
    {
      title: "Digital Growth Consulting",
      icon: "insights",
      description:
        "Data-driven conversion optimization, performance tuning, and scaling audits to accelerate user acquisition and retention.",
    },
    {
      title: "Product Discovery",
      icon: "explore",
      description:
        "Validating product concepts through user research, rapid prototyping, and technical feasibility studies before development.",
    },
  ];

  const experienceServices = [
    {
      title: "Design Systems",
      icon: "category",
      description:
        "Building scalable libraries of React components and tokens that ensure brand consistency and developer efficiency.",
    },
    {
      title: "Interaction Design",
      icon: "gesture",
      description:
        "Defining the micro-interactions, gestures, and transitions that make digital products feel alive and intuitive.",
    },
    {
      title: "Accessibility",
      icon: "settings_accessibility",
      description:
        "Ensuring WCAG compliance so that digital platforms are usable by everyone, maintaining strict legal and ethical standards.",
    },
  ];

  const engineeringServices = [
    {
      title: "Software Product Development",
      tag: "Full-Stack",
      icon: "code",
      description:
        "End-to-end full-stack systems engineering leveraging Go/Gin, Node.js/Express, MongoDB, and React architectures.",
    },
    {
      title: "Cloud Engineering",
      tag: "AWS / Scale",
      icon: "cloud",
      description:
        "Architecting robust cloud environments on AWS with secure S3 storage pipelines, serverless logic, and multi-region setups.",
    },
    {
      title: "DevOps & Velocity",
      tag: "Automation",
      icon: "settings_suggest",
      description:
        "Implementing CI/CD pipelines, Docker containerization, and automated deployments for maximum uptime and fast release cycles.",
    },
    {
      title: "Quality Assurance",
      tag: "Reliability",
      icon: "fact_check",
      description:
        "Automated testing, integration validation, and rigorous QA check pipelines to guarantee zero-defect releases.",
    },
  ];

  const productDevServices = [
    {
      title: "Ecommerce Website Development",
      icon: "shopping_bag",
      description:
        "High-conversion, fast storefronts built with modern stacks like React, Next.js, and Tailwind CSS.",
    },
    {
      title: "Headless Ecommerce",
      icon: "dns",
      description:
        "Decoupled frontend architecture integrated with modern commerce platforms and custom API backends for speed and scalability.",
    },
    {
      title: "Ecommerce Mobile App Development",
      icon: "stay_current_portrait",
      description:
        "Fluid cross-platform mobile commerce apps designed for high viewport performance and offline database support.",
    },
    {
      title: "Platform Plugin Development",
      icon: "extension",
      description:
        "Developing custom extension plugins, payment gateways, and checkout API bridges for various commerce ecosystems.",
    },
    {
      title: "MVP Development",
      icon: "speed",
      description:
        "Engineering rapid minimum viable products to help startups validate features and raise funding with minimal time-to-market.",
    },
  ];

  const enterpriseServices = [
    {
      title: "HRM Solution",
      icon: "groups",
      description:
        "Simplify your HR operations, attendance tracking, payroll logs, and team directories with our complete HRM platform.",
    },
    {
      title: "CRM & CMS Solution",
      icon: "contact_page",
      description:
        "Manage customer relationship databases and update website marketing content with our flexible CMS/CRM systems.",
    },
    {
      title: "ERP Solution",
      icon: "business",
      description:
        "Scalable ERP systems and transactional databases tailored to the specific business workflows of your enterprise.",
    },
    {
      title: "LMS Solution",
      icon: "school",
      description:
        "Engaging Learning Management Systems for student curriculums, governance boards, and corporate team training.",
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

      {/* Category 1: Strategy & Consulting */}
      <section
        id="services-strategy"
        className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-24 md:mt-36 mb-[120px] scroll-mt-28"
      >
        <div className="flex items-baseline justify-between border-b border-surface-variant pb-4 mb-8">
          <h2 className="font-headline text-2xl md:text-[32px] font-bold text-charcoal tracking-tight">
            Strategy & Consulting
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
                  palette
                </span>
                <h3 className="font-headline text-xl font-bold mb-3 text-charcoal">
                  UI/UX Development
                </h3>
                <p className="font-body text-base text-slate-gray leading-relaxed max-w-md">
                  Crafting interactive, high-fidelity responsive interfaces that balance 
                  aesthetic beauty with functional layout precision across complex workflows.
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

      {/* Category 3: Custom Product Engineering */}
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
              Custom Product Engineering
            </h2>
            <p className="font-body text-base text-slate-gray leading-relaxed">
              We don't just write code; we design and scale resilient custom applications
              capable of handling high-stakes operational and transaction demands.
            </p>
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

      {/* Category 4: E-Commerce & Digital Commerce */}
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
                E-Commerce & Digital Commerce
              </h2>
              <p className="font-body text-base text-slate-gray leading-relaxed mt-4">
                High-performance e-commerce development and multi-tenant transactional platform architectures 
                built for speed, security, and world-class checkout conversion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="font-body text-sm text-slate-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category 5: Enterprise Business Solutions */}
      <section
        id="services-enterprise"
        className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-[120px] scroll-mt-28"
      >
        <div className="flex items-baseline justify-between border-b border-surface-variant pb-4 mb-8">
          <h2 className="font-headline text-2xl md:text-[32px] font-bold text-charcoal tracking-tight">
            Enterprise Business Solutions
          </h2>
          <span className="font-body text-sm font-semibold text-slate-gray">
            05
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {enterpriseServices.map((service, idx) => (
            <div
              key={idx}
              className={`bg-white p-8 border rounded-lg transition-all duration-500 hover:border-azure-blue hover:shadow-lg hover:-translate-y-0.5 ${
                highlightedGroup === "services-enterprise"
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
    </div>
  );
}
