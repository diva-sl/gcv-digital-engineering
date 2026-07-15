interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
            Effective Date: July 15, 2026
          </span>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter text-charcoal">
            Privacy Policy
          </h1>
          <p className="text-slate-gray text-base leading-relaxed">
            At GCV Digital Engineering, we are committed to protecting your
            privacy and ensuring the security of your corporate and personal
            data. This privacy policy describes how we collect, use, and
            safeguard information when you interact with our website or
            services.
          </p>

          <div className="space-y-4 pt-6">
            <h2 className="font-headline text-xl font-bold text-charcoal">
              1. Information We Collect
            </h2>
            <p className="text-slate-gray text-sm leading-relaxed">
              We collect information you provide directly to us through our
              contact inquiries, such as your name, email address, mobile
              number, company name, and details of your project requirements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-headline text-xl font-bold text-charcoal">
              2. How We Use Your Information
            </h2>
            <p className="text-slate-gray text-sm leading-relaxed">
              We use the collected information solely to evaluate your business
              requirements, communicate regarding consultations, and route your
              details to solutions architects.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-headline text-xl font-bold text-charcoal">
              3. Data Compliance & Security
            </h2>
            <p className="text-slate-gray text-sm leading-relaxed">
              As an enterprise engineering partner, we build systems meeting
              HIPAA and PCI-DSS compliance frameworks. We implement appropriate
              technical security parameters (SSL encryption, firewall shields)
              to protect all local and transit data from unauthorized access.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-headline text-xl font-bold text-charcoal">
              4. Third-Party Sharing
            </h2>
            <p className="text-slate-gray text-sm leading-relaxed">
              GCV does not sell, rent, or lease your corporate or contact
              information to third parties. Data is shared only when required to
              process transaction gateways or comply with legal authorities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
