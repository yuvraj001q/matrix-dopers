export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-cyan tracking-widest uppercase mb-4">
            About
          </h2>
          <p className="text-3xl sm:text-4xl font-bold max-w-2xl">
            Built by{" "}
            <span className="text-gradient">brothers</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-lg text-muted leading-relaxed">
              Two brothers from Haldwani who are obsessed with building better
              digital products. We noticed that most local businesses in
              Uttarakhand either have outdated websites or no web presence at
              all. That&apos;s where we come in.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              We combine modern design sensibilities with the latest technologies
              to create digital experiences that actually work. No fluff, no
              templates — just clean, fast, and effective products.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              From business websites to SaaS platforms and AI-powered tools,
              we handle everything from concept to deployment. Our clients get
              direct access to the founders — no account managers, no
              miscommunication, just real work delivered fast.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { value: "Fast", label: "Delivery" },
                { value: "Modern", label: "Design" },
                { value: "Direct", label: "Communication" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl border border-white/5 bg-graphite">
                  <div className="text-xl font-bold text-cyan">{stat.value}</div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Next.js", "React", "TypeScript", "TailwindCSS", "PostgreSQL", "Vercel", "AI"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 text-xs rounded-lg bg-cyan/5 border border-cyan/10 text-cyan">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/5 bg-graphite p-8 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/yuvraj.png"
                  alt="Yuvraj Singh Negi"
                  className="w-24 h-24 rounded-2xl object-cover border border-cyan/20"
                />
                <div>
                  <h3 className="text-lg font-semibold">Yuvraj Singh Negi</h3>
                  <p className="text-sm text-cyan">Co-Founder</p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Focused on building modern web applications and SaaS platforms
                with a keen eye for design and user experience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-graphite p-8 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/aayush.png"
                  alt="Aayush Bisht"
                  className="w-24 h-24 rounded-2xl object-cover border border-cyan/20"
                />
                <div>
                  <h3 className="text-lg font-semibold">Aayush Bisht</h3>
                  <p className="text-sm text-cyan">Co-Founder</p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Driven by technology and innovation, building scalable
                solutions and AI-powered tools that solve real problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
