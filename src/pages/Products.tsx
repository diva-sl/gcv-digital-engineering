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
  const productShowcase = [
    {
      title: "CMS",
      category: "Engineering & UX",
      icon: "dashboard",
      description:
        "Flexible content management platform for enterprise. Architected for multi-tenant deployments and seamless omnichannel delivery across global touchpoints.",
      actionText: "View technical specs",
      colSpan: "md:col-span-8",
    },
    {
      title: "Hospital Management System",
      category: null,
      icon: "medical_services",
      description:
        "Digitizing clinical workflows and patient care with HIPAA-compliant data structures and real-time diagnostic synchronization.",
      actionText: "Learn more",
      colSpan: "md:col-span-4",
    },
    {
      title: "Learning Management System",
      category: null,
      icon: "school",
      description:
        "A robust platform for enterprise training, featuring adaptive learning paths and advanced performance analytics for workforce development.",
      actionText: "Explore platform",
      colSpan: "md:col-span-4",
    },
    {
      title: "Payment Gateway",
      category: null,
      icon: "account_balance_wallet",
      description:
        "Secure transaction management with PCI-DSS Level 1 compliance, supporting multi-currency settlements and automated reconciliation.",
      actionText: "Security protocol",
      colSpan: "md:col-span-4",
    },
    {
      title: "Pen HMI",
      category: null,
      icon: "precision_manufacturing",
      description:
        "Advanced Human-Machine Interface for connected smart devices, optimized for low-latency feedback and intuitive tactile control systems.",
      actionText: "HMI Architecture",
      colSpan: "md:col-span-4",
    },
  ];

  return (
    <div className="bg-[#f7f9fb] min-h-screen text-charcoal">
      {/* 🚀 Aligned Hero Section (Matches Home Hero Spacing Frame & Layout) */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center px-margin-mobile md:px-margin-desktop hero-gradient overflow-hidden">
        <div className="max-w-container-max mx-auto grid grid-cols-12 gap-6 w-full relative z-10">
          <div className="col-span-full lg:col-span-8 py-16 md:py-24 space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-full select-none">
              <span className="w-2 h-2 bg-azure-blue rounded-full animate-pulse"></span>
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-slate-gray">
                Proprietary Assets
              </span>
            </div>

            {/* Main Headline (Original Content Kept) */}
            <h1 className="font-headline text-[36px] md:text-6xl font-bold leading-tight text-charcoal tracking-tighter">
              Engineering Tomorrow's Platforms.
            </h1>

            {/* Description (Original Content Kept) */}
            <p className="font-body text-lg text-slate-gray max-w-lg leading-relaxed">
              GCV's suite of specialized software solutions is designed to
              handle enterprise complexity with editorial-grade precision. From
              clinical workflows to secure global payments.
            </p>
          </div>
        </div>

        {/* Clean software development workspace Absolute Image */}
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-[45%] h-3/4 opacity-90 pointer-events-none hidden lg:block rounded-xl overflow-hidden border border-surface-variant shadow-md">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxruU6cM_vOHom_GuWNuPvmQ_NOtOMpptG5wyi0XXykG_OXlk75AITW9rW3aoB2Jn-QeXkwFuZbcZTCryYJ79mbE_DsKmgWOZ5goBDTlu-I9u4OmfQz0FQEMrxUDKSlqCrhmVy6VHE8E87Sr9Ewwgog3jKJx8o0jrdBRahKdt9K_nqCbVoaL89nOyupJmlOK8laI-bd4IKguA34qkR2WRvLTERBgevyYIqZegY7mf93ujBJkUKMlVKk_RVUzHRBNIUF6nn7ZCgT_W8"
            alt="Clean architectural software development workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
        </div>
      </section>

      {/* Product Bento Grid */}
      <section className="px-margin-mobile md:px-margin-desktop py-24 bg-[#f8fafc] border-t border-surface-variant">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-[32px] md:text-[40px] font-bold text-charcoal tracking-tight">
              Solution Showcase
            </h2>
            <p className="font-body text-base text-slate-gray mt-3">
              Specialized platforms built for scalability, reliability, and
              enterprise-grade performance.
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
                {/* <div
                  onClick={() => onPageChange("contact")}
                  className="flex items-center text-azure-blue font-body text-sm font-semibold gap-1 hover:gap-2 transition-all cursor-pointer select-none"
                >
                <span>{product.actionText}</span> 
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Tactile Routing Updates Applied) */}
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
              {/* <button
                onClick={() => onPageChange("contact")}
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-body text-sm font-semibold hover:bg-white/10 active:scale-98 transition-all cursor-pointer"
              >
                Speak to an Architect
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
