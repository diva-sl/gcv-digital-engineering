export default function About() {
  return (
    <section className="py-[120px] px-margin-mobile md:px-margin-desktop bg-white">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-12 gap-6 items-center gap-y-12">
          {/* Architectural Image frame */}
          <div className="col-span-full md:col-span-5 relative h-96 md:h-[450px] rounded-xl overflow-hidden shadow-md">
            <img
              className="w-full h-full object-cover"
              alt="GCV Premium Architectural Workspace"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUIC9NuyzwqB-nUPR5zaxR3JZIUEhNHDn55KSfbVnqoYVpC3H2EjuPDgrDQsme708Sku14Hi4L6WygOTiX8gbINVv0MNlfRNYP1OlKOFMTkY5x_MZWPeROzUt8Mz3t8x-TG-QzjDRHYao8n2nEbPTa_1HxYtdn73Z6fMHzEFBzGLv-EkxR2Ez_bZk-q7JpBksxlZynrwT-qRIZM2TTI9WTslbMuBDLV6BP8sO5QurXafYKt6ueF6-0tclp9KhMDx4Xl9g7M871x0lT"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
          </div>
          {/* Editorial copy and stats block */}
          <div className="col-span-full md:col-span-7 flex flex-col justify-center md:pl-12">
            <span className="font-body text-xs font-bold text-azure-blue uppercase tracking-widest block mb-4">
              Our Vision
            </span>
            <h2 className="font-headline text-[32px] md:text-[48px] font-bold text-charcoal mb-6 leading-tight tracking-tight">
              Solving the Invisible{" "}
              <span className="text-azure-blue">Challenges</span> of Scale.
            </h2>
            <p className="font-body text-lg text-slate-gray mb-8 leading-relaxed">
              GCV is a digital product and engineering company that helps
              organizations solve complex business challenges through the
              combined power of design and technology. We don't just build
              features; we engineer competitive advantages.
            </p>
            {/* Numerical Statistics grid */}
            <div className="grid grid-cols-2 gap-8 border-t border-surface-container-low pt-8">
              <div>
                <h4 className="font-headline text-[40px] font-bold text-charcoal leading-none mb-2">
                  150+
                </h4>
                <p className="font-body text-sm font-semibold text-slate-gray">
                  Products Launched
                </p>
              </div>
              <div>
                <h4 className="font-headline text-[40px] font-bold text-charcoal leading-none mb-2">
                  12+
                </h4>
                <p className="font-body text-sm font-semibold text-slate-gray">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



