"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const featuredProjects = [
  {
    name: "Cafe Cobaken Beans",
    category: "Bakery & Cafe Website",
    image: "/projects/thecafeco.png",
    color: "#00DBE9",
    link: "https://cafecobakenbeans.netlify.app/",
  },
  {
    name: "OpenCodeLingo",
    category: "Developer Learning Platform",
    image: "/projects/opencodelingo.png",
    color: "#8B5CF6",
    link: "https://codelingo-alpha.vercel.app/",
  },
  {
    name: "Gold's Gym Venice",
    category: "Fitness & Gym Website",
    image: "/projects/gym.png",
    color: "#F59E0B",
    link: "https://golds-gym-venice.vercel.app/",
  },
  {
    name: "Onyx Coffee Lab",
    category: "Cafe & Restaurant Website",
    image: "/projects/cafe.png",
    color: "#10B981",
    link: "https://onyxcoffeelab.netlify.app/",
  },
  {
    name: "Kimberley General Store",
    category: "E-Commerce & Retail",
    image: "/projects/store.png",
    color: "#EF4444",
    link: "https://kimberley-general-store.up.railway.app/",
  },
  {
    name: "Mayo Clinic Healthcare",
    category: "Healthcare & Medical",
    image: "/projects/clinic.png",
    color: "#EC4899",
    link: "https://mayo-clinic-healthcare.up.railway.app/",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev") => {
      setDirection(dir);
      setActiveIndex(index);
    },
    []
  );

  const next = useCallback(() => {
    goTo((activeIndex + 1) % featuredProjects.length, "next");
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    goTo(
      (activeIndex - 1 + featuredProjects.length) % featuredProjects.length,
      "prev"
    );
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  const project = featuredProjects[activeIndex];

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

          <div
            className="relative group/carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-graphite">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted font-mono">
                    {project.name}
                  </span>
                </div>
              </div>

              <div
                className="relative aspect-video bg-graphite-light overflow-hidden cursor-pointer"
                onClick={() => {
                  if (project.link) window.open(project.link, "_blank");
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                    key={activeIndex}
                    style={{
                      animation: `fade-in 0.4s ease-out`,
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div
                        className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-3xl font-bold"
                        style={{
                          backgroundColor: `${project.color}15`,
                          color: project.color,
                        }}
                      >
                        {project.name[0]}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{project.name}</h3>
                        <p className="text-sm text-muted mt-1">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {project.link && (
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium flex items-center gap-2">
                      View Project
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </div>
                )}
              </div>

              <div className="px-4 py-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  {featuredProjects.map((p, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        goTo(i, i > activeIndex ? "next" : "prev")
                      }
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-6 bg-cyan"
                          : "w-1.5 bg-white/15 hover:bg-white/25"
                      }`}
                      aria-label={`View ${p.name}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-cyan/30 transition-all"
                    aria-label="Previous project"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <span className="text-xs text-muted font-mono min-w-[3rem] text-center">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(featuredProjects.length).padStart(2, "0")}
                  </span>
                  <button
                    onClick={next}
                    className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-cyan/30 transition-all"
                    aria-label="Next project"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute top-full left-0 right-0 flex justify-center gap-1 opacity-0 group-hover/carousel:opacity-100 transition-opacity mt-4">
              {featuredProjects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > activeIndex ? "next" : "prev")}
                  className={`text-xs px-2 py-1 rounded transition-colors ${
                    i === activeIndex
                      ? "text-cyan bg-cyan/10"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
