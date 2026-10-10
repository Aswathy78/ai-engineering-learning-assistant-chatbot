import React from 'react';

const modules = [
  'Python for AI',
  'Machine Learning',
  'Deep Learning',
  'NLP & Transformers',
  'Large Language Models',
  'Generative AI',
  'RAG Systems',
  'AI Agents',
  'AI Application Development',
  'Deployment & MLOps',
];

export default function Modules() {
  return (
    <section id="modules" className="py-24 bg-flow-mist/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center">
          What You&apos;ll Learn
        </h2>
        <p className="mt-3 text-center text-ink/60 max-w-lg mx-auto">
          A single path, from first principles to production.
        </p>

        <div className="mt-16 relative overflow-x-auto pb-4">
          <div className="relative min-w-[1100px] h-56 px-4">
            {/* The river: a continuous curved line running beneath every node */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1100 220"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M20,110 C75,40 130,180 185,110 C240,40 295,180 350,110
                   C405,40 460,180 515,110 C570,40 625,180 680,110
                   C735,40 790,180 845,110 C900,40 955,180 1010,110 L1080,110"
                fill="none"
                stroke="#2E9CDB"
                strokeWidth="2.5"
                strokeDasharray="1 10"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>

            {/* Nodes, alternating above/below the river line */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              {modules.map((mod, i) => {
                const isUp = i % 2 === 0;
                return (
                  <div
                    key={mod}
                    className="flex flex-col items-center w-24 shrink-0"
                    style={{
                      transform: isUp ? 'translateY(-38px)' : 'translateY(38px)',
                    }}
                  >
                    {!isUp && (
                      <span className="text-[11px] text-ink/50 mb-2 text-center leading-tight">
                        {mod}
                      </span>
                    )}
                    <span className="w-3.5 h-3.5 rounded-full bg-flow border-4 border-white shadow-sm shrink-0" />
                    {isUp && (
                      <span className="text-[11px] text-ink/50 mt-2 text-center leading-tight">
                        {mod}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
