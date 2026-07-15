import { useState } from "react";

type ProjectCategory = "all" | "platform" | "design";

interface Metric {
  label: string;
  value: string;
}

interface Screenshot {
  label: string;
  path: string;
  type: "storefront" | "admin";
}

interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  description: string;
  outcome: string;
  tags: string[];
  image: string; // main card preview image
  challenge: string;
  solution: string;
  architecture: string[];
  metrics: Metric[];
  siteUrl: string;
  adminUrl: string;
  screenshots: Screenshot[];
}

interface WorkProps {
  onSelectProject: (project: Project) => void;
}

export default function Work({ onSelectProject }: WorkProps) {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const projects: Project[] = [
    {
      id: "kiddostyle",
      title: "E-Commerce Storefront & Warehouse Automation Panel",
      client: "KiddoStyle",
      category: "platform",
      description:
        "Engineered a premium children's clothing e-commerce storefront alongside a secure warehouse administration dashboard, enabling low-latency inventory management and high-volume concurrent checkout operations.",
      outcome: "+38% sales conversion increase",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Stripe Payments",
        "Node.js",
      ],
      image: "/images/kiddostyle.gcvdanta.com_checkout_review.webp", // main cover
      challenge:
        "KiddoStyle required an enterprise storefront capable of hosting high-resolution image galleries with instant load times, coupled with a back-end administration panel to synchronize inventory across multiple brick-and-mortar warehouses in real-time.",
      solution:
        "GCV designed a state-of-the-art Single-Page Application (SPA) utilizing Vite for lightning-fast asset compilation. We built a synchronized inventory system mapping API updates in under 1.5 seconds and integrated secure, frictionless payment structures.",
      architecture: [
        "Vite-driven React frontend optimized for mobile viewport performance.",
        "Secure Stripe API pipelines for seamless credit card authorizations.",
        "Custom administrative dashboard providing inventory controls, order tracking, and sales telemetry.",
        "Automated cache-clearing mechanisms for instant product catalog updates.",
      ],
      metrics: [
        { label: "Lighthouse Performance Score", value: "98/100" },
        { label: "Inventory Sync Latency", value: "< 1.5s" },
        { label: "Checkout Completion Rate", value: "94%" },
      ],
      siteUrl: "https://kiddostyle.gcvdanta.com/",
      adminUrl: "https://admin.kiddostyle.gcvdanta.com/",
      screenshots: [
        {
          label: "Storefront - Checkout Review",
          path: "/images/kiddostyle.gcvdanta.com_checkout_review.webp",
          type: "storefront",
        },
        {
          label: "Storefront - Checkout Success",
          path: "/images/kiddostyle.gcvdanta.com_checkout_success.webp",
          type: "storefront",
        },
        {
          label: "Storefront - Purchase Invoice",
          path: "/images/kiddostyle.gcvdanta.com_checkout_success (1).webp",
          type: "storefront",
        },
        {
          label: "Storefront - Girls Collections (1)",
          path: "/images/kiddostyle.gcvdanta.com_collections_girls (1).webp",
          type: "storefront",
        },
        {
          label: "Storefront - Girls Collections (2)",
          path: "/images/kiddostyle.gcvdanta.com_collections_girls (2).webp",
          type: "storefront",
        },
        {
          label: "Storefront - Girls Collections (3)",
          path: "/images/kiddostyle.gcvdanta.com_collections_girls (3).webp",
          type: "storefront",
        },
        {
          label: "Storefront - Girls Collections (4)",
          path: "/images/kiddostyle.gcvdanta.com_collections_girls (4).webp",
          type: "storefront",
        },
        {
          label: "Admin Panel - Order Management",
          path: "/images/admin.kiddostyle.gcvdanta.com_ (1).webp",
          type: "admin",
        },
        {
          label: "Admin Panel - Inventory Database",
          path: "/images/admin.kiddostyle.gcvdanta.com_ (3).webp",
          type: "admin",
        },
        {
          label: "Admin Panel - Telemetry Config",
          path: "/images/admin.kiddostyle.gcvdanta.com_ (4).webp",
          type: "admin",
        },
      ],
    },
    {
      id: "praxorium",
      title: "Educational Management Portal & Learning Analytics Panel",
      client: "Praxorium",
      category: "platform",
      description:
        "Architected an enterprise learning management portal featuring real-time evaluation metrics, automated compliance reporting, and student performance dashboard telemetry.",
      outcome: "99.9% course completion rate",
      tags: [
        "Vite",
        "React",
        "GraphQL API",
        "Tailwind CSS",
        "Chart.js",
        "Express.js",
      ],
      image: "/images/praxorium.gcvdanta.com_.webp", // main cover
      challenge:
        "Praxorium needed a scalable portal to administer curriculum modules, deliver low-latency video lectures, track legal compliance standards, and render student evaluation matrices dynamically in graphic formats.",
      solution:
        "We developed a robust educational dashboard using React and Tailwind CSS. The interface utilizes high-performance charting libraries to plot student grade distributions and automated modules to generate printable certification logs.",
      architecture: [
        "React SPA utilizing state-driven dashboard analytics and real-time filters.",
        "GraphQL API queries for low-bandwidth data transfers.",
        "Chart.js integrations rendering interactive student telemetry models.",
        "HIPAA-inspired data encryption standards securing student records.",
      ],
      metrics: [
        { label: "Active Student Enrollment", value: "12,000+" },
        { label: "Video playback latency", value: "< 200ms" },
        { label: "Compliance Report Generation", value: "Instant" },
      ],
      siteUrl: "https://praxorium.gcvdanta.com/",
      adminUrl: "https://admin.praxorium.gcvdanta.com/",
      screenshots: [
        {
          label: "Storefront - Academy Portal",
          path: "/images/praxorium.gcvdanta.com_.webp",
          type: "storefront",
        },
        {
          label: "Storefront - Course Catalog",
          path: "/images/praxorium.gcvdanta.com_ (1).webp",
          type: "storefront",
        },
        {
          label: "Storefront - Interactive Lectures",
          path: "/images/praxorium.gcvdanta.com_ (2).webp",
          type: "storefront",
        },
        {
          label: "Storefront - Syllabus Plan",
          path: "/images/praxorium.gcvdanta.com_ (3).webp",
          type: "storefront",
        },
        {
          label: "Storefront - Profile Settings",
          path: "/images/praxorium.gcvdanta.com_ (4).webp",
          type: "storefront",
        },
        {
          label: "Storefront - Certifications",
          path: "/images/praxorium.gcvdanta.com_ (5).webp",
          type: "storefront",
        },
        {
          label: "Admin Panel - Student Analytics",
          path: "/images/admin.praxorium.gcvdanta.com_.webp",
          type: "admin",
        },
        {
          label: "Admin Panel - Course Editor",
          path: "/images/admin.praxorium.gcvdanta.com_ (1).webp",
          type: "admin",
        },
        {
          label: "Admin Panel - Course Editor Details",
          path: "/images/admin.praxorium.gcvdanta.com_ (1) (1).webp",
          type: "admin",
        },
        {
          label: "Admin Panel - Grade Telemetry",
          path: "/images/admin.praxorium.gcvdanta.com_ (2).webp",
          type: "admin",
        },
        {
          label: "Admin Panel - Legal Compliance Logs",
          path: "/images/admin.praxorium.gcvdanta.com_ (3).webp",
          type: "admin",
        },
      ],
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
          {(
            [
              { id: "all", label: "All Work" },
              { id: "platform", label: "Enterprise platforms" },
              { id: "design", label: "UX/UI designs" },
            ] as { id: ProjectCategory; label: string }[]
          ).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded text-sm font-semibold transition-all uppercase tracking-wider border ${
                filter === cat.id
                  ? "bg-azure-blue border-azure-blue text-white shadow-sm"
                  : "bg-white border-surface-variant text-slate-gray hover:border-slate-gray hover:text-charcoal"
              }`}
            >
              {cat.label}
            </button>
          ))}
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

              {/* Tags & Action Footer */}
              <div className="px-8 pb-8 pt-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t border-surface-container-low mt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-surface-gray border border-surface-variant rounded text-[10px] font-semibold text-slate-gray"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-semibold text-slate-400 self-center">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="font-body text-xs font-bold text-azure-blue hover:text-[#0055c8] inline-flex items-center gap-1 focus:outline-none shrink-0"
                >
                  View Case Study
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
