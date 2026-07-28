import { useState, useEffect } from 'react';
import CommandPalette from '../ui/CommandPalette';

const navItems = [
  { id: 'hero',       label: 'Home / Hero',  icon: 'AI', type: 'text' },
  { id: 'about',      label: 'About',        icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', type: 'svg' },
  { id: 'skills',     label: 'Tech Stack',   icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', type: 'svg' },
  { id: 'experience', label: 'Experience',   icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', type: 'svg' },
  { id: 'projects',   label: 'Projects',     icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', type: 'svg' },
  { id: 'education',  label: 'Education',    icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z', type: 'svg' },
  { id: 'contact',    label: 'Contact',      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', type: 'svg' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 280;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleCustomOpen = () => setIsCmdPaletteOpen(true);
    window.addEventListener('open-command-palette', handleCustomOpen);
    return () => window.removeEventListener('open-command-palette', handleCustomOpen);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <CommandPalette isOpen={isCmdPaletteOpen} onClose={() => setIsCmdPaletteOpen(false)} />

      {/* Top minimal brand header with Cmd+K Button */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-base/70 backdrop-blur-xl border-b border-border/50 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="section-wrapper flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center font-mono font-bold text-accent group-hover:shadow-glow transition-all">
              SM
            </div>
            <span className="font-mono text-sm font-semibold text-text tracking-wide group-hover:text-accent transition-colors">
              shirisha<span className="text-accent">.dev</span>
            </span>
          </a>

          <div className="flex items-center gap-3">
            {/* Cmd + K Command Palette Trigger Button */}
            <button
              onClick={() => setIsCmdPaletteOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-2/80 border border-border text-xs font-mono text-text-2 hover:border-accent/50 hover:text-accent transition-all shadow-sm"
              title="Search or trigger commands"
            >
              <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search...</span>
              <kbd className="px-1.5 py-0.5 rounded bg-base text-[10px] text-muted border border-border">
                ⌘K
              </kbd>
            </button>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="text-xs font-mono font-bold px-4 py-2 rounded-xl bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-base transition-all duration-200"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* Floating Bottom Dock (v2 Active Beacon & Hover Tooltips) */}
      <nav
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-3 py-2 rounded-full bg-[#0D1117]/90 border border-border/80 shadow-2xl backdrop-blur-2xl flex items-center gap-1 sm:gap-2"
        aria-label="Floating Navigation Bar"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 py-2 rounded-full flex items-center justify-center transition-all duration-300 group ${
                isActive
                  ? 'text-accent bg-accent/20 border border-accent/40 shadow-glow-sm scale-110'
                  : 'text-muted hover:text-text hover:bg-surface-2/80'
              }`}
              title={item.label}
              aria-label={item.label}
            >
              {item.type === 'text' ? (
                <span className="font-mono text-xs font-bold px-1">{item.icon}</span>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={item.icon}
                  />
                </svg>
              )}

              {/* Active Indicator Dot under icon */}
              {isActive && (
                <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-glow" />
              )}

              {/* Hover Tooltip Popup */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-surface border border-border text-[10px] font-mono text-text opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
