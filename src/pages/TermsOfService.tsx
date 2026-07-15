interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="bg-[#f7f9fb] min-h-screen text-charcoal py-16 md:py-24 animate-fade-in font-body">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop space-y-10">
        {/* Header Controls */}
        <div className="flex justify-between items-center border-b border-surface-variant pb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-azure-blue hover:text-[#0055c8] select-none"
          >
            <span className="material-symbols-outlined text-[18px]">
              arrow_back
            </span>
            Back to Home
          </button>
          <span className="text-slate-gray text-xs font-semibold">
            Last Updated: July 15, 2026
          </span>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter text-charcoal">
            Terms of Service
          </h1>
          <p className="text-slate-gray text-base leading-relaxed">
            Welcome to the GCV Digital Engineering platform. By accessing or
            using our website, you agree to comply with and be bound by the
            following terms of use. Please read them carefully.
          </p>

          <div className="space-y-4 pt-6">
            <h2 className="font-headline text-xl font-bold text-charcoal">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-gray text-sm leading-relaxed">
              By interacting with our services, inquiry forms, and platform
              showcases, you acknowledge that you have read, understood, and
              agree to be bound by these terms, as well as our Privacy Policy.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-headline text-xl font-bold text-charcoal">
              2. Intellectual Property Rights
            </h2>
            <p className="text-slate-gray text-sm leading-relaxed">
              All proprietary code architectures, templates, copy writing, bento
              design layouts, and custom graphics displayed on GCV Digital's
              portfolio are owned by GCV Digital Engineering and are protected
              by international trademark and copyright laws.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-headline text-xl font-bold text-charcoal">
              3. User Commitments
            </h2>
            <p className="text-slate-gray text-sm leading-relaxed">
              You agree not to submit fraudulent contact details, compromise the
              site server through malicious payloads, or scrape our case studies
              list without explicit licensing agreements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-headline text-xl font-bold text-charcoal">
              4. Limitation of Liability
            </h2>
            <p className="text-slate-gray text-sm leading-relaxed">
              GCV Digital Engineering is not liable for direct, indirect,
              incidental, or consequential damages resulting from your use or
              inability to use this platform, including delays in email
              transmissions or server downtimes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
