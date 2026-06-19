"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on the project scope. A business website typically starts from ₹8,000-15,000. SaaS platforms and custom web apps are quoted after understanding your requirements. We always provide transparent pricing before starting.",
  },
  {
    question: "How long does development take?",
    answer:
      "A business website takes 5-10 days. Landing pages can be done in 2-3 days. SaaS platforms and custom applications typically take 2-6 weeks depending on complexity. We prioritize fast delivery without compromising quality.",
  },
  {
    question: "Can you redesign existing websites?",
    answer:
      "Absolutely. We specialize in modernizing outdated websites. We'll audit your current site, identify improvements, and rebuild it with modern design, better performance, and mobile-first approach.",
  },
  {
    question: "Do you build custom software?",
    answer:
      "Yes. We build custom web applications, dashboards, SaaS platforms, and AI-powered tools. If you have a unique business need that off-the-shelf software can't solve, we can build it.",
  },
  {
    question: "Can you maintain our website?",
    answer:
      "Yes. We offer maintenance packages that include updates, security patches, content changes, and performance monitoring. We'll keep your site running smoothly after launch.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-cyan tracking-widest uppercase mb-4">
            FAQ
          </h2>
          <p className="text-3xl sm:text-4xl font-bold">
            Common{" "}
            <span className="text-gradient">questions</span>
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 bg-graphite overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="text-base font-medium group-hover:text-cyan transition-colors pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`faq-answer ${openIndex === i ? "open" : ""}`}
                style={{
                  maxHeight: openIndex === i ? "500px" : "0",
                  padding: openIndex === i ? "0 6px 24px" : "0 6px",
                }}
              >
                <p className="text-sm text-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
