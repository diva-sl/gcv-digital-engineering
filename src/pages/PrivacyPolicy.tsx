interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  const sections = [
    { id: "scope", label: "1. Scope & Consent" },
    { id: "collection", label: "2. Information We Collect" },
    { id: "processing", label: "3. Data Processing & API Use" },
    { id: "security", label: "4. Security Infrastructure" },
    { id: "disclosure", label: "5. Third-Party Disclosures" },
    { id: "access", label: "6. Data Rights & Contact" },
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
            Effective Date: July 16, 2026
          </span>
        </div>

        {/* Page Headline */}
        <div className="space-y-4">
          <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter text-charcoal">
            Privacy Policy
          </h1>
          <p className="text-slate-gray text-base max-w-3xl leading-relaxed">
            At GCV Digital Engineering, we are committed to protecting your
            privacy and ensuring the security of your corporate and personal
            data. This privacy policy describes how we collect, use, and
            safeguard information when you interact with our website or
            services.
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
            <div id="scope" className="space-y-4 scroll-mt-28">
              <h2 className="font-headline text-lg md:text-xl font-bold text-charcoal border-b border-surface-variant pb-2">
                1. Scope & Consent
              </h2>
              <p className="text-slate-gray text-xs md:text-sm leading-relaxed">
                This Privacy Policy applies to all visitors, users, and clients
                interacting with our corporate platform, contact forms, and case
                study modules. By submitting information through our portal, you
                consent to the data collection, transfer, and processing
                parameters outlined in this agreement.
              </p>
            </div>

            {/* Section 2 */}
            <div id="collection" className="space-y-4 scroll-mt-28">
              <h2 className="font-headline text-lg md:text-xl font-bold text-charcoal border-b border-surface-variant pb-2">
                2. Information We Collect
              </h2>
              <p className="text-slate-gray text-xs md:text-sm leading-relaxed">
                We collect information necessary to establish business relations
                and evaluate technical requirements. The data we collect
                includes:
              </p>
              <ul className="list-disc pl-6 text-slate-gray text-xs md:text-sm space-y-2">
                <li>
                  <strong className="text-charcoal">Identity Data:</strong> Full
                  name, company affiliation, and job title.
                </li>
                <li>
                  <strong className="text-charcoal">Contact Details:</strong>{" "}
                  Corporate email address and phone number.
                </li>
                <li>
                  <strong className="text-charcoal">Inquiry Specs:</strong>{" "}
                  Required technical capabilities and project scope
                  descriptions.
                </li>
                <li>
                  <strong className="text-charcoal">Technical Logs:</strong> IP
                  address, device viewport sizing, and browser analytics data
                  collected through cookies.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="processing" className="space-y-4 scroll-mt-28">
              <h2 className="font-headline text-lg md:text-xl font-bold text-charcoal border-b border-surface-variant pb-2">
                3. Data Processing & API Use
              </h2>
              <p className="text-slate-gray text-xs md:text-sm leading-relaxed">
                Inquiries submitted through our forms are processed securely in
                the background using verified API handlers (such as Web3Forms)
                to deliver details directly to our inbox. We use this data to:
              </p>
              <ul className="list-disc pl-6 text-slate-gray text-xs md:text-sm space-y-2">
                <li>Assess project timelines and technical viability.</li>
                <li>
                  Deliver auto-reply email confirmations regarding your
                  requests.
                </li>
                <li>
                  Coordinate meetings between your organization and our digital
                  product architects.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div id="security" className="space-y-4 scroll-mt-28">
              <h2 className="font-headline text-lg md:text-xl font-bold text-charcoal border-b border-surface-variant pb-2">
                4. Security Infrastructure
              </h2>
              <p className="text-slate-gray text-xs md:text-sm leading-relaxed">
                As a technical engineering agency, security is built into our
                core operations:
              </p>
              <ul className="list-disc pl-6 text-slate-gray text-xs md:text-sm space-y-2">
                <li>
                  We implement Secure Socket Layer (SSL) encryption to guard all
                  data in transit.
                </li>
                <li>
                  Access to incoming customer database records is restricted to
                  authenticated managers.
                </li>
                <li>
                  Our systems meet rigorous development compliance baselines
                  including HIPAA and PCI-DSS frameworks where relevant.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div id="disclosure" className="space-y-4 scroll-mt-28">
              <h2 className="font-headline text-lg md:text-xl font-bold text-charcoal border-b border-surface-variant pb-2">
                5. Third-Party Disclosures
              </h2>
              <p className="text-slate-gray text-xs md:text-sm leading-relaxed">
                GCV Digital Engineering does not sell, lease, or rent customer
                lead metrics to marketing firms. We share data only with
                authorized processors (hosting services, payment gateways, or
                system integrations) necessary to fulfill our service delivery
                contracts, or when required by legal authorities under local
                laws.
              </p>
            </div>

            {/* Section 6 */}
            <div id="access" className="space-y-4 scroll-mt-28">
              <h2 className="font-headline text-lg md:text-xl font-bold text-charcoal border-b border-surface-variant pb-2">
                6. Data Rights & Contact
              </h2>
              <p className="text-slate-gray text-xs md:text-sm leading-relaxed">
                Depending on your jurisdiction (such as GDPR or local privacy
                acts), you have rights to access, rectify, or request the
                deletion of the information we hold about you. For any data
                inquiries or to request profile updates, please email us
                directly at{" "}
                <span className="font-semibold text-azure-blue">
                  connect@gcvdanta.com
                </span>
                .
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
