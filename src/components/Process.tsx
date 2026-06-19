const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We understand your goals, audience, and requirements.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Architecture, tech stack, and project roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description: "UI/UX design with your brand and user experience in mind.",
  },
  {
    number: "04",
    title: "Development",
    description: "Clean code, modern frameworks, and best practices.",
  },
  {
    number: "05",
    title: "Testing",
    description: "Quality assurance across devices and browsers.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Deploy, monitor, and optimize for performance.",
  },
];

export default function Process() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-cyan tracking-widest uppercase mb-4">
            Process
          </h2>
          <p className="text-3xl sm:text-4xl font-bold">
            How we bring your{" "}
            <span className="text-gradient">vision to life</span>
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/20 via-cyan/10 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`hidden md:block md:w-1/2 ${
                    i % 2 === 0 ? "pr-16 text-right" : "pl-16 text-left"
                  }`}
                >
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted">{step.description}</p>
                </div>

                <div className="relative z-10 shrink-0 w-12 h-12 rounded-xl bg-graphite border border-white/10 flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                  <span className="text-xs font-mono text-cyan font-bold">
                    {step.number}
                  </span>
                </div>

                <div className="md:hidden pl-4">
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted">{step.description}</p>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
