import { useState, useEffect } from "react";

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
  description: string;
  outcome: string;
  tags: string[];
  image: string;
  challenge: string;
  solution: string;
  architecture: string[];
  metrics: Metric[];
  siteUrl: string;
  adminUrl: string;
  screenshots: Screenshot[];
}

interface CaseStudyDetailProps {
  project: Project | null;
  onBack: () => void;
}

// 🌐 Custom SVG Tech Icons helper
function getTechIcon(tag: string, className = "w-5 h-5") {
  const normalized = tag.toLowerCase();
  
  if (normalized.includes("react")) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }
  if (normalized.includes("next")) {
    return (
      <svg className={`${className} rounded-full bg-black border border-white/20`} viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="black"/>
        <path d="M149.508 157.52L69.142 54H54v72h14.4V69.957l67.873 87.563c4.103-3.79 7.848-8.036 11.168-12.632zM126 54h14.4v72H126V54z" fill="white"/>
      </svg>
    );
  }
  if (normalized.includes("typescript")) {
    return (
      <svg className={`${className} rounded-sm`} viewBox="0 0 100 100" fill="#3178c6">
        <rect width="100" height="100" rx="10"/>
        <text x="50" y="70" fill="white" fontSize="60" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">TS</text>
      </svg>
    );
  }
  if (normalized.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#38bdf8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.002 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.002 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    );
  }
  if (normalized.includes("vite")) {
    return (
      <svg className={className} viewBox="0 0 32 32">
        <path d="M16 2.6L2.6 26.6h26.8z" fill="url(#viteGrad2)"/>
        <path d="M19.4 6L11 20h6l-3 8 11-13h-7z" fill="#ffdf00"/>
        <defs>
          <linearGradient id="viteGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#41d1ff"/>
            <stop offset="100%" stopColor="#bd34fe"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (normalized.includes("golang") || normalized.includes("go / golang") || normalized.includes("go mod")) {
    const widthClass = className.replace("w-5", "w-6");
    return (
      <svg className={widthClass} viewBox="0 0 1200 484" fill="#00ADD8">
        <path d="M127.8 242c0-37.1 9-67 27-89.8s42.4-34.2 73.2-34.2c26 0 46.8 6.4 62.4 19.2s26 29.8 31.2 51h-51c-4.4-11.8-11-20.9-19.8-27.3s-19-9.6-30.6-9.6c-17 0-30 6-39 18s-13.5 28.5-13.5 49.5c0 21.3 4.5 38.4 13.5 51.3s22.2 19.3 39.6 19.3c13.8 0 24.6-4.1 32.4-12.3s12.3-20.1 13.5-35.7h-47.4v-39h97.2v118.8h-48v-25.2c-7.8 9.6-17.7 17.1-29.7 22.5s-25.2 8.1-39.6 8.1c-31.4 0-56.3-11.4-74.7-34.2s-27.5-54.8-27.5-95.9zm276 75.6c-17.6 0-32-6.1-43.2-18.3s-16.8-28.5-16.8-48.9 5.6-36.8 16.8-49 25.6-18.3 43.2-18.3 32 6.1 43.2 18.3 16.8 28.6 16.8 49-5.6 36.7-16.8 48.9-25.6 18.3-43.2 18.3zm0-174.6c-31.2 0-56.4 11.4-75.6 34.2S300 231.8 300 272.9s9.4 75.3 28.2 97.8c18.8 22.5 44 33.8 75.6 33.8s56.6-11.3 75-33.8c18.4-22.5 27.6-55.1 27.6-97.8s-9.2-75.9-27.6-98.7c-18.4-22.8-43.4-34.2-75-34.2z"/>
      </svg>
    );
  }
  if (normalized.includes("framer motion")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M0 0h12v12H0V0zm12 12h12v12H12V12zm0-12l12 12H12V0zM0 12l12 12V12H0z" fill="#F012BE"/>
      </svg>
    );
  }
  if (normalized.includes("zustand")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#e2b13c" strokeWidth="2.5">
        <circle cx="12" cy="12" r="8"/>
        <path d="M12 8v8M8 12h8" strokeLinecap="round"/>
      </svg>
    );
  }
  if (normalized.includes("query") || normalized.includes("react query")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF4154">
        <circle cx="12" cy="12" r="9" fill="none" stroke="#FF4154" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    );
  }
  return (
    <svg className={`${className} text-azure-blue`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

export default function CaseStudyDetail({
  project,
  onBack,
}: CaseStudyDetailProps) {
  if (!project) return null;

  // Gallery state hooks
  const [galleryFilter, setGalleryFilter] = useState<
    "all" | "storefront" | "admin"
  >("all");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredScreenshots = project.screenshots.filter(
    (screen) => galleryFilter === "all" || screen.type === galleryFilter,
  );

  const currentScreenshot =
    filteredScreenshots[activeImageIndex] || project.screenshots[0];

  // 🔄 Automatic Slideshow Trigger (Cycles every 3 seconds)
  useEffect(() => {
    if (filteredScreenshots.length <= 1) return;

    const timer = setInterval(() => {
      setActiveImageIndex(
        (prevIndex) => (prevIndex + 1) % filteredScreenshots.length,
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [filteredScreenshots.length, galleryFilter]);

  const handleFilterChange = (filter: "all" | "storefront" | "admin") => {
    setGalleryFilter(filter);
    setActiveImageIndex(0); // Reset index to prevent overflow
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (filteredScreenshots.length <= 1) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? filteredScreenshots.length - 1 : prev - 1,
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (filteredScreenshots.length <= 1) return;
    setActiveImageIndex((prev) => (prev + 1) % filteredScreenshots.length);
  };

  // Define unique key features for each project to replace team credits
  const projectFeatures =
    project.id === "kiddostyle"
      ? [
          {
            title: "Omnichannel Sync Engine",
            desc: "Automated warehouse database matching that synchronizes physical inventory counts with storefront stock listings in under 1.5 seconds.",
            icon: "sync",
          },
          {
            title: "Low-Friction Checkout Flow",
            desc: "Highly optimized Stripe pipeline integrated with address validation API, reducing shopping cart drop-offs by 24%.",
            icon: "shopping_cart_checkout",
          },
          {
            title: "Secure Operations Control",
            desc: "Administrative dashboard with custom role hierarchies protecting financial lists and customer privacy databases.",
            icon: "shield",
          },
        ]
      : [
          {
            title: "Dynamic Curriculum Architect",
            desc: "Modular administrative editor allowing instructors to build syllabus tracks and host media files with instant rendering.",
            icon: "menu_book",
          },
          {
            title: "Real-Time Student Telemetry",
            desc: "Graphical matrices rendering active course engagement logs and certificate verification statistics.",
            icon: "analytics",
          },
          {
            title: "Security & Legal Audits",
            desc: "Built-in encryption algorithms protecting student metrics databases and meeting administrative compliance logs.",
            icon: "verified_user",
          },
        ];

  // Dynamic explanation for each tech used matching package.json
  const techExplanations =
    project.id === "kiddostyle"
      ? [
          { name: "Next.js", desc: "Powers server-side rendering (SSR) and dynamic generation for near-zero loading states and SEO indexing." },
          { name: "React 19", desc: "Leverages React Server Components and optimized rendering models for UI state management." },
          { name: "Go / Golang", desc: "Executes backend microservices and database routers with sub-millisecond execution times." },
          { name: "Zustand", desc: "Enables ultra-fast global client-side caching of cart details and warehouse options." },
          { name: "React Query", desc: "Automates API data fetching, loading flags, and background stale-while-revalidate processes." },
          { name: "Tailwind CSS v4", desc: "Applies high-speed utility class compilation and native CSS variable lookups." }
        ]
      : [
          { name: "React 19", desc: "Constructs dense client dashboard views with concurrent rendering to maintain high framerates." },
          { name: "Go / Golang", desc: "Calculates real-time student telemetries, curriculum mappings, and PDF compliance reports." },
          { name: "Vite v8", desc: "Facilitates instantaneous local hot module replacements (HMR) and optimized rollup production bundles." },
          { name: "Framer Motion", desc: "Injects fluid, spring-physics layout transitions and dashboard element animations." },
          { name: "React Query", desc: "Optimizes server state caching for high-density curriculum matrices and telemetry charts." },
          { name: "Tailwind CSS v4", desc: "Applies high-speed utility class compilation and native CSS variable lookups." }
        ];

  return (
    <div className="bg-[#f7f9fb] min-h-screen text-charcoal py-16 md:py-24 animate-fade-in">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-12">
        {/* Header Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-surface-variant pb-6 gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-azure-blue hover:text-[#0055c8] select-none"
          >
            <span className="material-symbols-outlined text-[18px]">
              arrow_back
            </span>
            Back to Project Demos
          </button>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#e2f0fd] text-azure-blue border border-[#b1c6ff] rounded-full text-xs font-semibold uppercase">
            <span className="w-1.5 h-1.5 bg-azure-blue rounded-full"></span>
            <span>{project.outcome}</span>
          </div>
        </div>

        {/* Project Identity */}
        <div className="space-y-4">
          <span className="text-azure-blue font-body text-xs font-bold tracking-widest uppercase block">
            Interactive Showcase Case Study
          </span>
          <h1 className="font-headline text-[32px] md:text-5xl font-bold leading-tight tracking-tighter text-charcoal">
            {project.title}
          </h1>
          <p className="font-body text-lg text-slate-gray max-w-4xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* 🖼️ Premium Gallery Interactive Interface Section (Safari Browser Mockup) */}
        <div className="bg-white border border-surface-variant rounded-xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-surface-variant pb-4">
            <h4 className="font-headline text-lg font-bold text-charcoal">
              Development Slideshow
            </h4>

            {/* Gallery Category Tabs */}
            <div className="flex gap-1.5 bg-surface-gray p-1 rounded-lg border border-surface-variant select-none">
              {(["all", "storefront", "admin"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleFilterChange(tab)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all ${
                    galleryFilter === tab
                      ? "bg-white text-azure-blue shadow-sm border border-surface-variant"
                      : "text-slate-gray hover:text-charcoal"
                  }`}
                >
                  {tab === "all"
                    ? "All"
                    : tab === "storefront"
                      ? "Storefront"
                      : "Admin Panel"}
                </button>
              ))}
            </div>
          </div>

          {/* High-Quality Screenshot Card Wrapper */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-md flex flex-col bg-white">

            {/* Active HD Image Preview Window (Transition Fades Sped Up to 300ms) */}
            <div className="relative aspect-video max-h-[520px] w-full bg-[#fafbfc] flex items-center justify-center shadow-inner group">
              {currentScreenshot ? (
                <>
                  <img
                    key={currentScreenshot.path}
                    src={currentScreenshot.path}
                    alt={currentScreenshot.label}
                    className="w-full h-full object-contain max-h-[520px] transition-opacity duration-300 ease-in-out animate-fade-in"
                  />

                  {/* Manual Arrow Controls (Appear on Hover) */}
                  {filteredScreenshots.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-charcoal/30 hover:bg-charcoal/80 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none z-10"
                      >
                        <span className="material-symbols-outlined">
                          chevron_left
                        </span>
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-charcoal/30 hover:bg-charcoal/80 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none z-10"
                      >
                        <span className="material-symbols-outlined">
                          chevron_right
                        </span>
                      </button>
                    </>
                  )}

                  {/* Active Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-charcoal/80 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide flex justify-between items-center z-10">
                    <span>{currentScreenshot.label}</span>
                    <span className="text-[10px] text-slate-300 font-mono uppercase bg-white/10 px-2 py-0.5 rounded">
                      {currentScreenshot.type}
                    </span>
                  </div>
                </>
              ) : (
                <span className="text-sm text-slate-gray">
                  No screenshots matching filter.
                </span>
              )}
            </div>

            {/* Slideshow Progress Bar Dashes at Bottom of Browser Mockup */}
            {filteredScreenshots.length > 1 && (
              <div className="bg-surface-gray border-t border-surface-variant py-3 px-6 flex justify-center gap-1.5 select-none">
                {filteredScreenshots.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeImageIndex === idx
                        ? "w-8 bg-azure-blue"
                        : "w-2 bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Key Outcome Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {project.metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white border border-surface-variant rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-2xl font-bold font-mono text-azure-blue block">
                {metric.value}
              </span>
              <span className="font-body text-xs text-slate-gray block mt-2 uppercase tracking-wider font-semibold">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* 📱 Multi-Device Responsive Showcase Section */}
        <div className="bg-white border border-surface-variant rounded-xl p-8 shadow-sm space-y-8">
          <div className="border-b border-surface-variant pb-4">
            <h3 className="font-headline text-xl font-bold text-charcoal flex items-center gap-2">
              <span className="material-symbols-outlined text-azure-blue">devices</span>
              Multi-Device Responsive Mockups
            </h3>
            <p className="font-body text-xs text-slate-gray mt-1">
              Simulated production environments displaying the platform's adaptive layouts across standard form factors.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8 items-end">
            {/* 💻 Desktop Viewport (MacBook style browser) */}
            <div className="col-span-full lg:col-span-7 space-y-3">
              <span className="font-body text-[10px] font-bold text-slate-400 uppercase tracking-widest block text-center lg:text-left">
                Desktop View (1920x1080)
              </span>
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col group/desktop">
                <div className="aspect-video overflow-hidden bg-slate-50">
                  <img
                    src={project.id === "kiddostyle" 
                      ? "/images/kiddostyle.gcvdanta.com_collections_girls (2).webp" 
                      : "/images/praxorium.gcvdanta.com_ (2).webp"
                    }
                    alt="Desktop View"
                    className="w-full h-full object-cover group-hover/desktop:scale-[1.01] transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* 📟 Tablet Viewport (iPad Vertical style) */}
            <div className="col-span-6 lg:col-span-3 space-y-3">
              <span className="font-body text-[10px] font-bold text-slate-400 uppercase tracking-widest block text-center">
                Tablet View (768x1024)
              </span>
              <div className="relative border border-slate-200 rounded-2xl overflow-hidden shadow-xl bg-white aspect-[3/4] flex flex-col group/tablet">
                {/* Screen Content */}
                <div className="w-full h-full overflow-hidden bg-slate-50">
                  <img
                    src={project.id === "kiddostyle" 
                      ? "/images/kiddostyle.gcvdanta.com_collections_girls (3).webp" 
                      : "/images/praxorium.gcvdanta.com_ (3).webp"
                    }
                    alt="Tablet View"
                    className="w-full h-full object-cover group-hover/tablet:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* 📱 Mobile Viewport (iPhone Vertical style) */}
            <div className="col-span-6 lg:col-span-2 space-y-3">
              <span className="font-body text-[10px] font-bold text-slate-400 uppercase tracking-widest block text-center">
                Mobile View (375x812)
              </span>
              <div className="relative border border-slate-200 rounded-2xl overflow-hidden shadow-2xl bg-white aspect-[9/19] flex flex-col group/mobile">
                {/* Screen Content */}
                <div className="w-full h-full overflow-hidden bg-slate-50">
                  <img
                    src={project.id === "kiddostyle" 
                      ? "/images/admin.kiddostyle.gcvdanta.com_ (4).webp" 
                      : "/images/admin.praxorium.gcvdanta.com_.webp"
                    }
                    alt="Mobile View"
                    className="w-full h-full object-cover group-hover/mobile:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Platform Capabilities */}
        <div className="bg-white border border-surface-variant rounded-xl p-8 shadow-sm">
          <h3 className="font-headline text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-azure-blue">
              architecture
            </span>
            Core Platform Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectFeatures.map((feat, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-3 bg-[#e2f0fd] text-azure-blue rounded-lg shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    {feat.icon}
                  </span>
                </div>
                <div className="font-body text-sm space-y-1">
                  <span className="font-semibold text-charcoal block">
                    {feat.title}
                  </span>
                  <p className="text-xs text-slate-gray leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 💻 Technology Stack & Infrastructure Details */}
        <div className="bg-white border border-surface-variant rounded-xl p-8 shadow-sm">
          <h3 className="font-headline text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-azure-blue">
              layers
            </span>
            Technology Stack & Selection Rationale
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techExplanations.map((tech, index) => (
              <div key={index} className="p-5 border border-slate-100 hover:border-azure-blue/30 rounded-2xl transition-all duration-300 bg-[#fafafa]/50 hover:bg-white flex gap-4 hover:shadow-md">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/50 flex items-center justify-center shrink-0 shadow-inner">
                  {getTechIcon(tech.name, "w-5 h-5")}
                </div>
                <div className="space-y-1">
                  <h4 className="font-headline text-sm font-extrabold text-charcoal">
                    {tech.name}
                  </h4>
                  <p className="font-body text-xs text-slate-gray leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Columns: Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-surface-variant">
          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-bold text-charcoal">
              The Challenge
            </h3>
            <p className="font-body text-sm text-slate-gray leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-bold text-charcoal">
              The Solution
            </h3>
            <p className="font-body text-sm text-slate-gray leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* System Architecture Details */}
        <div className="space-y-6 pt-8 border-t border-surface-variant">
          <h3 className="font-headline text-2xl font-bold text-charcoal">
            System Architecture & Engineering
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-body text-sm text-slate-gray">
            {project.architecture.map((arch, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-white p-4 border border-surface-variant rounded-lg hover:border-azure-blue/20 transition-colors"
              >
                <span className="material-symbols-outlined text-azure-blue mt-0.5">
                  check_circle
                </span>
                <span>{arch}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
