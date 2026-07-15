import { useState } from "react";

type ProjectCategory = "all" | "platform" | "cloud" | "design";

interface Project {
  title: string;
  client: string;
  category: ProjectCategory;
  description: string;
  outcome: string;
  tags: string[];
  image: string;
}

export default function Work() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const projects: Project[] = [
    {
      title: "Enterprise Omnichannel CMS Migration",
      client: "Acme Global Retail",
      category: "platform",
      description:
        "Architected and built a multi-tenant content management system serving global retail storefronts across 40 countries, enabling seamless translation and asset orchestration.",
      outcome: "+45% content publishing speed",
      tags: ["React", "TypeScript", "Tailwind", "Vite", "REST API"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDxruU6cM_vOHom_GuWNuPvmQ_NOtOMpptG5wyi0XXykG_OXlk75AITW9rW3aoB2Jn-QeXkwFuZbcZTCryYJ79mbE_DsKmgWOZ5goBDTlu-I9u4OmfQz0FQEMrxUDKSlqCrhmVy6VHE8E87Sr9Ewwgog3jKJx8o0jrdBRahKdt9K_nqCbVoaL89nOyupJmlOK8laI-bd4IKguA34qkR2WRvLTERBgevyYIqZegY7mf93ujBJkUKMlVKk_RVUzHRBNIUF6nn7ZCgT_W8",
    },
    {
      title: "HIPAA-Compliant Hospital Management Panel",
      client: "CoreHealth Diagnostics",
      category: "design",
      description:
        "Conducted extensive service research and designed a world-class UI/UX workflow for clinical practitioners, optimizing patient intake and diagnostic synchronizations.",
      outcome: "99.98% practitioner satisfaction",
      tags: ["UI/UX", "Service Design", "Design System", "Accessibility"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAgdK99-v6F1XYsST5CEP-OuTxn-W9xjDnd0Gf6nwDqmTJp1PhLG6HUj0i1SHVpUZnncLH8UInWl4jiqkgFdFGDpSUtazH1LEjI-JvAYHL2Ta_D-rfoK3aCPp4QnMZQP-eHAPC-M2TVCUhu4rJsXuiQ01Q456H8m-PJQz1LS4zFg5Bvy2onFYDM1pezh_IdYGHOKPKFjWu5-8XOj3aJFZ2cStL-_hGyfSNbWiwifHMmxL406cH4j1ik4I1usTwbwXnRgCSPyuajC3Vl",
    },
    {
      title: "Next-Gen PCI-DSS Level 1 Payment Gateway",
      client: "Vanguard Fintech Group",
      category: "platform",
      description:
        "Engineered a highly secure, low-latency transaction processing platform capable of handling multi-currency settlements and automated ledger reconciliation.",
      outcome: "Sub-50ms transaction latency",
      tags: ["React", "Go", "Vite", "PCI-DSS Compliance"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCtF6lVsCw5k_aMb8arrpizDRGhNtjPMhZtwWO9hKJz0edZ1TqQXHlOSdodyamnc-Zp_RvMMd9MHmpmdkkpZgi1RWNihRnDtXundTf0sU0wMVHDtuzt43-LOCE4lvM2-8i9nciz9e_Edx2emXpK0OzvoFDQQuEH0FC3744d7mqBy2fTrdRtwY5nP11Meb6cc0QWm_fgZx4zQ9M3oqVCwPDbR4QMXQWigzO0PvnFIVQ1lXhUcYRGeMdEo4AxW5caXlMfeXeb0-72S5nO",
    },
    {
      title: "Industrial Telemetry HMI System",
      client: "Helix Automation",
      category: "cloud",
      description:
        "Developed an advanced human-machine interface for factory-floor smart devices, integrating high-speed AWS cloud streaming for real-time diagnostics.",
      outcome: "99.99% system availability",
      tags: ["AWS", "IoT Core", "TypeScript", "Docker", "DevOps"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCQHraIlZPeLko3ktd1rCwJMtUCyq9Cm21rnnLyfqHlnbB9TwlcqG2U19pbPM-Z9DNqDrWaVh2MEPO-DDD0s8r9oSbIJfimcWBgmU6v-2L72xDmYdl9Qk9GaVj6oqsoe1C8hC5a5iUbvAweSTPeKlE4SMFKyOuiy7tPiYgJ8RUShhFbgwUNek6DocKux76E12s3QOLvFRfuXV3Hb3Gzi65C_7C4SAmVMQLZxSPZrNBsOuyCMQXTMTHGM6M74t0c0Y_SMBPLQPyHoFhJ",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-[#f7f9fb] min-h-screen text-charcoal py-16 md:py-24 animate-fade-in">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-azure-blue font-body text-xs font-bold tracking-widest uppercase block">
            Our Portfolio
          </span>
          <h1 className="font-headline text-[36px] md:text-5xl font-bold leading-tight tracking-tighter">
            Engineering Impact at Scale.
          </h1>
          <p className="font-body text-lg text-slate-gray leading-relaxed">
            Explore GCV's project history. See how we combine strategic design
            and precise software architectures to deliver business outcomes for
            global enterprises.
          </p>
        </div>

        {/* Filter Switcher Controls */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-surface-variant pb-6 select-none">
          {(["all", "platform", "cloud", "design"] as ProjectCategory[]).map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded text-sm font-semibold transition-all uppercase tracking-wider border ${
                  filter === cat
                    ? "bg-azure-blue border-azure-blue text-white shadow-sm"
                    : "bg-white border-surface-variant text-slate-gray hover:border-slate-gray hover:text-charcoal"
                }`}
              >
                {cat === "all" ? "All Work" : `${cat} systems`}
              </button>
            ),
          )}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white border border-surface-variant rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-azure-blue hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Visual Image */}
                <div className="h-64 overflow-hidden relative border-b border-surface-variant">
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>

                {/* Content details */}
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-widest">
                      {project.client}
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-[#e2f0fd] text-azure-blue border border-[#b1c6ff] rounded-full text-[10px] font-semibold uppercase">
                      <span className="w-1.5 h-1.5 bg-azure-blue rounded-full"></span>
                      <span>{project.outcome}</span>
                    </div>
                  </div>

                  <h3 className="font-headline text-2xl font-bold text-charcoal tracking-tight group-hover:text-azure-blue transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-body text-sm text-slate-gray leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags footer */}
              <div className="px-8 pb-8 pt-2 flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 bg-surface-gray border border-surface-variant rounded text-[11px] font-semibold text-slate-gray"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
