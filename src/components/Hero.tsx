"use client";

import { useState, useEffect, useCallback } from "react";

const featuredProjects = [
  {
    name: "Level Up",
    category: "AI-Powered Gamified Productivity",
    image: "/projects/levelup.png",
    color: "#00DBE9",
  },
  {
    name: "OpenCodeLingo",
    category: "Developer Learning Platform",
    image: "/projects/opencodelingo.png",
    color: "#8B5CF6",
  },
  {
    name: "Physics Platform",
    category: "Educational Technology",
    image: "/projects/physics.png",
    color: "#F59E0B",
  },
  {
    name: "Project Alpha",
    category: "Custom Web Application",
    image: "/projects/alpha.png",
    color: "#10B981",
  },
  {
    name: "Project Beta",
    category: "SaaS Platform",
    image: "/projects/beta.png",
    color: "#EF4444",
  },
  {
    name: "Project Gamma",
    category: "AI Integration",
    image: "/projects/gamma.png",
    color: "#EC4899",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextProject, 4000);
    return () => clearInterval(interval);
  }, [nextProject]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              A division of Predators
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Websites, SaaS Products, And AI Solutions{" "}
              <span className="text-gradient">Built To Win Attention.</span>
            </h1>

            <p className="text-muted text-lg leading-relaxed max-w-lg">
              We help businesses, creators, and startups launch modern digital
              experiences that look premium, perform fast, and convert visitors
              into customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-medium px-6 py-3.5 rounded-full hover:bg-cyan transition-all duration-200 group"
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
                href="#projects"
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-white font-medium px-6 py-3.5 rounded-full hover:border-cyan/30 hover:bg-cyan/5 transition-all duration-200"
              >
                View Our Work
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-graphite">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted font-mono">
                    {featuredProjects[activeIndex].name}
                  </span>
                </div>
              </div>

              <div className="relative aspect-video bg-graphite-light overflow-hidden">
                {featuredProjects[activeIndex].image ? (
                  <img
                    src={featuredProjects[activeIndex].image}
                    alt={featuredProjects[activeIndex].name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-50" />
                    <div className="relative text-center space-y-4 p-8">
                      <div
                        className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-3xl font-bold"
                        style={{
                          backgroundColor: `${featuredProjects[activeIndex].color}15`,
                          color: featuredProjects[activeIndex].color,
                        }}
                      >
                        {featuredProjects[activeIndex].name[0]}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {featuredProjects[activeIndex].name}
                        </h3>
                        <p className="text-sm text-muted mt-1">
                          {featuredProjects[activeIndex].category}
                        </p>
                      </div>
                      <div className="flex gap-2 justify-center">
                        <span className="px-2 py-1 text-xs rounded bg-white/5 text-muted border border-white/5">
                          Next.js
                        </span>
                        <span className="px-2 py-1 text-xs rounded bg-white/5 text-muted border border-white/5">
                          TypeScript
                        </span>
                        <span className="px-2 py-1 text-xs rounded bg-white/5 text-muted border border-white/5">
                          Tailwind
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="px-4 py-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  {featuredProjects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-6 bg-cyan"
                          : "w-1.5 bg-white/15 hover:bg-white/25"
                      }`}
                      aria-label={`View project ${i + 1}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted font-mono">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(featuredProjects.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
