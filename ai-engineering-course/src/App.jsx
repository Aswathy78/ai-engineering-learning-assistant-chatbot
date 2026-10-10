import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CourseOverview from './components/CourseOverview.jsx';
import Modules from './components/Modules.jsx';
import About from './components/About.jsx';
import CTA from './components/CTA.jsx';
import Chatbot from './components/Chatbot.jsx';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CourseOverview />
        <Modules />
        <About />
        <CTA />
      </main>
      <Chatbot />
    </div>
  );
}
