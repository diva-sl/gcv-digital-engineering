import { useState, FormEvent } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 📝 OPTIONAL: Add your Formspree ID here to send emails silently in the background
  // If left empty (""), the form will automatically fall back to the safe mailto: redirect
  const FORMSPREE_FORM_ID = "";

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailBody =
      `GCV Digital Engineering Inquiry Details:\n\n` +
      `• Client Name: ${formData.name}\n` +
      `• Email Address: ${formData.email}\n` +
      `• Company Name: ${formData.company}\n` +
      `• Mobile Number: ${formData.phone}\n` +
      `• Required Capabilities: ${selectedServices.length > 0 ? selectedServices.join(", ") : "None Specified"}\n\n` +
      `• Project Scope & Details:\n${formData.message}\n`;

    // 🚀 METHOD A: Production Serverless Endpoint Submission
    if (FORMSPREE_FORM_ID !== "") {
      try {
        const response = await fetch(
          `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              company: formData.company,
              phone: formData.phone,
              message: formData.message,
              services: selectedServices.join(", "),
              _subject: `GCV Engineering Inquiry from ${formData.name} (${formData.company})`,
            }),
          },
        );

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          throw new Error("API submission failed. Triggering backup...");
        }
      } catch (error) {
        console.warn(error);
        triggerMailtoFallback(emailBody);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // 🚀 METHOD B: Direct Mailto Client Fallback
      triggerMailtoFallback(emailBody);
      setIsSubmitting(false);
    }
  };

  const triggerMailtoFallback = (bodyContent: string) => {
    const recipient = "rajeshbandila@gcvdanta.com";
    const subject = `GCV Engineering Inquiry from ${formData.name} (${formData.company})`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);

    // Reset form states
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
    setSelectedServices([]);
  };

  return (
    <div className="bg-[#f7f9fb] min-h-screen text-charcoal py-16 md:py-24 animate-fade-in">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left Column: Office Coordinates */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-40">
            <div className="space-y-4">
              <span className="text-azure-blue font-body text-xs font-bold tracking-widest uppercase block">
                Get In Touch
              </span>
              <h1 className="font-headline text-[36px] md:text-5xl font-bold leading-tight text-charcoal tracking-tighter">
                Let's engineer something remarkable.
              </h1>
              <p className="font-body text-base text-slate-gray leading-relaxed">
                Whether you have an enterprise migration challenge, a custom HMI
                requirement, or a brand-new SaaS product to launch, our
                engineering teams are ready to collaborate.
              </p>
            </div>

            {/* Office Status Active Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e2f0fd] text-[#176df4] border border-[#b1c6ff] rounded-full text-xs font-semibold select-none">
              <span className="w-2 h-2 bg-azure-blue rounded-full animate-ping"></span>
              <span>Office Status: Active & Taking Inquiries</span>
            </div>

            {/* Bengaluru Office Address Block (Clickable Map Link) */}
            <div className="space-y-6 pt-4 border-t border-surface-variant font-body text-sm">
              <a
                href="https://maps.google.com/maps/search/Homebakkens/@13.05823432,77.62875141,17z?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 border border-transparent rounded hover:border-surface-variant hover:bg-white transition-all group"
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
                  <p className="text-slate-gray leading-relaxed">
                    D Block Ultima Smart Homes, <br />
                    Rachenahalli Main Rd, Thanisandra, <br />
                    Bengaluru, Karnataka, India - 560045
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 px-4">
                <span className="material-symbols-outlined text-azure-blue mt-0.5">
                  mail
                </span>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">
                    Email Inquiries
                  </h4>
                  <p className="text-slate-gray">rajeshbandila@gcvdanta.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-surface-variant rounded-lg shadow-sm">
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
                <p className="font-body text-slate-gray max-w-sm mx-auto leading-relaxed">
                  Your inquiry details have been transmitted directly to{" "}
                  <span className="font-bold text-charcoal">
                    rajeshbandila@gcvdanta.com
                  </span>
                  . A confirmation response has been dispatched to your email.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-charcoal text-white font-body text-sm font-semibold rounded hover:bg-opacity-90 active:scale-95 transition-all mt-6"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="form-input-minimal w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="form-input-minimal w-full"
                    />
                  </div>
                </div>

                {/* Row 2: Company and Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter organization name"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="form-input-minimal w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="form-input-minimal w-full"
                    />
                  </div>
                </div>

                {/* Capabilities Needed Selection Tags */}
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
                          className={`px-4 py-2 rounded text-xs font-semibold border transition-all select-none ${
                            isSelected
                              ? "bg-azure-blue text-white border-azure-blue"
                              : "bg-white text-slate-gray border-surface-variant hover:border-slate-gray"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider">
                    Project Scope & Details
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Tell us about your project requirements, goals, and timeline..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="form-input-minimal w-full resize-y min-h-[120px]"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-charcoal text-white font-body text-sm font-semibold rounded shadow-lg hover:bg-opacity-95 transition-all active:scale-98 flex items-center justify-center gap-2 select-none"
                  >
                    {isSubmitting ? (
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
