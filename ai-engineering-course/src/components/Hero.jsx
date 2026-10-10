import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-flow-mist/60 to-white"
    >
      {/* Signature flowing wave graphic */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -bottom-10 left-0 w-[200%] h-auto animate-drift"
          viewBox="0 0 1600 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0,220 C160,280 320,140 480,180 C640,220 800,320 960,280 C1120,240 1280,120 1440,160 C1520,180 1560,200 1600,220 L1600,400 L0,400 Z"
            fill="#EAF4FB"
          />
        </svg>
        <svg
          className="absolute -bottom-6 left-0 w-[200%] h-auto opacity-70"
          viewBox="0 0 1600 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0,260 C200,200 400,300 600,260 C800,220 1000,300 1200,260 C1350,235 1480,250 1600,260 L1600,400 L0,400 Z"
            fill="#DDEEFA"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink leading-[1.05]">
            AI Engineering Course
          </h1>
          <p className="mt-5 text-xl text-flow font-display font-medium">
            Learn to build intelligent, production-ready AI systems.
          </p>
          <p className="mt-4 text-base text-ink/70 max-w-md leading-relaxed">
            Explore the foundations of Artificial Intelligence, Machine Learning,
            Large Language Models, Generative AI, RAG, and AI Engineering through
            a structured learning path.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#course"
              className="inline-flex items-center gap-2 bg-flow text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-flow-light transition-colors"
            >
              Explore Course
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#modules"
              className="inline-flex items-center gap-2 border border-flow/30 text-flow px-6 py-3 rounded-full text-sm font-medium hover:bg-flow-mist transition-colors"
            >
              <Compass className="w-4 h-4" />
              View Modules
            </a>
          </div>
        </div>

        <div className="relative hidden md:block" aria-hidden="true">
          <svg viewBox="0 0 400 400" className="w-full h-auto">
            <defs>
              <linearGradient id="orbGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2E9CDB" />
                <stop offset="100%" stopColor="#0B4F87" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="150" fill="url(#orbGrad)" opacity="0.08" />
            <circle cx="200" cy="200" r="105" fill="url(#orbGrad)" opacity="0.12" />
            <path
              d="M70,210 C120,170 150,250 200,210 C250,170 280,250 330,210"
              stroke="#0B4F87"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M70,240 C120,200 150,280 200,240 C250,200 280,280 330,240"
              stroke="#2E9CDB"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
