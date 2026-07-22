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

// 🌐 Custom SVG Tech Icons helper matching package.json (with customizable class size)
function getTechIcon(tag: string, className = "w-4 h-4") {
  const normalized = tag.toLowerCase();

  if (normalized.includes("react")) {
    return (
      <svg
        className={className}
        viewBox="-11.5 -10.23174 23 20.46348"
        fill="none"
      >
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }
  if (normalized.includes("next")) {
    return (
      <svg
        className={`${className} rounded-full bg-black border border-white/20`}
        viewBox="0 0 180 180"
        fill="none"
      >
        <circle cx="90" cy="90" r="90" fill="black" />
        <path
          d="M149.508 157.52L69.142 54H54v72h14.4V69.957l67.873 87.563c4.103-3.79 7.848-8.036 11.168-12.632zM126 54h14.4v72H126V54z"
          fill="white"
        />
      </svg>
    );
  }
  if (normalized.includes("typescript")) {
    return (
      <svg
        className={`${className} rounded-sm`}
        viewBox="0 0 100 100"
        fill="#3178c6"
      >
        <rect width="100" height="100" rx="10" />
        <text
          x="50"
          y="70"
          fill="white"
          fontSize="60"
          fontWeight="bold"
          fontFamily="sans-serif"
          textAnchor="middle"
        >
          TS
        </text>
      </svg>
    );
  }
  if (normalized.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#38bdf8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.002 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.002 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    );
  }
  if (normalized.includes("vite")) {
    return (
      <svg className={className} viewBox="0 0 32 32">
        <path d="M16 2.6L2.6 26.6h26.8z" fill="url(#viteGrad)" />
        <path d="M19.4 6L11 20h6l-3 8 11-13h-7z" fill="#ffdf00" />
        <defs>
          <linearGradient id="viteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#41d1ff" />
            <stop offset="100%" stopColor="#bd34fe" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (
    normalized.includes("golang") ||
    normalized.includes("go / golang") ||
    normalized.includes("go mod")
  ) {
    return (
      <svg
        className={`${className} rounded-md`}
        viewBox="0 0 100 100"
        fill="#00ADD8"
      >
        <rect width="100" height="100" rx="15" />
        <text
          x="50"
          y="70"
          fill="white"
          fontSize="58"
          fontWeight="bold"
          fontFamily="sans-serif"
          textAnchor="middle"
        >
          Go
        </text>
      </svg>
    );
  }
  if (normalized.includes("framer motion")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M0 0h12v12H0V0zm12 12h12v12H12V12zm0-12l12 12H12V0zM0 12l12 12V12H0z"
          fill="#F012BE"
        />
      </svg>
    );
  }
  if (normalized.includes("zustand")) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e2b13c"
        strokeWidth="2.5"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8M8 12h8" strokeLinecap="round" />
      </svg>
    );
  }
  if (normalized.includes("query") || normalized.includes("react query")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF4154">
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="#FF4154"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4" />
      </svg>
    );
  }
  return (
    <svg
      className={`${className} text-azure-blue`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
}

export default function Work({ onSelectProject }: WorkProps) {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const projects: Project[] = [
    {
      id: "kiddostyle",
      title: "Kids Wear eCommerce & Warehouse Automation Panel",
      client: "Kids Fashion eCommerce",
      category: "platform",
      description:
        "Engineered a premium children's clothing e-commerce storefront alongside a secure warehouse administration dashboard, enabling low-latency inventory management and high-volume concurrent checkout operations.",
      outcome: "+38% sales conversion increase",
      tags: [
        "Next.js",
        "React 19",
        "Go / Golang",
        "Tailwind CSS v4",
        "Zustand",
        "React Query",
      ],
      image: "/images/kiddostyle_exact_home_2d.jpg",
      challenge:
        "The eCommerce storefront required capability to host high-resolution image galleries with instant load times, coupled with a back-end administration panel to synchronize inventory across multiple warehouses in real-time.",
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
          label: "Storefront - Home Landing Page",
          path: "/images/kiddostyle_exact_home_2d.jpg",
          type: "storefront",
        },
        {
          label: "Storefront - Product Detail Page",
          path: "/images/kiddostyle_exact_product_2d.jpg",
          type: "storefront",
        },
        {
          label: "Storefront - Cart & Checkout Review",
          path: "/images/kiddostyle_exact_cart_2d.jpg",
          type: "storefront",
        },
        {
          label: "Admin Panel - Dashboard Overview",
          path: "/images/kiddostyle_exact_admin_dashboard_2d.jpg",
          type: "admin",
        },
        {
          label: "Admin Panel - Order Management",
          path: "/images/kiddostyle_exact_admin_orders_2d.jpg",
          type: "admin",
        },
        {
          label: "Admin Panel - Product Catalog Management",
          path: "/images/kiddostyle_exact_admin_products_2d.jpg",
          type: "admin",
        },
      ],
    },
    {
      id: "praxorium",
      title: "SaaS Learning Management Portal & Analytics Panel",
      client: "LMS & Educational SaaS",
      category: "platform",
      description:
        "Architected an enterprise learning management portal featuring real-time evaluation metrics, automated compliance reporting, and student performance dashboard telemetry.",
      outcome: "99.9% course completion rate",
      tags: [
        "React 19",
        "Go / Golang",
        "Vite v8",
        "Tailwind CSS v4",
        "Framer Motion",
        "React Query",
      ],
      image: "/images/praxorium.gcvdanta.com.png",
      challenge:
        "The educational SaaS required a scalable portal to administer curriculum modules, deliver low-latency video lectures, track legal compliance standards, and render student evaluation matrices dynamically in graphic formats.",
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
          path: "/images/praxorium.gcvdanta.com.png",
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
      {/* 🚀 CSS Floater styles injected directly into the view */}
      <style>{`
        @keyframes float-tag-1 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        @keyframes float-tag-2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(6px) scale(0.98); }
        }
        @keyframes float-tag-3 {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(6px) translateY(-5px); }
        }
        .animate-float-tag-1 { animation: float-tag-1 4.5s ease-in-out infinite; }
        .animate-float-tag-2 { animation: float-tag-2 5s ease-in-out infinite; }
        .animate-float-tag-3 { animation: float-tag-3 4s ease-in-out infinite; }
      `}</style>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-azure-blue font-body text-xs font-bold tracking-widest uppercase block">
            Project Demos
          </span>
          <h1 className="font-headline text-[36px] md:text-5xl font-bold leading-tight tracking-tighter">
            Interactive Client Showcases
          </h1>
          <p className="font-body text-lg text-slate-gray leading-relaxed">
            Explore GCV's production-ready project applications. We design,
            construct, and deploy customized digital products and
            high-performance SaaS solutions.
          </p>
        </div>

        {/* Filter Switcher Controls */}
        <div className="flex flex-wrap gap-2 mb-16 border-b border-surface-variant pb-6 select-none">
          {(
            [
              { id: "all", label: "All Showcases" },
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

        {/* Vertical Stack of Cards */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => {
            // Setup floating tags for each project with actual SVGs from package.json (sized medium)
            const floatingTags =
              project.id === "kiddostyle"
                ? [
                    {
                      label: "Next.js",
                      icon: getTechIcon("next", "w-6 h-6"),
                      style: "top-6 left-6 animate-float-tag-1",
                    },
                    {
                      label: "React 19",
                      icon: getTechIcon("react", "w-6 h-6"),
                      style: "bottom-6 right-6 animate-float-tag-2",
                    },
                    {
                      label: "Go / Golang",
                      icon: getTechIcon("golang", "w-6 h-6"),
                      style:
                        "top-1/2 right-6 -translate-y-1/2 animate-float-tag-3",
                    },
                  ]
                : [
                    {
                      label: "React 19",
                      icon: getTechIcon("react", "w-6 h-6"),
                      style: "top-6 left-6 animate-float-tag-1",
                    },
                    {
                      label: "Go / Golang",
                      icon: getTechIcon("golang", "w-6 h-6"),
                      style: "bottom-6 right-6 animate-float-tag-2",
                    },
                    {
                      label: "Framer Motion",
                      icon: getTechIcon("framer motion", "w-6 h-6"),
                      style:
                        "top-1/2 right-6 -translate-y-1/2 animate-float-tag-3",
                    },
                  ];

            return (
              <div
                key={idx}
                className="bg-white border border-surface-variant rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-100/80 transition-all duration-500 hover:border-azure-blue/40 p-6 md:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: High-Quality Screenshot Card & floating tags */}
                  <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-video border border-slate-200/50 bg-[#fafbfc] group/img shadow-md animate-fade-in flex flex-col">
                    <div className="relative overflow-hidden aspect-video bg-slate-50 flex-1">
                      {/* Shadow overlay */}
                      <div className="absolute inset-0 bg-charcoal/10 group-hover/img:bg-transparent transition-colors z-10"></div>

                      {/* Main Image (Optimized for High Quality / Crisp Edges) */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/img:scale-[1.01] transition-transform duration-700"
                        style={{ imageRendering: "auto" }}
                      />

                      {/* Floating Glassmorphic Circles with only vector logo and moving effects */}
                      {floatingTags.map((tag, tIdx) => (
                        <div
                          key={tIdx}
                          className={`absolute ${tag.style} z-20 backdrop-blur-md bg-white/20 border border-white/30 rounded-full w-12 h-12 flex items-center justify-center shadow-lg select-none hover:scale-110 hover:bg-white/35 transition-all duration-300 cursor-default`}
                          title={tag.label}
                        >
                          {tag.icon}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Title, description, outcomes, metrics, tags, action button */}
                  <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Client outcome badge */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-widest">
                          {project.client}
                        </span>
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#e2f0fd] text-azure-blue border border-[#b1c6ff] rounded-full text-[10px] font-bold uppercase tracking-wider select-none">
                          <span className="w-1.5 h-1.5 bg-azure-blue rounded-full animate-pulse"></span>
                          <span>{project.outcome}</span>
                        </div>
                      </div>

                      {/* Heading */}
                      <h2 className="font-headline text-2xl md:text-3xl font-extrabold text-charcoal leading-tight tracking-tight mb-4">
                        {project.title}
                      </h2>

                      {/* Description */}
                      <p className="font-body text-sm md:text-base text-slate-gray leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Technologies with Icons */}
                      <div className="space-y-2 mb-6">
                        <span className="font-body text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                          Technologies Utilized
                        </span>
                        <div className="flex flex-wrap gap-2.5">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="inline-flex items-center gap-2 px-3 py-2 bg-surface-gray border border-surface-variant rounded-xl text-xs font-bold text-slate-gray select-none"
                            >
                              {getTechIcon(tag)}
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Explore Case Study button */}
                    <div className="pt-4 border-t border-slate-100 flex justify-start">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white active:scale-98 font-body text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer"
                      >
                        Explore Case Study & Demo Controls
                        <span className="material-symbols-outlined text-sm">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
