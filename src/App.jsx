import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsGallery from './components/ProjectsGallery';
import ContactCTA from './components/ContactCTA';

const App = () => {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-black font-['Inter','Geist','Manrope',system-ui,sans-serif] text-white">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 shadow-[0_0_20px] shadow-cyan-400/50" />
            <span className="text-sm tracking-widest text-white/80">SNAPSHOT AI</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#work" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="w-full overflow-hidden">
        <HeroSection />
        <AboutSection />
        <div id="work">
          <ProjectsGallery />
        </div>
        <div id="contact">
          <ContactCTA />
        </div>
      </main>

      <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-xs text-white/60 backdrop-blur">
        © {new Date().getFullYear()} Snapshot AI. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
