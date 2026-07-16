import { useState, FormEvent } from "react";
import { useSubmitContact } from "../hooks/useSubmitContact";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const servicesOptions = [
    "User Research",
    "UI/UX Design",
    "Software Engineering",
    "Cloud Engineering",
    "SaaS Products",
    "AI Applications",
  ];

  const handleServiceToggle = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // 🚀 Initialize Axios + TanStack Query Mutation Hook
  const contactMutation = useSubmitContact(
    // On Success Callback
    () => {
      setIsSubmitted(true);
      setSubmissionError(null);
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      setSelectedServices([]);
    },
    // On Error Callback
    (errorMessage: string) => {
      setSubmissionError(errorMessage);
    },
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    // 🚀 Trigger the secure backend POST query request
    contactMutation.mutate({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      services: selectedServices,
      message: formData.message,
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] min-h-screen text-charcoal py-16 md:py-24 animate-fade-in font-body">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Coordinates details */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-36">
            <div className="space-y-4">
              <span className="text-azure-blue font-body text-xs font-bold tracking-widest uppercase block">
                Get In Touch
              </span>
              <h1 className="font-headline text-[36px] md:text-5xl font-bold leading-tight text-charcoal tracking-tighter">
                Let's engineer something remarkable.
              </h1>
              <p className="font-body text-sm md:text-base text-slate-gray leading-relaxed">
                Whether you have an enterprise migration challenge, a custom HMI
                requirement, or a brand-new SaaS product to launch, our
                engineering teams are ready to collaborate.
              </p>
            </div>

            {/* Office Status Active Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e2f0fd] text-[#176df4] border border-[#b1c6ff] rounded-full text-xs font-semibold select-none">
              <span className="w-2 h-2 bg-azure-blue rounded-full animate-pulse"></span>
              <span>Office Status: Active & Taking Inquiries</span>
            </div>

            {/* Address & Email Link Cards */}
            <div className="space-y-4 pt-4 border-t border-surface-variant font-body text-sm">
              {/* Bengaluru Address (First line removed) */}
              <a
                href="https://maps.google.com/maps/search/Homebakkens/@13.05823432,77.62875141,17z?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-white border border-surface-variant rounded-xl shadow-sm hover:shadow-md hover:border-azure-blue transition-all group block"
              >
                <span className="material-symbols-outlined text-azure-blue mt-0.5 group-hover:scale-105 transition-transform">
                  location_on
                </span>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1 flex items-center gap-1 group-hover:text-azure-blue transition-colors">
                    Bengaluru Office Location
                    <span className="material-symbols-outlined text-xs">
                      open_in_new
                    </span>
                  </h4>
                  <p className="text-slate-gray leading-relaxed text-xs">
                    Rachenahalli Main Rd, Thanisandra, <br />
                    Bengaluru, Karnataka, India - 560045
                  </p>
                </div>
              </a>

              {/* Clickable Email Card */}
              <a
                href="mailto:connect@gcvdanta.com"
                className="flex items-start gap-4 p-5 bg-white border border-surface-variant rounded-xl shadow-sm hover:shadow-md hover:border-azure-blue transition-all group block"
              >
                <span className="material-symbols-outlined text-azure-blue mt-0.5 group-hover:scale-105 transition-transform">
                  mail
                </span>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1 group-hover:text-azure-blue transition-colors flex items-center gap-1">
                    Email Inquiries
                    <span className="material-symbols-outlined text-xs">
                      open_in_new
                    </span>
                  </h4>
                  <p className="text-slate-gray text-xs">
                    connect@gcvdanta.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Form Card */}
          <div className="lg:col-span-7 bg-white p-6 md:p-10 border border-surface-variant rounded-2xl shadow-md relative overflow-hidden">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6 animate-fade-in">
                <span
                  className="material-symbols-outlined text-green-500 text-6xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <h3 className="font-headline text-2xl font-bold text-charcoal">
                  Consultation Request Sent
                </h3>
                <p className="font-body text-slate-gray max-w-sm mx-auto leading-relaxed text-sm">
                  Your inquiry details have been transmitted directly to{" "}
                  <span className="font-bold text-charcoal">
                    connect@gcvdanta.com
                  </span>
                  . A confirmation response has been dispatched to your email.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-charcoal text-white font-body text-sm font-semibold rounded-lg hover:bg-opacity-90 active:scale-95 transition-all mt-6 cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Submission Error Banner */}
                {submissionError && (
                  <div className="bg-red-50 text-red-600 text-xs font-semibold px-4 py-3 rounded border border-red-200">
                    {submissionError}
                  </div>
                )}

                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider flex items-center">
                      Full Name
                      <span className="text-red-500 font-bold ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#f8fafc] border border-surface-variant rounded-lg px-4 py-3 text-sm text-charcoal placeholder-slate-400 focus:bg-white focus:border-azure-blue focus:ring-1 focus:ring-azure-blue/10 outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider flex items-center">
                      Email Address
                      <span className="text-red-500 font-bold ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#f8fafc] border border-surface-variant rounded-lg px-4 py-3 text-sm text-charcoal placeholder-slate-400 focus:bg-white focus:border-azure-blue focus:ring-1 focus:ring-azure-blue/10 outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Row 2: Company and Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider flex items-center">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Enter organization name"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full bg-[#f8fafc] border border-surface-variant rounded-lg px-4 py-3 text-sm text-charcoal placeholder-slate-400 focus:bg-white focus:border-azure-blue focus:ring-1 focus:ring-azure-blue/10 outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider flex items-center">
                      Mobile Number
                      <span className="text-red-500 font-bold ml-1">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-[#f8fafc] border border-surface-variant rounded-lg px-4 py-3 text-sm text-charcoal placeholder-slate-400 focus:bg-white focus:border-azure-blue focus:ring-1 focus:ring-azure-blue/10 outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Capabilities Tags */}
                <div className="flex flex-col gap-2">
                  <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider">
                    Capabilities Needed
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {servicesOptions.map((service, idx) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-2.5 rounded-full text-xs font-semibold border transition-all select-none cursor-pointer ${
                            isSelected
                              ? "bg-charcoal text-white border-charcoal"
                              : "bg-[#f8fafc] text-slate-gray border-surface-variant hover:border-slate-gray hover:bg-white"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message details */}
                <div className="flex flex-col gap-2">
                  <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider flex items-center">
                    Project Scope & Details
                    <span className="text-red-500 font-bold ml-1">*</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Tell us about your project requirements, goals, and timeline..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#f8fafc] border border-surface-variant rounded-lg px-4 py-3 text-sm text-charcoal placeholder-slate-400 focus:bg-white focus:border-azure-blue focus:ring-1 focus:ring-azure-blue/10 outline-none transition-all duration-200 resize-y min-h-[120px]"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full py-4 bg-charcoal text-white font-body text-sm font-semibold rounded-lg shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 select-none cursor-pointer"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Transmitting inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[18px]">
                          send
                        </span>
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
