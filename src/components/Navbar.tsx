"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Full navbar - visible at top */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "opacity-0 pointer-events-none -translate-y-4"
            : "opacity-100 translate-y-0"
        } ${!scrolled ? "bg-transparent" : "nav-blur"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
              <span className="text-cyan font-mono text-sm font-bold">M</span>
            </div>
            <span className="font-semibold text-sm tracking-wide">
              Matrix Dopers
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-cyan hover:text-black transition-all duration-200"
            >
              Start A Project
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden nav-blur border-t border-white/5">
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center text-sm font-medium bg-white text-black px-4 py-3 rounded-full hover:bg-cyan transition-all"
              >
                Start A Project
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Compact pill navbar - visible on scroll */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="nav-blur rounded-2xl border border-white/10 px-3 py-2 flex items-center gap-1 shadow-lg shadow-black/20">
          <a href="#home" className="flex items-center gap-2 group px-2">
            <div className="w-7 h-7 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
              <span className="text-cyan font-mono text-xs font-bold">M</span>
            </div>
            <span className="font-semibold text-xs tracking-wide whitespace-nowrap">
              Matrix Dopers
            </span>
          </a>

          <div className="w-px h-5 bg-white/10 mx-1 hidden md:block" />

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-muted hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="w-px h-5 bg-white/10 mx-1 hidden md:block" />

          <a
            href="#contact"
            className="hidden md:inline-flex text-xs font-medium bg-white text-black px-3 py-1.5 rounded-xl hover:bg-cyan transition-all duration-200"
          >
            Start A Project
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-4 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-4 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-4 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-2 mx-4 nav-blur rounded-2xl border border-white/10 p-4 shadow-lg shadow-black/20">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted hover:text-white hover:bg-white/5 rounded-xl px-3 py-2 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center text-sm font-medium bg-white text-black px-4 py-2.5 rounded-xl hover:bg-cyan transition-all"
              >
                Start A Project
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
