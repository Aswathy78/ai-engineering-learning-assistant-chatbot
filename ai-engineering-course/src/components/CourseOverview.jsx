import React from 'react';
import { Brain, Cpu, MessageSquareText, Link2 } from 'lucide-react';

const items = [
  {
    icon: Cpu,
    title: 'Artificial Intelligence',
    text: 'AI fundamentals and intelligent systems',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    text: 'ML concepts, algorithms and model development',
  },
  {
    icon: MessageSquareText,
    title: 'Generative AI',
    text: 'LLMs, prompting and AI applications',
  },
  {
    icon: Link2,
    title: 'AI Engineering',
    text: 'RAG, agents, APIs and deployment',
  },
];

export default function CourseOverview() {
  return (
    <section id="course" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center">
          Course Overview
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-flow-mist bg-white p-6 transition-all hover:border-flow-light hover:shadow-[0_8px_30px_-12px_rgba(11,79,135,0.25)]"
            >
              <div className="w-11 h-11 rounded-xl bg-flow-mist flex items-center justify-center group-hover:bg-flow-light/15 transition-colors">
                <Icon className="w-5 h-5 text-flow" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
