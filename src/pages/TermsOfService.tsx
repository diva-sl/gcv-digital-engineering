interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
  const sections = [
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "intellectual", label: "2. Intellectual Property" },
    { id: "usage", label: "3. User Conduct Rules" },
    { id: "warranties", label: "4. Disclaimers & Warranties" },
    { id: "liability", label: "5. Limitation of Liability" },
    { id: "governing", label: "6. Governing Jurisdiction" },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#f7f9fb] min-h-screen text-charcoal py-16 md:py-24 animate-fade-in font-body">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-10">
        {/* Header Controls */}
        <div className="flex justify-between items-center border-b border-surface-variant pb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-azure-blue hover:text-[#0055c8] select-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              arrow_back
            </span>
            Back to Home
          </button>
          <span className="text-slate-gray text-xs font-semibold">
            Last Updated: July 16, 2026
          </span>
        </div>

        {/* Page Headline */}
        <div className="space-y-4">
          <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter text-charcoal">
            Terms of Service
          </h1>
          <p className="text-slate-gray text-base max-w-3xl leading-relaxed">
            Welcome to the GCV Digital Engineering platform. By accessing or
            using our website, you agree to comply with and be bound by the
            following terms of use. Please read them carefully.
          </p>
        </div>

        {/* Grid Container (2 Columns: Sidebar + Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
          {/* Sticky Table of Contents Sidebar */}
          <aside className="lg:col-span-3 lg:sticky lg:top-36 hidden lg:block bg-white p-6 border border-surface-variant rounded-lg space-y-4">
            <h4 className="font-headline text-xs font-bold text-charcoal uppercase tracking-wider">
              On this Page
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-gray">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => handleScrollTo(sec.id)}
                    className="hover:text-azure-blue transition-colors text-left focus:outline-none cursor-pointer"
                  >
                    {sec.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Legal Content Card */}
          <article className="lg:col-span-9 bg-white border border-surface-variant rounded-xl p-8 md:p-12 shadow-sm space-y-8">
            {/* Section 1 */}
            <div id="acceptance" className="space-y-4 scroll-mt-28">
              <h2 className="font-headline text-lg md:text-xl font-bold text-charcoal border-b border-surface-variant pb-2">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-gray text-xs md:text-sm leading-relaxed">
                By entering, browsing, or using the GCV Digital Engineering
                platform, or by submitting consultation requests, you
                acknowledge that you have read, understood, and agree to be
                legally bound by these terms. If you do not accept these
                conditions, you must discontinue using our services.
              </p>
            </div>

            {/* Section 2 */}
            <div id="intellectual" className="space-y-4 scroll-mt-28">
              <h2 className="font-headline text-lg md:text-xl font-bold text-charcoal border-b border-surface-variant pb-2">
                2. Intellectual Property Rights
              </h2>
              <p className="text-slate-gray text-xs md:text-sm leading-relaxed">
                All proprietary assets displayed on this platform, including
                source code files, graphic icons, bento layouts, images, and
                copy-writing descriptions, are the intellectual property of GCV
                Digital Engineering.
              </p>
              <p className="text-slate-gray text-xs md:text-sm leading-relaxed">
                You are granted a limited license to browse the site for
                personal or internal procurement evaluations. Any reproduction,
                distribution, scraping, or modifications of our creative layouts
                without explicit written authorization is strictly prohibited.
              </p>
            </div>

            {/* Section 3 */}
            <div id="usage" className="space-y-4 scroll-mt-28">
              <h2 className="font-headline text-lg md:text-xl font-bold text-charcoal border-b border-surface-variant pb-2">
                3. User Conduct Rules
              </h2>
              <p className="text-slate-gray text-xs md:text-sm leading-relaxed">
                In accessing our website, you agree to comply with all regional
                guidelines and commit to the following:
              </p>
              <ul className="list-disc pl-6 text-slate-gray text-xs md:text-sm space-y-2">
                <li>
                  You will not submit false or deceptive identity information in
                  our consultation form.
                </li>
                <li>
                  You will not transmit any malicious files, viruses, or code
                  designed to interfere with our hosting servers.
                </li>
                <li>
                  You will not use automated scripts, bots, or web scrapers to
                  download our project portfolios and client datasets.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div id="warranties" className="space-y-4 scroll-mt-28">
              <h2 className="font-headline text-lg md:text-xl font-bold text-charcoal border-b border-surface-variant pb-2">
                4. Disclaimers & Warranties
              </h2>
              <p className="text-slate-gray text-xs md:text-sm leading-relaxed">
                This platform is provided on an "as is" and "as available"
                basis. GCV Digital Engineering makes no representations or
                warranties, express or implied, regarding the continuous
                availability of our site, error-free operations, or instant form
                processing. We disclaim all warranties to the fullest extent
                permitted by law.
              </p>
            </div>

            {/* Section 5 */}
            <div id="liability" className="space-y-4 scroll-mt-28">
              <h2 className="font-headline text-lg md:text-xl font-bold text-charcoal border-b border-surface-variant pb-2">
                5. Limitation of Liability
              </h2>
              <p className="text-slate-gray text-xs md:text-sm leading-relaxed">
                In no event shall GCV Digital Engineering or its team be liable
                for any direct, indirect, incidental, special, or consequential
                damages resulting from your use or inability to use this site,
                including delays in emails, database network disconnects, or
                information loss.
              </p>
            </div>

            {/* Section 6 */}
            <div id="governing" className="space-y-4 scroll-mt-28">
              <h2 className="font-headline text-lg md:text-xl font-bold text-charcoal border-b border-surface-variant pb-2">
                6. Governing Jurisdiction
              </h2>
              <p className="text-slate-gray text-xs md:text-sm leading-relaxed">
                Any legal actions, disputes, or claims arising from these Terms
                of Service or your interaction with the GCV Digital platform
                shall be governed by and construed in accordance with the laws
                of the State of Karnataka, India. You agree that any legal
                proceedings shall be subject to the exclusive jurisdiction of
                the competent courts in Bengaluru, India.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
