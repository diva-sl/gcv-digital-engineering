export default function CTA() {
  return (
    <section className="py-[120px] px-margin-mobile md:px-margin-desktop cta-gradient relative overflow-hidden">
      <div className="max-w-container-max mx-auto text-center relative z-10">
        <h2 className="font-headline text-[36px] md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
          Transform your business challenges <br className="hidden md:block" />{" "}
          into measurable impact.
        </h2>
        <p className="font-body text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Ready to build the future? Our team is standing by to help you
          navigate your next digital transformation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-5 bg-azure-blue text-white font-body text-sm font-semibold rounded-lg shadow-2xl hover:bg-opacity-95 hover:-translate-y-1 transition-all duration-200">
            Work With GCV
          </button>
          <button className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-body text-sm font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
            Schedule a Consult
          </button>
        </div>
      </div>
    </section>
  );
}



