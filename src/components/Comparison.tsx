export default function Comparison() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-cyan tracking-widest uppercase mb-4">
            Why Choose Us
          </h2>
          <p className="text-3xl sm:text-4xl font-bold">
            The{" "}
            <span className="text-gradient">Matrix Dopers difference</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/5 bg-graphite p-8 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-muted">
                Traditional Agencies
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Slow delivery timelines",
                "Outdated designs and templates",
                "Expensive revisions and hidden costs",
                "Generic one-size-fits-all solutions",
                "Limited communication and support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted">
                  <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full blur-[60px]" />
            <div className="relative flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Matrix Dopers
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Fast iteration and quick delivery",
                "Modern UI/UX with latest trends",
                "Mobile-first responsive design",
                "Direct founder communication",
                "Latest technologies and frameworks",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <svg className="w-4 h-4 text-cyan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
