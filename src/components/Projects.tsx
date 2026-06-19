"use client";

import { useState } from "react";

const projects = [
  {
    name: "Level Up",
    category: "AI-Powered Gamified Productivity",
    description:
      "AI-generated quests that help students build discipline, consistency, and real-world progress. Features XP rewards, achievements, and streaks.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "AI"],
    color: "#00DBE9",
    initial: "L",
    image: "/projects/levelup.png",
    link: "https://level-up-theta-tawny.vercel.app/",
  },
  {
    name: "OpenCodeLingo",
    category: "Developer Learning Platform",
    description:
      "Interactive educational platform designed to help developers learn programming concepts through modern visual experiences.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Neon"],
    color: "#8B5CF6",
    initial: "O",
    image: "/projects/opencodelingo.png",
    link: "https://codelingo-alpha.vercel.app/",
  },
  {
    name: "Gold's Gym Venice",
    category: "Fitness & Gym Website",
    description:
      "A premium fitness website for Gold's Gym Venice with modern design, class schedules, trainer profiles, and membership plans.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    color: "#F59E0B",
    initial: "G",
    image: "/projects/gym.png",
    link: "https://golds-gym-venice.vercel.app/",
  },
  {
    name: "Onyx Coffee Lab",
    category: "Cafe & Restaurant Website",
    description:
      "A premium coffee shop website with elegant design, menu showcase, online ordering, and brand storytelling.",
    tech: ["Next.js", "TypeScript", "Neon", "Vercel"],
    color: "#10B981",
    initial: "O",
    image: "/projects/cafe.png",
    link: "https://onyxcoffeelab.netlify.app/",
  },
  {
    name: "Kimberley General Store",
    category: "E-Commerce & Retail",
    description:
      "A modern general store website with product catalog, online ordering, and local delivery integration.",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    color: "#EF4444",
    initial: "K",
    image: "/projects/store.png",
    link: "https://kimberley-general-store.up.railway.app/",
  },
  {
    name: "Mayo Clinic Healthcare",
    category: "Healthcare & Medical",
    description:
      "A modern healthcare platform with appointment booking, doctor profiles, services overview, and patient portal.",
    tech: ["Next.js", "TypeScript", "AI/ML", "TailwindCSS"],
    color: "#EC4899",
    initial: "M",
    image: "/projects/clinic.png",
    link: "https://mayo-clinic-healthcare.up.railway.app/",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-cyan tracking-widest uppercase mb-4">
            Featured Projects
          </h2>
          <p className="text-3xl sm:text-4xl font-bold max-w-2xl">
            Products we&apos;ve built from{" "}
            <span className="text-gradient">concept to launch</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="project-card group rounded-2xl border border-white/5 bg-graphite overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-video bg-graphite-light flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover project-image transition-transform duration-500"
                  />
                ) : (
                  <div
                    className="project-image transition-transform duration-500 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}08, ${project.color}15)`,
                    }}
                  >
                    <div className="text-center space-y-3">
                      <div
                        className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-2xl font-bold transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${project.color}20`,
                          color: project.color,
                        }}
                      >
                        {project.initial}
                      </div>
                      <span className="text-xs text-muted font-mono block">
                        {project.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="project-overlay absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-cyan transition-colors"
                    >
                      View Project
                    </a>
                  ) : (
                    <span className="px-4 py-2 rounded-full bg-white/20 text-white/50 text-sm font-medium cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}
                  <a
                    href="#contact"
                    className="px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium hover:border-cyan/50 hover:bg-cyan/10 transition-all"
                  >
                    View Details
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-cyan transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-muted border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
