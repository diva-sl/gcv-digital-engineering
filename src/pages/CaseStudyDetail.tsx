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
            Back to Portfolio
          </button>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#e2f0fd] text-azure-blue border border-[#b1c6ff] rounded-full text-xs font-semibold uppercase">
            <span className="w-1.5 h-1.5 bg-azure-blue rounded-full"></span>
            <span>{project.outcome}</span>
          </div>
        </div>

        {/* Project Identity */}
        <div className="space-y-4">
          <span className="text-azure-blue font-body text-xs font-bold tracking-widest uppercase block">
            Case Study: {project.client}
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

          {/* Premium Browser Mockup Wrapper */}
          <div className="border border-surface-variant rounded-xl overflow-hidden shadow-md flex flex-col bg-white">
            {/* macOS Browser Header Panel */}
            <div className="bg-surface-gray border-b border-surface-variant px-4 py-3 flex items-center gap-2 select-none relative">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>

              {/* Fake URL Bar */}
              <div className="mx-auto bg-white border border-surface-variant/60 rounded-md text-[11px] text-slate-400 py-1 px-8 w-1/2 text-center truncate font-mono">
                {project.id === "kiddostyle"
                  ? "kiddostyle.gcvdanta.com"
                  : "praxorium.gcvdanta.com"}
              </div>
            </div>

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
              className="bg-white border border-surface-variant rounded-lg p-6 text-center shadow-sm"
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

        {/* Core Platform Capabilities (Replaces Project Credits) */}
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
                className="flex items-start gap-3 bg-white p-4 border border-surface-variant rounded-lg"
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
