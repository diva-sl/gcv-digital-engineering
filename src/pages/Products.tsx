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

interface ProductsProps {
  onPageChange: (page: Page) => void;
}

export default function Products({ onPageChange }: ProductsProps) {
  // Best Products GCV Delivers (based on technical knowledge)
  const productShowcase = [
    {
      title: "Enterprise E-Commerce Engine",
      category: "E-Commerce",
      icon: "shopping_bag",
      description:
        "High-performance headless store pipelines and multi-vendor checkout platforms built with Next.js, React, and MongoDB, optimized for zero latency and maximum checkout conversion.",
      colSpan: "md:col-span-8",
    },
    {
      title: "Interactive CMS & Portals",
      category: "Content Management",
      icon: "dashboard",
      description:
        "Adaptive content management hubs featuring multi-tenant database partitioning, real-time publishing workflows, and dynamic SEO tools.",
      colSpan: "md:col-span-4",
    },
    {
      title: "Smart HRM & Workspace Console",
      category: "Enterprise ERP",
      icon: "groups",
      description:
        "Centralized admin portals tracking workspace directories, employee onboarding logs, payroll calculations, and secure document storage.",
      colSpan: "md:col-span-4",
    },
    {
      title: "LMS & Courseware Hub",
      category: "EdTech",
      icon: "school",
      description:
        "Engaging virtual learning platforms for corporate training, course curriculum directories, performance analytics, and automated certification workflows.",
      colSpan: "md:col-span-4",
    },
    {
      title: "Secure Fintech & Auditing Portal",
      category: "Finance & Taxation",
      icon: "account_balance_wallet",
      description:
        "Compliance-focused financial dashboards supporting income tax estimators, automated auditing checks, and encrypted transaction ledger logs.",
      colSpan: "md:col-span-4",
    },
  ];

  // 12 Key Industries We Serve
  const industriesList = [
    {
      name: "Ecommerce & Multivendor",
      desc: "Build a smart eCommerce platform to grow reach and brand value.",
      icon: "storefront",
    },
    {
      name: "EdTech & E-Learning",
      desc: "Create learning platforms that engage and boost your brand.",
      icon: "local_library",
    },
    {
      name: "Medical & Healthcare",
      desc: "Custom healthcare applications to improve care and visibility.",
      icon: "health_and_safety",
    },
    {
      name: "Real Estate & Construction",
      desc: "Real estate web and apps built to attract, convert, and engage.",
      icon: "domain",
    },
    {
      name: "Travel & Hospitality",
      desc: "Travel applications made to simplify booking for a safe journey.",
      icon: "flight",
    },
    {
      name: "Utilities & On Demand",
      desc: "On-demand websites & apps for fast, reliable, and smart service.",
      icon: "electrical_services",
    },
    {
      name: "Media & Entertainment",
      desc: "Applications for streaming, media sharing, and user delight.",
      icon: "movie",
    },
    {
      name: "Transportation & Logistics",
      desc: "Logistics applications built to track, manage, and deliver fast.",
      icon: "local_shipping",
    },
    {
      name: "Finance & Insurance",
      desc: "Secure fintech platforms that simplify money and coverage.",
      icon: "payments",
    },
    {
      name: "Manufacturing",
      desc: "Applications that streamline manufacturing and boost output.",
      icon: "factory",
    },
    {
      name: "Oil and Gas",
      desc: "Custom software to streamline operations and boost energy efficiency.",
      icon: "oil_barrel",
    },
    {
      name: "Taxation & Auditing",
      desc: "Secure income tax filing dashboards and transaction audit tools.",
      icon: "receipt_long",
    },
  ];

  return (
    <div className="bg-[#f7f9fb] min-h-screen text-charcoal">
      {/* 🚀 Premium Full-Width Row Hero Section */}
      <section className="relative overflow-hidden bg-charcoal text-white py-20 md:py-32 px-margin-mobile md:px-margin-desktop border-b border-white/10 flex items-center min-h-[450px] z-10">
        {/* 🖼️ Full-width Background Image Row */}
        <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
          <img
            src="/assets/Products.png"
            alt="GCV Product Platforms"
            className="w-full h-full object-cover opacity-50"
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
                Products & Sectors
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-headline text-[36px] md:text-6xl font-bold leading-tight text-white tracking-tighter">
              Engineering Tomorrow's Platforms.
            </h1>

            {/* Description */}
            <p className="font-body text-lg text-slate-200/90 leading-relaxed">
              We leverage our extensive technical capability to deliver secure, 
              scalable, and enterprise-grade software products that solve real business complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Product Platforms We Deliver */}
      <section className="px-margin-mobile md:px-margin-desktop py-24 bg-[#f8fafc] border-t border-surface-variant">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-[32px] md:text-[40px] font-bold text-charcoal tracking-tight">
              Best Products We Deliver
            </h2>
            <p className="font-body text-base text-slate-gray mt-3">
              Specialized proprietary assets and customized software platforms built for enterprise-grade performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {productShowcase.map((product, idx) => (
              <div
                key={idx}
                className={`${product.colSpan} bg-white border border-surface-variant p-8 flex flex-col justify-between group rounded-lg hover:border-azure-blue hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-surface-container-low rounded-lg">
                      <span
                        className="material-symbols-outlined text-azure-blue text-[28px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {product.icon}
                      </span>
                    </div>
                    {product.category && (
                      <span className="font-body text-xs font-semibold text-slate-gray px-3 py-1 border border-surface-variant rounded-full bg-white select-none">
                        {product.category}
                      </span>
                    )}
                  </div>
                  <h3
                    className={`font-headline font-semibold text-charcoal mb-4 ${idx === 0 ? "text-[28px] md:text-3xl" : "text-xl"}`}
                  >
                    {product.title}
                  </h3>
                  <p className="font-body text-sm text-slate-gray leading-relaxed mb-8 max-w-lg">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Industries We Serve */}
      <section className="px-margin-mobile md:px-margin-desktop py-24 bg-white border-t border-surface-variant">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-[32px] md:text-[40px] font-bold text-charcoal tracking-tight">
              Industries We Serve
            </h2>
            <p className="font-body text-base text-slate-gray mt-3">
              Delivering smart digital solutions across diverse global sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesList.map((industry, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-surface-variant p-6 rounded-lg hover:border-azure-blue hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="material-symbols-outlined text-azure-blue mb-4 text-[32px]">
                    {industry.icon}
                  </span>
                  <h3 className="font-headline text-lg font-bold text-charcoal mb-2">
                    {industry.name}
                  </h3>
                  <p className="font-body text-xs text-slate-gray leading-relaxed">
                    {industry.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-24 max-w-container-max mx-auto text-center">
        <div className="bg-charcoal text-white py-16 md:py-24 px-6 md:px-12 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-azure-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-impact-red/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-headline text-[32px] md:text-[40px] font-bold tracking-tight">
              Ready to deploy excellence?
            </h2>
            <p className="font-body text-base text-slate-gray leading-relaxed">
              Our engineering teams are ready to integrate these solutions into
              your existing ecosystem or build custom extensions to suit your
              specific requirements.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                onClick={() => onPageChange("contact")}
                className="bg-white text-charcoal px-8 py-3 rounded-lg font-body text-sm font-semibold hover:bg-surface-container-high active:scale-98 transition-all cursor-pointer"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
