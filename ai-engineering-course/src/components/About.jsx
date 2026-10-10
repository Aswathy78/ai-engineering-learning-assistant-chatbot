import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-ink">
          About the Course
        </h2>
        <p className="mt-6 text-ink/70 leading-relaxed">
          AI Engineering combines artificial intelligence concepts with software
          engineering practices to build practical, scalable AI applications.
          This course introduces the technologies and workflows used to develop
          modern AI-powered systems.
        </p>
      </div>
    </section>
  );
}
