import { FormEvent } from "react";

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

interface FooterProps {
  onPageChange: (page: Page) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to GCV insights!");
  };

  const handleNavClick = (page: Page, e: React.MouseEvent) => {
    e.preventDefault();
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left branding information */}
          <div className="col-span-full lg:col-span-4">
            <a
              href="#"
              onClick={(e) => handleNavClick("home", e)}
              className="font-headline text-2xl font-bold mb-6 block hover:text-[#e2f0fd] transition-colors"
            >
              GCV
            </a>
            <p className="text-slate-gray font-body text-sm leading-relaxed mb-8 pr-4">
              Building the digital foundations for tomorrow's market leaders
              through design-led engineering.
            </p>
            <div className="flex gap-4">
              <a
                className="text-slate-gray hover:text-white transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">language</span>
              </a>
              <a
                className="text-slate-gray hover:text-white transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
              <a
                className="text-slate-gray hover:text-white transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">hub</span>
              </a>
            </div>
          </div>

          {/* Nav Categories */}
          <div className="col-span-full sm:col-span-6 lg:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h5 className="font-body text-sm font-semibold text-white mb-6 uppercase tracking-wider">
                Services
              </h5>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-slate-gray hover:text-white hover:translate-x-1 transition-all inline-block font-body text-sm"
                    href="#"
                    onClick={(e) => handleNavClick("services", e)}
                  >
                    Strategy
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-gray hover:text-white hover:translate-x-1 transition-all inline-block font-body text-sm"
                    href="#"
                    onClick={(e) => handleNavClick("services", e)}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-gray hover:text-white hover:translate-x-1 transition-all inline-block font-body text-sm"
                    href="#"
                    onClick={(e) => handleNavClick("services", e)}
                  >
                    Engineering
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-body text-sm font-semibold text-white mb-6 uppercase tracking-wider">
                Company
              </h5>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-slate-gray hover:text-white hover:translate-x-1 transition-all inline-block font-body text-sm"
                    href="#"
                    onClick={(e) => handleNavClick("about", e)}
                  >
                    Story
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-gray hover:text-white hover:translate-x-1 transition-all inline-block font-body text-sm"
                    href="#"
                    onClick={(e) => handleNavClick("work", e)}
                  >
                    Work Showcase
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-gray hover:text-white hover:translate-x-1 transition-all inline-block font-body text-sm"
                    href="#"
                    onClick={(e) => handleNavClick("contact", e)}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <h5 className="font-body text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Subscribe to insights
            </h5>
            <p className="text-slate-gray font-body text-sm mb-6 leading-relaxed">
              The latest in design, engineering, and business innovation.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="form-input-minimal flex-1 bg-white/5 border-white/20 text-white placeholder-slate-gray focus:border-azure-blue rounded py-3 px-4 text-sm outline-none transition-all duration-200"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-charcoal font-body text-sm font-semibold rounded hover:bg-white/90 active:scale-95 transition-all duration-200"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Rights footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-gray font-body text-xs">
            © 2026 GCV Digital Engineering. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              className="text-slate-gray hover:text-white font-body text-xs"
              href="#"
              onClick={(e) => handleNavClick("privacy", e)}
            >
              Privacy Policy
            </a>
            <a
              className="text-slate-gray hover:text-white font-body text-xs"
              href="#"
              onClick={(e) => handleNavClick("terms", e)}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
