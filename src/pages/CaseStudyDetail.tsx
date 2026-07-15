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
    }, 3000); // 3 seconds interval

    return () => clearInterval(timer);
  }, [filteredScreenshots.length, galleryFilter]);

  const handleFilterChange = (filter: "all" | "storefront" | "admin") => {
    setGalleryFilter(filter);
    setActiveImageIndex(0); // Reset index to prevent overflow
  };

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

        {/* Target Action Links */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-charcoal text-white font-body text-sm font-semibold rounded hover:bg-opacity-90 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">
              open_in_new
            </span>
            Live Storefront
          </a>
          <a
            href={project.adminUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-charcoal text-charcoal font-body text-sm font-semibold rounded hover:bg-charcoal hover:text-white active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">
              dashboard
            </span>
            Administration Panel
          </a>
        </div>

        {/* 🖼️ Premium Gallery Interactive Interface Section */}
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

          {/* Active HD Image Preview Window (Transition Fades Sped Up to 300ms) */}
          <div className="relative aspect-video max-h-[520px] w-full rounded-lg overflow-hidden bg-[#fafbfc] border border-surface-variant flex items-center justify-center shadow-inner group">
            {currentScreenshot ? (
              <>
                <img
                  key={currentScreenshot.path}
                  src={currentScreenshot.path}
                  alt={currentScreenshot.label}
                  className="w-full h-full object-contain max-h-[520px] transition-opacity duration-300 ease-in-out animate-fade-in"
                />
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

        {/* Project Credits & Creative Team */}
        <div className="bg-white border border-surface-variant rounded-xl p-8 shadow-sm">
          <h3 className="font-headline text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-azure-blue">
              groups
            </span>
            Project Contributor Credits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-surface-container-low rounded-lg shrink-0">
                <span className="material-symbols-outlined text-azure-blue text-[28px]">
                  terminal
                </span>
              </div>
              <div className="font-body text-sm">
                <span className="font-semibold text-charcoal block">
                  Full Stack Development
                </span>
                <span className="text-slate-gray text-xs block mt-0.5">
                  Divakaran S
                </span>
                <div className="flex gap-3 mt-3">
                  <a
                    href="https://github.com/diva-sl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-azure-blue text-xs font-semibold hover:underline flex items-center gap-1"
                  >
                    GitHub{" "}
                    <span className="material-symbols-outlined text-[12px]">
                      open_in_new
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/divakarans/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-azure-blue text-xs font-semibold hover:underline flex items-center gap-1"
                  >
                    LinkedIn{" "}
                    <span className="material-symbols-outlined text-[12px]">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-surface-container-low rounded-lg shrink-0">
                <span className="material-symbols-outlined text-azure-blue text-[28px]">
                  palette
                </span>
              </div>
              <div className="font-body text-sm">
                <span className="font-semibold text-charcoal block">
                  UI/UX & Creative Direction
                </span>
                <span className="text-slate-gray text-xs block mt-0.5">
                  Rajesh Bandila
                </span>
                <p className="text-[11px] text-slate-400 mt-2">
                  Engineered with high-fidelity Figma mockups and generative AI
                  visual technology assets.
                </p>
              </div>
            </div>
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
