import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-flow py-24">
      <svg
        className="absolute inset-x-0 -top-1 w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path d="M0,40 C360,100 1080,0 1440,60 L1440,0 L0,0 Z" fill="#EAF4FB" />
      </svg>

      <div
        className="absolute inset-0 -z-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, white 0, transparent 45%), radial-gradient(circle at 80% 70%, white 0, transparent 40%)',
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Start Your AI Engineering Journey
        </h2>
        <p className="mt-4 text-white/80">
          Build. Experiment. Deploy. Learn AI Engineering.
        </p>
        <a
          href="#course"
          className="mt-8 inline-flex items-center gap-2 bg-white text-flow px-7 py-3 rounded-full text-sm font-medium hover:bg-flow-mist transition-colors"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
