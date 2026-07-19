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

interface AboutUsProps {
  onPageChange: (page: Page) => void;
}

export default function AboutUs({ onPageChange }: AboutUsProps) {
  return (
    <div className="bg-white">
      {/* 🚀 Premium Full-Width Row Hero Section */}
      <section className="relative overflow-hidden bg-charcoal text-white py-20 md:py-32 px-margin-mobile md:px-margin-desktop border-b border-white/10 flex items-center min-h-[450px] z-10">
        {/* 🖼️ Full-width Background Image Row */}
        <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
          <img
            src="/assets/About Us.png"
            alt="GCV Corporate Identity"
            className="w-full h-full object-cover opacity-50"
          />
          {/* Dark overlay gradient to blend text contrast */}
          <div className="absolute inset-0 bg-gradient-to-tr from-charcoal via-charcoal/40 to-charcoal/40 z-10" />
        </div>

        <div className="max-w-container-max mx-auto w-full relative z-20">
          <div className="max-w-3xl space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/10 rounded-full select-none">
              <span className="w-2 h-2 bg-azure-blue rounded-full animate-pulse"></span>
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-white/90">
                Our Identity
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-headline text-[36px] md:text-6xl font-bold leading-tight text-white tracking-tighter">
              Solving Complex Business Challenges Through Design & Technology
            </h1>

            {/* Description */}
            <p className="font-body text-lg text-slate-200/90 leading-relaxed">
              We bridge the gap between strategic intent and engineering
              reality, delivering enterprise-scale digital products that move
              the needle.
            </p>
          </div>
        </div>
      </section>

      {/* Our Belief Section */}
      <section className="bg-surface-gray py-16 md:py-20">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-widest mb-4 block">
              Our Belief
            </span>
            <h2 className="font-headline text-[28px] md:text-[40px] font-semibold text-charcoal italic tracking-tight">
              "Successful digital transformation starts with understanding
              people."
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white border border-surface-variant rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-azure-blue text-4xl mb-6">
                psychology
              </span>
              <h3 className="font-headline text-[20px] font-semibold text-charcoal mb-3">
                Empathy-Driven
              </h3>
              <p className="font-body text-sm text-slate-gray leading-relaxed">
                We dig deep into user behavior and business requirements before
                writing a single line of code.
              </p>
            </div>

            <div className="p-8 bg-white border border-surface-variant rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-azure-blue text-4xl mb-6">
                architecture
              </span>
              <h3 className="font-headline text-[20px] font-semibold text-charcoal mb-3">
                Precision-Built
              </h3>
              <p className="font-body text-sm text-slate-gray leading-relaxed">
                Our engineering culture is rooted in scalability, security, and
                long-term maintainability.
              </p>
            </div>

            <div className="p-8 bg-white border border-surface-variant rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-azure-blue text-4xl mb-6">
                trending_up
              </span>
              <h3 className="font-headline text-[20px] font-semibold text-charcoal mb-3">
                Impact-Focused
              </h3>
              <p className="font-body text-sm text-slate-gray leading-relaxed">
                We measure success by the tangible value and efficiency gains we
                create for our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-azure-blue opacity-5 rounded-full blur-3xl"></div>
            <div className="space-y-6 relative z-10">
              <div className="aspect-video bg-white border border-surface-variant rounded-lg overflow-hidden shadow-md">
                <img
                  className="w-full h-full object-cover"
                  alt="GCV office workspace team collaboration"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATZXZ8_oEkpAbCtaDMR1Q3HRyPHa4OHZ-IIl-yfy_KZ-bYa-blNYhdkUXOYYVCa7vo2vbgi2YXZeAGcKS7s3ub1K4ui22SSkIiyyX6XRCk22AGuP7GZSYD8zL8JP7C_rdXib6a4w1z9r5-cRsSeXxjPPKc2yWj68aXZzqT0widIR81CcrAeo5InhraywDfHvieAkHpl1nc3xkz9J8arrd-ib9shmuWx1ceOOijHgPf-dYP-3k41Okyew39u0patAO545CSNdauGn_E"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-[32px] md:text-[40px] font-bold text-charcoal mb-6 leading-tight tracking-tight">
              A Partnership Built on Trust and Innovation
            </h2>
            <div className="space-y-6 font-body text-base text-slate-gray leading-relaxed">
              <p>
                At GCV, we don't just build software; we build partnerships. Our
                story is one of collaborative problem-solving, where our
                multidisciplinary teams of researchers, designers, and engineers
                embed themselves within client organizations.
              </p>
              <p>
                We've helped Fortune 500 companies and agile startups alike
                navigate the complexities of digital evolution. By combining
                high-level strategic consultancy with rigorous technical
                implementation, we create intuitive experiences that solve
                real-world problems.
              </p>
              <div className="pt-4">
                <a
                  className="inline-flex items-center text-azure-blue font-semibold hover:underline cursor-pointer"
                  href="/work"
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange("work");
                  }}
                >
                  Explore our project history
                  <span className="material-symbols-outlined ml-2">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 👥 Leadership & Team Section */}
      <section className="bg-surface-gray py-20 md:py-28 border-t border-b border-surface-variant">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-widest mb-4 block">
              Core Leadership & Development
            </span>
            <h2 className="font-headline text-[32px] md:text-[44px] font-bold text-charcoal tracking-tight">
              Meet the Professionals Behind GCV
            </h2>
            <p className="font-body text-base text-slate-gray mt-4 leading-relaxed">
              We bring together design foresight and software engineering expertise to build products that establish user trust and scale enterprise growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Rajesh Bandila */}
            <div className="group relative bg-white border border-slate-200/60 hover:border-azure-blue/50 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:shadow-2xl hover:shadow-slate-100/80 transition-all duration-500 hover:-translate-y-1.5">
              <div>
                <div className="relative w-36 h-36 mx-auto mb-6 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-200/60 shadow-inner group-hover:scale-[1.03] transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-headline text-4xl font-semibold select-none">
                    RB
                  </div>
                  <img
                    src="/images/1700569281035.jpg"
                    alt="Rajesh Bandila"
                    className="w-full h-full object-cover relative z-10"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="text-center mb-6">
                  <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-wider block mb-2">
                    Founder & CEO
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-charcoal tracking-tight">
                    Rajesh Bandila
                  </h3>
                </div>
                <p className="font-body text-sm text-slate-gray leading-relaxed mb-6 text-center">
                  Rajesh drives GCV's organizational vision and user experience strategy, translating complex client business goals into intuitive product architectures.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://www.linkedin.com/in/rajeshbandila/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 border border-slate-200 hover:border-azure-blue hover:text-azure-blue rounded-xl text-slate-600 font-body text-sm font-semibold transition-all duration-300 bg-slate-50/50 hover:bg-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Divakaran S */}
            <div className="group relative bg-white border border-slate-200/60 hover:border-azure-blue/50 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:shadow-2xl hover:shadow-slate-100/80 transition-all duration-500 hover:-translate-y-1.5">
              <div>
                <div className="relative w-36 h-36 mx-auto mb-6 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-200/60 shadow-inner group-hover:scale-[1.03] transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-headline text-4xl font-semibold select-none">
                    DS
                  </div>
                  <img
                    src="/images/Diva.png"
                    alt="Divakaran S"
                    className="w-full h-full object-cover relative z-10"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="text-center mb-6">
                  <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-wider block mb-2">
                    Lead Full-Stack Developer & Coordinator
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-charcoal tracking-tight">
                    Divakaran S
                  </h3>
                </div>
                <p className="font-body text-sm text-slate-gray leading-relaxed mb-6 text-center">
                  Divakaran architects GCV's engineering roadmap, building high-concurrency cloud systems and modular frontend frameworks.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://www.linkedin.com/in/divakarans/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 border border-slate-200 hover:border-azure-blue hover:text-azure-blue rounded-xl text-slate-600 font-body text-sm font-semibold transition-all duration-300 bg-slate-50/50 hover:bg-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Pavan Kumar N */}
            <div className="group relative bg-white border border-slate-200/60 hover:border-azure-blue/50 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:shadow-2xl hover:shadow-slate-100/80 transition-all duration-500 hover:-translate-y-1.5">
              <div>
                <div className="relative w-36 h-36 mx-auto mb-6 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-200/60 shadow-inner group-hover:scale-[1.03] transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-headline text-4xl font-semibold select-none">
                    PK
                  </div>
                  <img
                    src="/images/pavan_kumar.jpg"
                    alt="Pavan Kumar N"
                    className="w-full h-full object-cover relative z-10"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="text-center mb-6">
                  <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-wider block mb-2">
                    Business Analyst & Database Associate
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-charcoal tracking-tight">
                    Pavan Kumar N
                  </h3>
                </div>
                <p className="font-body text-sm text-slate-gray leading-relaxed mb-6 text-center">
                  Pavan manages business operations and data analytics, supporting GCV's market insights and Oracle database coordination.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 border border-slate-200 hover:border-azure-blue hover:text-azure-blue rounded-xl text-slate-600 font-body text-sm font-semibold transition-all duration-300 bg-slate-50/50 hover:bg-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Meenakumari */}
            <div className="group relative bg-white border border-slate-200/60 hover:border-azure-blue/50 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:shadow-2xl hover:shadow-slate-100/80 transition-all duration-500 hover:-translate-y-1.5">
              <div>
                <div className="relative w-36 h-36 mx-auto mb-6 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-200/60 shadow-inner group-hover:scale-[1.03] transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-headline text-4xl font-semibold select-none">
                    MK
                  </div>
                  <img
                    src="/images/meenakumari.jpg"
                    alt="Meenakumari"
                    className="w-full h-full object-cover relative z-10"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="text-center mb-6">
                  <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-wider block mb-2">
                    Marketing Analyst & Business Strategist
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-charcoal tracking-tight">
                    Meenakumari
                  </h3>
                </div>
                <p className="font-body text-sm text-slate-gray leading-relaxed mb-6 text-center">
                  Meenakumari drives brand positioning and campaign analytics, aligning our digital products with targeted business growth metrics.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 border border-slate-200 hover:border-azure-blue hover:text-azure-blue rounded-xl text-slate-600 font-body text-sm font-semibold transition-all duration-300 bg-slate-50/50 hover:bg-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Bento Grid (Visual Image Added inside the block) */}
      <section className="bg-charcoal text-white py-16 md:py-20 overflow-hidden relative">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="mb-12">
            <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-widest mb-3 block">
              Our Culture
            </span>
            <h2 className="font-headline text-[32px] md:text-[40px] font-bold tracking-tight">
              Where Design Meets Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:h-[500px]">
            {/* 📸 Visual Background Image Container */}
            <div className="md:col-span-2 md:row-span-2 bg-charcoal border border-white/10 rounded-xl overflow-hidden relative p-8 flex flex-col justify-end group shadow-md min-h-[250px] md:min-h-auto">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATZXZ8_oEkpAbCtaDMR1Q3HRyPHa4OHZ-IIl-yfy_KZ-bYa-blNYhdkUXOYYVCa7vo2vbgi2YXZeAGcKS7s3ub1K4ui22SSkIiyyX6XRCk22AGuP7GZSYD8zL8JP7C_rdXib6a4w1z9r5-cRsSeXxjPPKc2yWj68aXZzqT0widIR81CcrAeo5InhraywDfHvieAkHpl1nc3xkz9J8arrd-ib9shmuWx1ceOOijHgPf-dYP-3k41Okyew39u0patAO545CSNdauGn_E"
                alt="GCV office workspace team collaboration"
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
              <div className="relative z-10 space-y-2">
                <h3 className="font-headline text-[22px] font-semibold text-white">
                  The Synthesis
                </h3>
                <p className="font-body text-sm text-slate-300 leading-relaxed">
                  We believe the best products are born at the intersection of
                  beautiful aesthetics and bulletproof logic. Our designers
                  speak code, and our engineers value the user experience.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl p-8 flex items-center justify-between group cursor-default">
              <div>
                <h3 className="font-headline text-[20px] font-semibold mb-2">
                  Continuous Learning
                </h3>
                <p className="font-body text-sm text-slate-gray leading-relaxed">
                  Weekly internal 'Tech Talks' and 'Design Crits'.
                </p>
              </div>
              <span className="material-symbols-outlined text-azure-blue text-5xl group-hover:scale-110 transition-transform duration-300">
                school
              </span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center">
              <span className="font-headline text-[48px] font-bold text-azure-blue mb-1">
                15+
              </span>
              <p className="font-body text-xs text-white uppercase tracking-widest font-semibold">
                Global Projects
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center">
              <span className="font-headline text-[48px] font-bold text-white mb-1">
                12
              </span>
              <p className="font-body text-xs text-white uppercase tracking-widest font-semibold">
                Specialized Roles
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
