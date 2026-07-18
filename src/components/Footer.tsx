import { FormEvent, useState } from "react";
import axios from "axios";

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
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const apiBase =
        (import.meta as any).env.VITE_API_URL || "http://localhost:5000/api";
      await axios.post(`${apiBase}/subscribe`, { email });
      alert("Thank you for subscribing to GCV insights!");
      setEmail("");
    } catch (error) {
      alert("Failed to subscribe. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
              href="/"
              onClick={(e) => handleNavClick("home", e)}
              className="mb-6 block hover:opacity-90 transition-opacity select-none"
            >
              <img
                src="/logos/GCV Logo.svg"
                alt="GCV Digital Engineering Logo"
                className="h-8 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-slate-gray font-body text-sm leading-relaxed mb-8 pr-4">
              Building the digital foundations for tomorrow's market leaders
              through design-led engineering.
            </p>

            {/* 🌐 Restored Original Simple Icon Style for Social Links */}
            <div className="flex gap-4 items-center">
              {/* LinkedIn */}
              <a
                className="text-slate-gray hover:text-white transition-colors"
                // href="https://www.linkedin.com/in/divakarans/"
                href="#"
                // target="_blank"
                // rel="noopener noreferrer"
                title="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                className="text-slate-gray hover:text-white transition-colors"
                href="#"
                title="X (Twitter)"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                className="text-slate-gray hover:text-white transition-colors"
                href="#"
                // target="_blank"
                // rel="noopener noreferrer"
                title="GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                className="text-slate-gray hover:text-white transition-colors"
                href="#"
                title="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                className="text-slate-gray hover:text-white transition-colors"
                href="#"
                title="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
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
                    href="/services"
                    onClick={(e) => handleNavClick("services", e)}
                  >
                    Strategy
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-gray hover:text-white hover:translate-x-1 transition-all inline-block font-body text-sm"
                    href="/services"
                    onClick={(e) => handleNavClick("services", e)}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-gray hover:text-white hover:translate-x-1 transition-all inline-block font-body text-sm"
                    href="/services"
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
                    href="/about"
                    onClick={(e) => handleNavClick("about", e)}
                  >
                    Story
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-gray hover:text-white hover:translate-x-1 transition-all inline-block font-body text-sm"
                    href="/work"
                    onClick={(e) => handleNavClick("work", e)}
                  >
                    Work Showcase
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-gray hover:text-white hover:translate-x-1 transition-all inline-block font-body text-sm"
                    href="/contact"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="form-input-minimal flex-1 bg-white/5 border-white/20 text-white placeholder-slate-gray focus:border-azure-blue rounded py-3 px-4 text-sm outline-none transition-all duration-200 disabled:opacity-50"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-white text-charcoal font-body text-sm font-semibold rounded hover:bg-white/90 active:scale-95 transition-all duration-200 disabled:opacity-75 min-w-[70px]"
              >
                {isSubmitting ? "..." : "Join"}
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
              href="/privacy"
              onClick={(e) => handleNavClick("privacy", e)}
            >
              Privacy Policy
            </a>
            <a
              className="text-slate-gray hover:text-white font-body text-xs"
              href="/terms"
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
