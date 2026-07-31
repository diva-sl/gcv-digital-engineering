import { useState, useEffect } from "react";

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

interface HeaderProps {
  currentPage: Exclude<Page, "case-study">;
  onPageChange: (page: Page) => void;
  onSelectSection: (sectionId: string) => void;
}

export default function Header({
  currentPage,
  onPageChange,
  onSelectSection,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<
    "services" | "products" | "about" | null
  >(null);

  // 🔗 Browser-compatible timer state (replaces NodeJS.Timeout)
  const [leaveTimeoutId, setLeaveTimeoutId] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⏱️ Debounced Hover Handlers (using window-prefixed timer operations)
  const handleMouseEnter = () => {
    if (leaveTimeoutId !== null) {
      window.clearTimeout(leaveTimeoutId);
      setLeaveTimeoutId(null);
    }
    setActiveMenu("services");
  };

  const handleMouseLeave = () => {
    const id = window.setTimeout(() => {
      setActiveMenu(null);
    }, 150); // 150ms buffer time keeps menu open during cursor transitions
    setLeaveTimeoutId(id);
  };

  const handleNavClick = (page: Page, e: React.MouseEvent) => {
    e.preventDefault();
    onPageChange(page);
    setIsDrawerOpen(false);
    setActiveMenu(null);
  };

  const handleSubLinkClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    onPageChange("services");
    onSelectSection(sectionId);
    setActiveMenu(null);
    setIsDrawerOpen(false);
  };

  return (
    <header>
      {/* Navigation Bar */}
      <nav
        id="main-nav"
        className={`fixed top-0 w-full z-50 border-b border-surface-variant transition-all duration-300 ${
          isScrolled ? "shadow-md bg-white/95 backdrop-blur-sm" : "bg-white"
        }`}
      >
        <div
          className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center relative transition-all duration-300 ${
            isScrolled ? "py-2" : "py-4"
          }`}
        >
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick("home", e)}
            className="shrink-0 select-none flex items-center"
          >
            <img
              src="/logos/GCV Logo.svg"
              alt="GCV Digital Engineering Logo"
              className="h-8 w-auto md:h-9"
            />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {/* Services Link with Mega Menu */}
            <div
              className="h-full py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={(e) => handleNavClick("services", e)}
                className={`font-body text-sm font-semibold transition-colors duration-200 inline-flex items-center gap-1 focus:outline-none ${
                  currentPage === "services" || activeMenu === "services"
                    ? "text-azure-blue"
                    : "text-charcoal hover:text-azure-blue"
                }`}
              >
                Services
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMenu(
                      activeMenu === "services" ? null : "services",
                    );
                  }}
                  className={`material-symbols-outlined text-[18px] transition-transform duration-200 hover:text-azure-blue ${
                    activeMenu === "services" ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>

              {/* Mega Menu Services */}
              <div
                className={`absolute left-0 top-full w-full bg-white border-b border-surface-variant shadow-xl transition-all duration-300 ${
                  activeMenu === "services"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2 pointer-events-none"
                }`}
              >
                <div className="max-w-container-max mx-auto px-margin-desktop py-10 grid grid-cols-12 gap-6">
                  <div className="col-span-3 border-r border-surface-variant pr-6 flex flex-col justify-center">
                    <h4 className="font-headline text-lg font-semibold text-charcoal mb-3">
                      Core Capabilities
                    </h4>
                    <p className="font-body text-xs text-slate-gray mb-6 leading-relaxed">
                      End-to-end digital engineering expertise focused on
                      business impact.
                    </p>
                    {/* <a
                      className="inline-flex items-center text-azure-blue text-xs font-semibold hover:underline gap-1 select-none"
                      href="/services"
                      onClick={(e) => handleNavClick("services", e)}
                    >
                      View all capabilities{" "}
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </a> */}
                  </div>

                  <div className="col-span-9 grid grid-cols-4 gap-y-6 gap-x-4">
                    {/* Strategy & Design Column */}
                    <div>
                      <p className="font-body text-[10px] text-slate-gray font-bold uppercase tracking-widest mb-3 select-none">
                        Strategy & Design
                      </p>
                      <ul className="space-y-1">
                        <li>
                          <a
                            className="group/item flex items-center gap-2.5 p-2 rounded-lg hover:bg-azure-blue/5 border border-transparent hover:border-azure-blue/10 transition-all duration-200"
                            href="/services"
                            onClick={(e) =>
                              handleSubLinkClick("services-strategy", e)
                            }
                          >
                            <span className="material-symbols-outlined text-slate-400 group-hover/item:text-azure-blue transition-colors text-[20px]">
                              track_changes
                            </span>
                            <div className="flex flex-col">
                              <span className="font-body text-xs font-semibold text-charcoal group-hover/item:text-azure-blue transition-colors">
                                Product Strategy
                              </span>
                              <span className="text-[10px] text-slate-gray leading-none mt-1">
                                Goal alignment & roadmaps
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="group/item flex items-center gap-2.5 p-2 rounded-lg hover:bg-azure-blue/5 border border-transparent hover:border-azure-blue/10 transition-all duration-200"
                            href="/services"
                            onClick={(e) =>
                              handleSubLinkClick("services-experience", e)
                            }
                          >
                            <span className="material-symbols-outlined text-slate-400 group-hover/item:text-azure-blue transition-colors text-[20px]">
                              palette
                            </span>
                            <div className="flex flex-col">
                              <span className="font-body text-xs font-semibold text-charcoal group-hover/item:text-azure-blue transition-colors">
                                UI/UX Development
                              </span>
                              <span className="text-[10px] text-slate-gray leading-none mt-1">
                                Interactive interfaces
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Custom Engineering Column */}
                    <div>
                      <p className="font-body text-[10px] text-slate-gray font-bold uppercase tracking-widest mb-3 select-none">
                        Engineering
                      </p>
                      <ul className="space-y-1">
                        <li>
                          <a
                            className="group/item flex items-center gap-2.5 p-2 rounded-lg hover:bg-azure-blue/5 border border-transparent hover:border-azure-blue/10 transition-all duration-200"
                            href="/services"
                            onClick={(e) =>
                              handleSubLinkClick("services-engineering", e)
                            }
                          >
                            <span className="material-symbols-outlined text-slate-400 group-hover/item:text-azure-blue transition-colors text-[20px]">
                              code
                            </span>
                            <div className="flex flex-col">
                              <span className="font-body text-xs font-semibold text-charcoal group-hover/item:text-azure-blue transition-colors">
                                Software Dev
                              </span>
                              <span className="text-[10px] text-slate-gray leading-none mt-1">
                                Full-stack application systems
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="group/item flex items-center gap-2.5 p-2 rounded-lg hover:bg-azure-blue/5 border border-transparent hover:border-azure-blue/10 transition-all duration-200"
                            href="/services"
                            onClick={(e) =>
                              handleSubLinkClick("services-engineering", e)
                            }
                          >
                            <span className="material-symbols-outlined text-slate-400 group-hover/item:text-azure-blue transition-colors text-[20px]">
                              cloud
                            </span>
                            <div className="flex flex-col">
                              <span className="font-body text-xs font-semibold text-charcoal group-hover/item:text-azure-blue transition-colors">
                                Cloud & DevOps
                              </span>
                              <span className="text-[10px] text-slate-gray leading-none mt-1">
                                AWS scale & CI/CD pipeline
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* E-Commerce Column */}
                    <div>
                      <p className="font-body text-[10px] text-slate-gray font-bold uppercase tracking-widest mb-3 select-none">
                        E-Commerce
                      </p>
                      <ul className="space-y-1">
                        <li>
                          <a
                            className="group/item flex items-center gap-2.5 p-2 rounded-lg hover:bg-azure-blue/5 border border-transparent hover:border-azure-blue/10 transition-all duration-200"
                            href="/services"
                            onClick={(e) =>
                              handleSubLinkClick("services-product-dev", e)
                            }
                          >
                            <span className="material-symbols-outlined text-slate-400 group-hover/item:text-azure-blue transition-colors text-[20px]">
                              shopping_bag
                            </span>
                            <div className="flex flex-col">
                              <span className="font-body text-xs font-semibold text-charcoal group-hover/item:text-azure-blue transition-colors">
                                Storefront Dev
                              </span>
                              <span className="text-[10px] text-slate-gray leading-none mt-1">
                                Next.js & Headless setups
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="group/item flex items-center gap-2.5 p-2 rounded-lg hover:bg-azure-blue/5 border border-transparent hover:border-azure-blue/10 transition-all duration-200"
                            href="/services"
                            onClick={(e) =>
                              handleSubLinkClick("services-product-dev", e)
                            }
                          >
                            <span className="material-symbols-outlined text-slate-400 group-hover/item:text-azure-blue transition-colors text-[20px]">
                              stay_current_portrait
                            </span>
                            <div className="flex flex-col">
                              <span className="font-body text-xs font-semibold text-charcoal group-hover/item:text-azure-blue transition-colors">
                                Mobile Commerce
                              </span>
                              <span className="text-[10px] text-slate-gray leading-none mt-1">
                                Cross-platform retail apps
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Enterprise Column */}
                    <div>
                      <p className="font-body text-[10px] text-slate-gray font-bold uppercase tracking-widest mb-3 select-none">
                        Enterprise
                      </p>
                      <ul className="space-y-1">
                        <li>
                          <a
                            className="group/item flex items-center gap-2.5 p-2 rounded-lg hover:bg-azure-blue/5 border border-transparent hover:border-azure-blue/10 transition-all duration-200"
                            href="/services"
                            onClick={(e) =>
                              handleSubLinkClick("services-enterprise", e)
                            }
                          >
                            <span className="material-symbols-outlined text-slate-400 group-hover/item:text-azure-blue transition-colors text-[20px]">
                              groups
                            </span>
                            <div className="flex flex-col">
                              <span className="font-body text-xs font-semibold text-charcoal group-hover/item:text-azure-blue transition-colors">
                                HRM & CRM
                              </span>
                              <span className="text-[10px] text-slate-gray leading-none mt-1">
                                Corporate workflow management
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="group/item flex items-center gap-2.5 p-2 rounded-lg hover:bg-azure-blue/5 border border-transparent hover:border-azure-blue/10 transition-all duration-200"
                            href="/services"
                            onClick={(e) =>
                              handleSubLinkClick("services-enterprise", e)
                            }
                          >
                            <span className="material-symbols-outlined text-slate-400 group-hover/item:text-azure-blue transition-colors text-[20px]">
                              business
                            </span>
                            <div className="flex flex-col">
                              <span className="font-body text-xs font-semibold text-charcoal group-hover/item:text-azure-blue transition-colors">
                                ERP & LMS
                              </span>
                              <span className="text-[10px] text-slate-gray leading-none mt-1">
                                Schooling & scaling platforms
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Page Link */}
            <div className="h-full py-2">
              <a
                href="/products"
                onClick={(e) => handleNavClick("products", e)}
                className={`font-body text-sm font-semibold transition-colors duration-200 ${
                  currentPage === "products"
                    ? "text-azure-blue border-b-2 border-azure-blue pb-1"
                    : "text-charcoal hover:text-azure-blue"
                }`}
              >
                Products
              </a>
            </div>

            {/* Work Portfolio Page Link */}
            <div className="h-full py-2">
              <a
                href="/work"
                onClick={(e) => handleNavClick("work", e)}
                className={`font-body text-sm font-semibold transition-colors duration-200 ${
                  currentPage === "work"
                    ? "text-azure-blue border-b-2 border-azure-blue pb-1"
                    : "text-charcoal hover:text-azure-blue"
                }`}
              >
                Work
              </a>
            </div>

            {/* About Page Link */}
            <div className="h-full py-2">
              <a
                href="/about"
                onClick={(e) => handleNavClick("about", e)}
                className={`font-body text-sm font-semibold transition-colors duration-200 ${
                  currentPage === "about"
                    ? "text-azure-blue border-b-2 border-azure-blue pb-1"
                    : "text-charcoal hover:text-azure-blue"
                }`}
              >
                About
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={(e) => handleNavClick("contact", e)}
              className="hidden md:block px-6 py-3 bg-charcoal text-white font-body text-sm font-semibold rounded hover:bg-opacity-90 transition-all active:scale-95 cursor-pointer"
            >
              Contact Us
            </button>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="md:hidden text-charcoal flex items-center justify-center p-2 focus:outline-none"
            >
              <span className="material-symbols-outlined text-[28px]">
                menu
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop Drawer Screen */}
      {isDrawerOpen && (
        <div
          onClick={() => setIsDrawerOpen(false)}
          className="fixed inset-0 bg-charcoal/50 z-40 transition-opacity duration-300"
        />
      )}

      {/* Responsive Navigation Drawer */}
      <aside
        className={`fixed top-0 right-0 w-80 h-full bg-white z-50 shadow-2xl p-6 overflow-y-auto flex flex-col md:hidden transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8 border-b border-surface-container-high pb-4">
          <span className="shrink-0 select-none flex items-center">
            <img
              src="/logos/GCV Logo.svg"
              alt="GCV Digital Engineering Logo"
              className="h-6 w-auto"
            />
          </span>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-charcoal p-2 focus:outline-none"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <nav className="flex-1 flex flex-col space-y-6">
          <div>
            <h5 className="font-body text-xs text-slate-gray uppercase font-semibold tracking-widest mb-3">
              Navigation
            </h5>
            <ul className="pl-4 space-y-3 border-l border-surface-container-low">
              <li>
                <a
                  href="/home"
                  onClick={(e) => handleNavClick("home", e)}
                  className={`font-body text-sm font-semibold block ${currentPage === "home" ? "text-azure-blue" : "text-charcoal"}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleNavClick("services", e)}
                  className={`font-body text-sm font-semibold block ${currentPage === "services" ? "text-azure-blue" : "text-charcoal"}`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  onClick={(e) => handleNavClick("products", e)}
                  className={`font-body text-sm font-semibold block ${currentPage === "products" ? "text-azure-blue" : "text-charcoal"}`}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/work"
                  onClick={(e) => handleNavClick("work", e)}
                  className={`font-body text-sm font-semibold block ${currentPage === "work" ? "text-azure-blue" : "text-charcoal"}`}
                >
                  Work Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNavClick("about", e)}
                  className={`font-body text-sm font-semibold block ${currentPage === "about" ? "text-azure-blue" : "text-charcoal"}`}
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mt-8 border-t border-surface-container-high pt-6">
          <button
            onClick={(e) => handleNavClick("contact", e)}
            className="w-full py-4 bg-charcoal text-white font-body text-sm font-semibold rounded shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </aside>
    </header>
  );
}
