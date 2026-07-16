const capabilities = [
  {
    title: "Strategy",
    description:
      "Market analysis, product roadmapping, and digital transformation consulting.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCM9QH5TM5crz41y7GbIL4bEqDnB9nwUh9S7eukvfwGjeuQRzTTmROhj4Sqgw44sKs0J3ytl5fV_NogbDu2YoPpyBE49np4czkgDBKoZEdsOuF65GaolraRPKVhAGdBew18ZUZiYPskX9RBBBvJywFIl1vQCSp4XgeIF55j1h1-cXgim-rp_Gk-K1GHLeauHMRG8t1pBa2wJKYCX7GcTgBi4LQzxD3Tfth3lcSgV_iUdEPOJ2uEzmQ2OOCnya47P8VlSMGpmvcRbnPr",
    deliverables: [
      "Market Analysis",
      "Roadmap Planning",
      "Transformation Strategy",
    ],
  },
  {
    title: "Experience",
    description:
      "Human-centric UX/UI design, rapid prototyping, and usability research.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdRGIxJsg8YqNGjIXn5WuxGqeIVAGbbQXLPHdtwaenSvyvYKXfH8DUyz6Yelbs9lAEfyVdsRBet3L0zYKoca5oF6jqdil-0Uqwk6gQx6zBloL_gfNnDawvMlVS1o0GahHvTGcMseBsIhyhPcuoZY1fxIn6wSGPLV4akMMODM7O7rQ8XGkxKX-ZkTzRpdGwY_yovHVsDOwuGWAoO30yqeBrt0Rmzh3OAh1HvoHT3lFzBclbWiZmvZduBZDdwq0b0eu2-KVcAhT0UTTq",
    deliverables: [
      "User Research",
      "Figma Design Systems",
      "Prototyping & Testing",
    ],
  },
  {
    title: "Engineering",
    description:
      "Cloud-native development, microservices architecture, and legacy modernization.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtF6lVsCw5k_aMb8arrpizDRGhNtjPMhZtwWO9hKJz0edZ1TqQXHlOSdodyamnc-Zp_RvMMd9MHmpmdkkpZgi1RWNihRnDtXundTf0sU0wMVHDtuzt43-LOCE4lvM2-8i9nciz9e_Edx2emXpK0OzvoFDQQuEH0FC3744d7mqBy2fTrdRtwY5nP11Meb6cc0QWm_fgZx4zQ9M3oqVCwPDbR4QMXQWigzO0PvnFIVQ1lXhUcYRGeMdEo4AxW5caXlMfeXeb0-72S5nO",
    deliverables: [
      "Enterprise Scaling",
      "Cloud Architecture",
      "API Integration",
    ],
  },
  {
    title: "Product Dev",
    description:
      "Full-lifecycle product management from MVP to enterprise-scale deployment.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQHraIlZPeLko3ktd1rCwJMtUCyq9Cm21rnnLyfqHlnbB9TwlcqG2U19pbPM-Z9DNqDrWaVh2MEPO-DDD0s8r9oSbIJfimcWBgmU6v-2L72xDmYdl9Qk9GaVj6oqsoe1C8hC5a5iUbvAweSTPeKlE4SMFKyOuiy7tPiYgJ8RUShhFbgwUNek6DocKux76E12s3QOLvFRfuXV3Hb3Gzi65C_7C4SAmVMQLZxSPZrNBsOuyCMQXTMTHGM6M74t0c0Y_SMBPLQPyHoFhJ",
    deliverables: ["MVP Development", "SaaS Systems", "Agile Management"],
  },
];

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

interface CapabilitiesProps {
  onPageChange: (page: Page) => void;
}

export default function Capabilities({ onPageChange }: CapabilitiesProps) {
  return (
    <section className="py-16 md:py-20 px-margin-mobile md:px-margin-desktop bg-white">
      <div className="max-w-container-max mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-[32px] md:text-[48px] font-bold text-charcoal mb-4 tracking-tight">
              Our Core Capabilities
            </h2>
            <p className="font-body text-lg text-slate-gray">
              End-to-end digital transformation partners for the most ambitious
              organizations.
            </p>
          </div>

          <a
            className="group flex items-center gap-2 font-body text-sm font-semibold text-azure-blue hover:text-opacity-80 transition-colors cursor-pointer select-none"
            href="/services"
            onClick={(e) => {
              e.preventDefault();
              onPageChange("services");
            }}
          >
            Browse all services
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Capability Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onPageChange("services")}
              className="capability-item group h-80 relative rounded-xl overflow-hidden shadow-sm border border-surface-variant cursor-pointer"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                alt={`${item.title} Capability`}
                src={item.image}
              />
              <div className="capability-overlay"></div>

              <div className="capability-content flex flex-col justify-between h-full p-8 z-10 relative">
                <div className="space-y-3">
                  <h3 className="font-headline text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/85 font-body text-sm max-w-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Services Deliverables tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.deliverables.map((del, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-[10px] font-semibold text-white/90"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover-revealed explore link */}
                <div className="font-body text-xs font-semibold text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 select-none">
                  Learn more & explore
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
