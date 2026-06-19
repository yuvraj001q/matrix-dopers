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
  },
  {
    name: "Physics Platform",
    category: "Educational Technology",
    description:
      "Modern physics education experience focused on visual learning and interactive scientific exploration.",
    tech: ["React", "TypeScript", "TailwindCSS", "Vercel"],
    color: "#F59E0B",
    initial: "P",
  },
  {
    name: "Project Alpha",
    category: "Custom Web Application",
    description:
      "A tailored web application built to solve specific business challenges with modern technologies and clean architecture.",
    tech: ["Next.js", "TypeScript", "Neon", "Vercel"],
    color: "#10B981",
    initial: "A",
  },
  {
    name: "Project Beta",
    category: "SaaS Platform",
    description:
      "A scalable SaaS platform with subscription management, user dashboards, and real-time data synchronization.",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    color: "#EF4444",
    initial: "B",
  },
  {
    name: "Project Gamma",
    category: "AI Integration",
    description:
      "An AI-powered solution that integrates intelligent automation and machine learning capabilities into existing workflows.",
    tech: ["Next.js", "TypeScript", "AI/ML", "TailwindCSS"],
    color: "#EC4899",
    initial: "G",
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
