const technologies = [
  { name: "Next.js", icon: "N" },
  { name: "React", icon: "R" },
  { name: "TypeScript", icon: "TS" },
  { name: "TailwindCSS", icon: "TW" },
  { name: "PostgreSQL", icon: "PG" },
  { name: "Neon", icon: "N" },
  { name: "Vercel", icon: "V" },
  { name: "GitHub", icon: "GH" },
  { name: "AI Tools", icon: "AI" },
];

export default function TechStack() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-cyan tracking-widest uppercase mb-4">
            Technology
          </h2>
          <p className="text-3xl sm:text-4xl font-bold">
            Built with the{" "}
            <span className="text-gradient">latest tools</span>
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl border border-white/5 bg-graphite hover-lift cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center font-mono text-sm font-bold text-muted group-hover:text-cyan group-hover:bg-cyan/10 transition-all">
                {tech.icon}
              </div>
              <span className="text-xs text-muted group-hover:text-white transition-colors text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
