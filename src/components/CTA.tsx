export default function CTA() {
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl border border-white/5 bg-graphite overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative px-8 py-20 sm:px-16 sm:py-28 text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Let&apos;s Build Something{" "}
              <span className="text-gradient">Worth Remembering.</span>
            </h2>

            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you need a business website, SaaS platform, AI solution,
              or custom digital experience — we&apos;re ready to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/919999999999?text=Hi%20Matrix%20Dopers%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-medium px-8 py-4 rounded-full hover:bg-cyan transition-all duration-200 group"
              >
                Start A Project
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="mailto:hello@matrixdopers.com"
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-white font-medium px-8 py-4 rounded-full hover:border-cyan/30 hover:bg-cyan/5 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
