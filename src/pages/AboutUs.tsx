export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20 md:mb-[120px] pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-widest mb-4 block">Our Identity</span>
            <h1 className="font-headline text-[36px] md:text-6xl font-bold leading-tight text-charcoal mb-6 tracking-tighter">
              Solving Complex Business Challenges Through Design & Technology
            </h1>
            <p className="font-body text-lg text-slate-gray max-w-2xl leading-relaxed">
              We bridge the gap between strategic intent and engineering reality, delivering enterprise-scale digital products that move the needle.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg border border-surface-variant">
              <img 
                className="w-full h-full object-cover" 
                alt="GCV twilight glass office architectural photograph" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgdK99-v6F1XYsST5CEP-OuTxn-W9xjDnd0Gf6nwDqmTJp1PhLG6HUj0i1SHVpUZnncLH8UInWl4jiqkgFdFGDpSUtazH1LEjI-JvAYHL2Ta_D-rfoK3aCPp4QnMZQP-eHAPC-M2TVCUhu4rJsXuiQ01Q456H8m-PJQz1LS4zFg5Bvy2onFYDM1pezh_IdYGHOKPKFjWu5-8XOj3aJFZ2cStL-_hGyfSNbWiwifHMmxL406cH4j1ik4I1usTwbwXnRgCSPyuajC3Vl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Belief Section */}
      <section className="bg-surface-gray py-[120px]">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-widest mb-4 block">Our Belief</span>
            <h2 className="font-headline text-[28px] md:text-[40px] font-semibold text-charcoal italic tracking-tight">
              "Successful digital transformation starts with understanding people."
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white border border-surface-variant rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-azure-blue text-4xl mb-6">psychology</span>
              <h3 className="font-headline text-[20px] font-semibold text-charcoal mb-3">Empathy-Driven</h3>
              <p className="font-body text-sm text-slate-gray leading-relaxed">
                We dig deep into user behavior and business requirements before writing a single line of code.
              </p>
            </div>
            
            <div className="p-8 bg-white border border-surface-variant rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-azure-blue text-4xl mb-6">architecture</span>
              <h3 className="font-headline text-[20px] font-semibold text-charcoal mb-3">Precision-Built</h3>
              <p className="font-body text-sm text-slate-gray leading-relaxed">
                Our engineering culture is rooted in scalability, security, and long-term maintainability.
              </p>
            </div>
            
            <div className="p-8 bg-white border border-surface-variant rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-azure-blue text-4xl mb-6">trending_up</span>
              <h3 className="font-headline text-[20px] font-semibold text-charcoal mb-3">Impact-Focused</h3>
              <p className="font-body text-sm text-slate-gray leading-relaxed">
                We measure success by the tangible value and efficiency gains we create for our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-[120px]">
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
                At GCV, we don't just build software; we build partnerships. Our story is one of collaborative problem-solving, where our multidisciplinary teams of researchers, designers, and engineers embed themselves within client organizations.
              </p>
              <p>
                We've helped Fortune 500 companies and agile startups alike navigate the complexities of digital evolution. By combining high-level strategic consultancy with rigorous technical implementation, we create intuitive experiences that solve real-world problems.
              </p>
              <div className="pt-4">
                <a className="inline-flex items-center text-azure-blue font-semibold hover:underline" href="#">
                  Explore our project history 
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Bento Grid */}
      <section className="bg-charcoal text-white py-[120px] overflow-hidden relative">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="mb-12">
            <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-widest mb-3 block">Our Culture</span>
            <h2 className="font-headline text-[32px] md:text-[40px] font-bold tracking-tight">Where Design Meets Engineering</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:h-[500px]">
            <div className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col justify-end">
              <h3 className="font-headline text-[22px] font-semibold mb-4">The Synthesis</h3>
              <p className="font-body text-sm text-slate-gray leading-relaxed">
                We believe the best products are born at the intersection of beautiful aesthetics and bulletproof logic. Our designers speak code, and our engineers value the user experience.
              </p>
            </div>
            
            <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl p-8 flex items-center justify-between group cursor-default">
              <div>
                <h3 className="font-headline text-[20px] font-semibold mb-2">Continuous Learning</h3>
                <p className="font-body text-sm text-slate-gray leading-relaxed">Weekly internal 'Tech Talks' and 'Design Crits'.</p>
              </div>
              <span className="material-symbols-outlined text-azure-blue text-5xl group-hover:scale-110 transition-transform duration-300">school</span>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center">
              <span className="font-headline text-[48px] font-bold text-azure-blue mb-1">120+</span>
              <p className="font-body text-xs text-white uppercase tracking-widest font-semibold">Global Projects</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center">
              <span className="font-headline text-[48px] font-bold text-white mb-1">12</span>
              <p className="font-body text-xs text-white uppercase tracking-widest font-semibold">Specialized Roles</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
