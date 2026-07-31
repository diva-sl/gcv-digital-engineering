import { useState, FormEvent } from "react";
import { useSubmitContact } from "../hooks/useSubmitContact";

export default function LaunchStore() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const professionOptions = [
    "Business Owner",
    "Retailer / Shop Owner",
    "Manufacturer",
    "Aspiring Entrepreneur",
    "Freelancer / Agency Owner",
    "Student",
    "Other",
  ];

  // Axios + TanStack Mutation Hook from ContactUs
  const contactMutation = useSubmitContact(
    () => {
      setIsSubmitted(true);
      setSubmissionError(null);
      setFormData({ name: "", email: "", phone: "", profession: "" });
    },
    (errorMessage: string) => {
      setSubmissionError(errorMessage);
    }
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.profession) {
      setSubmissionError("Please select your profession.");
      return;
    }
    setSubmissionError(null);

    contactMutation.mutate({
      name: formData.name,
      email: formData.email,
      company: `Profession: ${formData.profession}`,
      phone: formData.phone,
      services: ["14-Day Free Trial - E-Commerce Store Launch"],
      message: `[LANDING PAGE SIGNUP] Lead registered for 14-Day Free Trial. Profession: ${formData.profession}`,
    });
  };

  const stepsList = [
    {
      num: "01",
      badge: "2 MIN",
      title: "Complete Your Profile",
      desc: "Add your essential contact and business details — the foundation that powers your store, domain and payouts.",
      bullets: ["Quick setup", "Essential info only", "Domain-ready"],
      icon: "account_circle",
    },
    {
      num: "02",
      badge: "YOUR BRAND",
      title: "Book Your Domain",
      desc: "Claim your brand's own address on the internet. Search and register a custom domain in seconds.",
      bullets: [".com · .in · .shop · .store · .online"],
      icon: "language",
      meta: "Dynadot · World's No.1 Registrar",
    },
    {
      num: "03",
      badge: "SECURE",
      title: "KYC Verification",
      desc: "A quick PAN & Aadhaar verification activates your payments and keeps your business 100% compliant from day one.",
      bullets: ["Bank-grade secure", "Fully compliant", "Enables payouts"],
      icon: "verified_user",
    },
    {
      num: "04",
      badge: "INSTANT",
      title: "Upload / Generate Store Logo",
      desc: "Already have a logo? Upload it. Don't have one yet? Generate a stunning logo instantly with our built-in AI tool.",
      bullets: ["Upload your logo", "Generate with AI"],
      icon: "auto_awesome",
      meta: "Powered by OpenAI (Fully Editable)",
    },
    {
      num: "05",
      badge: "CURATED",
      title: "Choose Template & Theme",
      desc: "Pick from our curated collection of premium, conversion-ready templates & themes — a wide variety crafted to fit any brand.",
      bullets: ["100+ premium designs", "Mobile-first layouts", "Wide variety"],
      icon: "dashboard_customize",
    },
    {
      num: "06",
      badge: "FULL CONTROL",
      title: "Customise Your Store",
      desc: "Everything that makes your store special is in your hands. Define your values, offers and configurations so it truly represents your brand ethos.",
      bullets: ["Your brand ethos", "Offers & value banners", "Total configuration control"],
      icon: "tune",
    },
    {
      num: "07",
      badge: "AI-POWERED",
      title: "Generate Policies",
      desc: "Our AI custom-generates every policy required to run a legitimate business in India — and you can edit any line, anytime.",
      bullets: ["Privacy & Refund policies", "Terms & Conditions", "Shipping & Payment agreements"],
      icon: "policy",
      meta: "Powered by OpenAI (Editable)",
    },
    {
      num: "08",
      badge: "AI-POWERED",
      title: "Generate About Us",
      desc: "Tell your story in seconds. Our AI writes your entire About Us page — and you keep complete control to refine every word.",
      bullets: ["Company Overview", "Vision & Mission logs", "Core values & Achievements"],
      icon: "description",
      meta: "Powered by OpenAI (Editable)",
    },
    {
      num: "09",
      badge: "YOUR CATALOGUE",
      title: "Add Your First Products",
      desc: "Your catalogue, your way. Pick a niche, an entire category, or list all 10,000+ products. Set your own MRP, add your brand tag — and we handle fulfilment the moment an order arrives.",
      bullets: ["10,000+ ready products", "Set your own pricing", "Custom branding & tags"],
      icon: "inventory_2",
      meta: "Fulfilment by GCV Danta logistics ecosystem",
    },
    {
      num: "10",
      badge: "MINUTES",
      title: "Set Up Payment Gateway",
      desc: "Integrate India's No.1 payment gateway in minutes. Money your customers pay lands directly in your bank account — accept every method.",
      bullets: ["UPI · Cards · Wallets", "Net Banking & EMI options"],
      icon: "account_balance_wallet",
      meta: "Razorpay · India's No.1 Gateway",
    },
    {
      num: "11",
      badge: "GO LIVE",
      title: "Launch Your Store",
      desc: "Your complete e-commerce website — 10,000+ products, payment gateway & full setup — is ready in under 30 minutes. Go live and start selling.",
      bullets: ["Live domain routing", "Full platform support active"],
      icon: "rocket_launch",
    },
  ];

  return (
    <div className="bg-[#f7f9fb] font-body text-charcoal antialiased pb-32">
      {/* BEGIN: Hero Section */}
      <header className="relative bg-gradient-to-tr from-[#0b1c30] via-[#102d5a] to-[#2272F9] text-white pt-20 pb-32 overflow-hidden select-none">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-8">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-200">Join 85,786+ Successful Sellers</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black font-headline italic uppercase leading-[1.1] mb-6">
              Launch Your<br />
              <span className="text-yellow-400">Online Store</span><br />
              In 30 Minutes
            </h1>
            <p className="text-base text-slate-200/90 mb-10 max-w-xl leading-relaxed">
              Everything included. No inventory needed. Start selling globally from India today with GCV's high-speed headless e-commerce deployment engines.
            </p>
            <div className="flex flex-wrap gap-6 md:gap-8">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-400">check_circle</span>
                <span className="font-bold text-xs uppercase tracking-wider">Zero Inventory</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-400">check_circle</span>
                <span className="font-bold text-xs uppercase tracking-wider">Zero Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-400">check_circle</span>
                <span className="font-bold text-xs uppercase tracking-wider">Zero Commission</span>
              </div>
            </div>
          </div>
          <div className="relative z-10 hidden md:block">
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl">
              <img 
                alt="Dashboard Preview" 
                className="rounded-xl w-full object-cover object-top h-[320px]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWer3H_vdKRpgBof90YeyXn2-lBEZHnaygGzIuNlOItRxgpKKOQlseBOHOzwDY55LLKy7orFXnXGytZblvAoAW7PRbcQ835nXi0O3MD6j733cen8WofTYlbvMWK5VUrSlLAjF5fcwcoa2ZoyLRGo76vy7yXpKwQw0C5ZNiGzPC48BPta8G6ylxScHZILP-_XdDdqlk-N3TxKSlQe29pyl5gPHtchCx59qysHLpdWwujbFgnpytPiSy" 
              />
            </div>
          </div>
        </div>
      </header>
      {/* END: Hero Section */}

      {/* BEGIN: Lead Generation Form Section (14-Day Free Trial Simplified Card) */}
      <section id="lead-form" className="relative z-20 -mt-16 mb-24 px-margin-mobile md:px-margin-desktop scroll-mt-24">
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-surface-variant/40">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-6 animate-fade-in">
              <span className="material-symbols-outlined text-green-500 text-6xl">check_circle</span>
              <h3 className="font-headline text-2xl font-bold text-charcoal">14-Day Trial Activated</h3>
              <p className="font-body text-slate-gray max-w-sm mx-auto leading-relaxed text-sm">
                Thank you! Your setup reservation is complete. We will reach out to you at your phone number to set up your domain name and catalog access credentials.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 bg-charcoal text-white font-body text-xs font-semibold rounded-lg hover:bg-[#1f2937] active:scale-95 transition-all mt-6 cursor-pointer select-none"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-headline font-bold text-charcoal mb-1">Start Your 14-Day Free Trial</h3>
                <p className="text-xs text-slate-gray">Enter your details to initialize your e-commerce dashboard instantly.</p>
              </div>

              {submissionError && (
                <div className="bg-red-50 text-[#F44051] text-xs font-semibold px-4 py-3 rounded border border-red-200">
                  {submissionError}
                </div>
              )}

              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider">
                  Full Name <span className="text-[#F44051]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#f8fafc] border border-surface-variant rounded-lg px-4 py-3 text-sm text-charcoal focus:bg-white focus:border-azure-blue focus:ring-1 focus:ring-azure-blue/10 outline-none transition-all"
                />
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider">
                  Mobile Number <span className="text-[#F44051]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter 10-Digit Mobile Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                  className="w-full bg-[#f8fafc] border border-surface-variant rounded-lg px-4 py-3 text-sm text-charcoal focus:bg-white focus:border-azure-blue focus:ring-1 focus:ring-azure-blue/10 outline-none transition-all"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider">
                  Email Address <span className="text-[#F44051]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#f8fafc] border border-surface-variant rounded-lg px-4 py-3 text-sm text-charcoal focus:bg-white focus:border-azure-blue focus:ring-1 focus:ring-azure-blue/10 outline-none transition-all"
                />
              </div>

              {/* Profession Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-xs font-bold text-charcoal uppercase tracking-wider">
                  Your Profession / Role <span className="text-[#F44051]">*</span>
                </label>
                <select
                  value={formData.profession}
                  onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                  required
                  className="w-full bg-[#f8fafc] border border-surface-variant rounded-lg px-4 py-3 text-sm text-charcoal focus:bg-white focus:border-azure-blue focus:ring-1 focus:ring-azure-blue/10 outline-none transition-all cursor-pointer"
                >
                  <option value="">-- Select Your Profession --</option>
                  {professionOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full py-4 bg-charcoal text-white font-body text-sm font-semibold rounded-lg shadow-md hover:bg-[#1f2937] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer select-none"
                >
                  {contactMutation.isPending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Configuring trial sandbox...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                      <span>Activate Free Trial</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
      {/* END: Lead Generation Form */}

      {/* BEGIN: Complete Onboarding Journey Section */}
      <section id="how-it-works" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 border-t border-surface-variant/40 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 text-azure-blue rounded-full text-[10px] font-bold uppercase tracking-wider select-none">
              ★ Complete Onboarding Journey
            </div>
            <h2 className="font-headline text-[32px] md:text-[40px] font-black text-charcoal tracking-tight leading-tight">
              From idea to a live store — <br />
              11 guided steps.
            </h2>
            <p className="text-sm text-slate-gray leading-relaxed">
              Everything is set up for you, with the world's best platforms behind every step. No code. No inventory. No guesswork.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                <span className="text-2xl font-black text-azure-blue block">11</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Simple Steps</span>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                <span className="text-2xl font-black text-azure-blue block">&lt; 30 min</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">To Go Live</span>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                <span className="text-2xl font-black text-azure-blue block">10,000+</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Ready Products</span>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                <span className="text-2xl font-black text-azure-blue block">₹0</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Inventory Cost</span>
              </div>
            </div>
          </div>

          {/* Stepper Card List */}
          <div className="lg:col-span-8 space-y-6">
            {stepsList.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-azure-blue/20 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="p-3.5 bg-blue-50/50 rounded-xl flex items-center justify-center text-azure-blue shrink-0">
                  <span className="material-symbols-outlined text-[32px]">{step.icon}</span>
                </div>
                
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-50 pb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-headline font-black text-azure-blue text-lg">{step.num}</span>
                      <h3 className="font-headline font-bold text-charcoal text-base md:text-lg">{step.title}</h3>
                    </div>
                    <span className="bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider select-none">
                      {step.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-gray leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-[11px] font-semibold text-slate-500">
                    {step.bullets.map((bullet, bIdx) => (
                      <span key={bIdx} className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        {bullet}
                      </span>
                    ))}
                  </div>

                  {step.meta && (
                    <div className="pt-2 flex items-center gap-1.5 text-[10px] text-azure-blue font-bold tracking-wide select-none">
                      <span className="material-symbols-outlined text-[14px]">link</span>
                      <span>{step.meta}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: Complete Onboarding Journey Section */}

      {/* PRICING SECTION HIDDEN PER USER INSTRUCTIONS */}

      {/* BEGIN: Profit Calculator Card */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="bg-charcoal text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-azure-blue/10 blur-[100px]"></div>
          <div className="relative z-10 text-center md:text-left">
            <p className="text-xs font-bold text-azure-blue uppercase tracking-widest mb-3">Revenue Projection</p>
            <h4 className="text-2xl md:text-3xl font-bold mb-2">Grow Your Earnings Automatically</h4>
            <p className="text-slate-400 text-sm max-w-md">Our AI optimizes your ads and listings to maximize ROI without you lifting a finger.</p>
          </div>
          <div className="relative z-10 flex items-center gap-8 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl w-full md:w-auto">
            <div>
              <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-2">Estimated Monthly Profit</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">₹75,000</span>
                <span className="text-sm opacity-60">/month</span>
              </div>
              <p className="text-[10px] opacity-50 mt-3 font-medium italic">*Based on selling 10 products/day average</p>
            </div>
            <div className="hidden lg:flex bg-[#2272F9]/20 p-5 rounded-2xl border border-azure-blue/30">
              <span className="material-symbols-outlined text-yellow-400 text-3xl">trending_up</span>
            </div>
          </div>
        </div>
      </section>
      {/* END: Profit Calculator */}

      {/* BEGIN: Partner Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="text-center mb-16">
          <h4 className="text-xs font-bold text-azure-blue uppercase tracking-[0.3em] mb-4">The Ecosystem</h4>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-charcoal">Integrated With The World's Best</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dynadot */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-azure-blue/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <img alt="Dynadot" className="h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCCLA2GST5w5M-TSFS5-IZdhMbjhBgSfcS9atr1u6SgpiDOLdEkrjHQ_DpA5Eako6HfJaGzurhYyY1kiGOdpTH5skXOueFg7NW17H3EqXS4HsnjkDygg-OqCxI0YWLn2CjeR54PHFaCBvWt1WeOpOIA9YKdPaG71lEIrONS9g7J3vUqFHChBuLGldzrxKIEp11qhCDmhVzwCBTRnIkH0eNGOsWduymdj7d7xCAMqYdp1wMwc9PpBOP" />
              <span className="text-green-500 bg-green-50 p-1.5 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </span>
            </div>
            <h5 className="text-base font-bold text-charcoal mb-2">Dynadot Domains</h5>
            <p className="text-xs text-slate-gray leading-relaxed">Secure your brand with the world's #1 domain registrar integrated directly into your dashboard.</p>
          </div>
          {/* Social Media */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-azure-blue/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs select-none">f</div>
                <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-[9px] italic font-bold select-none">ig</div>
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white text-[9px] font-bold select-none">yt</div>
              </div>
              <span className="text-green-500 bg-green-50 p-1.5 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </span>
            </div>
            <h5 className="text-base font-bold text-charcoal mb-2">Social Commerce</h5>
            <p className="text-xs text-slate-gray leading-relaxed">Auto-sync products to Instagram & Facebook. Run high-converting ads with zero technical knowledge.</p>
          </div>
          {/* Shiprocket */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-azure-blue/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <img alt="Shiprocket" className="h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA3imgIdHQEGhVXrTxqL5PxpQ0EQN_pSvvKFkH2EbqhF1GLrgNTNjkVoSMzrZWpNwTaEo8t7-b5ZxnAE2iN8OQi64obPka2Ta3Ax8BpHAgfZp6IXP-4Q1Cdq0RIPKfQoDvL0-2kXeeMZRWiGSI1-Yy-50XXY2rgo-UFcp8H_L01w3YlnUa9ydF1h3Tn6H5oonN_3MZ6MqnXahNhaQ03QQUP2cZQSH3vpr8c2lCDiMo0mpHIdm5X08F" />
              <span className="text-green-500 bg-green-50 p-1.5 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </span>
            </div>
            <h5 className="text-base font-bold text-charcoal mb-2">India-wide Shipping</h5>
            <p className="text-xs text-slate-gray leading-relaxed">29,000+ pin codes covered via Shiprocket. Automated label generation and tracking updates.</p>
          </div>
          {/* Razorpay */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-azure-blue/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <img alt="Razorpay" className="h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD35Qxg7C3fwtGX1LtDvAs81KnyIuWxpySqjBbZ1nyTaee7dMz-SfBtEyLhajmYSqefRjfwcWSM9jMOJ5kbf2HaQAGf5AcrIvebt2ry112PMhckYKQyaDMoyi3HKG9SDn_pQx3jpMYUj15Yh5E2gIOvKkcVfYxcQeOFWH2X8KZTebnWoC8Fgo-cp548VuFfhtYVZUZU5KNTgLiAWz7TyEScyGrXvtp0ni3GklZKAdK-bDg94QCJdSmt" />
              <span className="text-green-500 bg-green-50 p-1.5 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </span>
            </div>
            <h5 className="text-base font-bold text-charcoal mb-2">Instant Payments</h5>
            <p className="text-xs text-slate-gray leading-relaxed">Accept UPI, Cards, and Netbanking via Razorpay. One-day settlements to keep your cashflow healthy.</p>
          </div>
          {/* Analytics */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-azure-blue/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <img alt="Analytics" className="h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZQqLduBxfhT1UK9XQzXdcHUkDzp2nWPmWXcVm9ks5bqNetKEO40MkYxfr6kdUEnyX8Dw-XXc9ob40HH3j6GjKnB0TOZv3g-xGTmmTSXErgp0uSqDURr9ILnfG2Da2VQS2BNB5FFOd0gfqAJFRzOssbdEWPpkr6x4_hNGEcaRBzxtDl92yHn1H5JqfCGRDftxkY2w-ppoy3WCpAfiO8Yb-TZI7MCTgWtkr3ecOwhl2umqzTtCO3XyX" />
              <span className="text-green-500 bg-green-50 p-1.5 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </span>
            </div>
            <h5 className="text-base font-bold text-charcoal mb-2">Google Analytics</h5>
            <p className="text-xs text-slate-gray leading-relaxed">Deep insights into visitor behavior. Know exactly where your sales are coming from.</p>
          </div>
          {/* OpenAI */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-azure-blue/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="h-8 flex items-center italic font-black text-azure-blue text-xs uppercase select-none">OpenAI (GPT-4)</div>
              <span className="text-green-500 bg-green-50 p-1.5 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </span>
            </div>
            <h5 className="text-base font-bold text-charcoal mb-2">AI Store Copilot</h5>
            <p className="text-xs text-slate-gray leading-relaxed">24/7 AI guidance. Generate product descriptions, ad copy, and SEO keywords automatically.</p>
          </div>
        </div>
      </section>
      {/* END: Partner Grid */}

      {/* Sticky Bottom Call-to-Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-t border-slate-100 p-4 md:px-6 md:py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] select-none">
        <div className="max-w-container-max mx-auto flex items-center justify-center md:justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-charcoal font-bold text-base">Ready to start your journey?</p>
            <p className="text-slate-gray text-xs">Join 85,000+ successful sellers today.</p>
          </div>
          <a 
            href="#lead-form" 
            className="w-full md:w-auto bg-impact-red hover:bg-[#d82a3b] text-white text-center px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-red-100 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
          >
            Launch my e-commerce website now
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
}
