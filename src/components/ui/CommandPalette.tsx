import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { links } from '../../data/profile';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          setQuery('');
          // open command palette
          const event = new CustomEvent('open-command-palette');
          window.dispatchEvent(event);
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const items = [
    { id: 'hero', label: 'Go to Top / Hero', type: 'navigation', action: () => scrollTo('hero') },
    { id: 'about', label: 'Go to About Section', type: 'navigation', action: () => scrollTo('about') },
    { id: 'skills', label: 'Go to Tech Stack & Skills', type: 'navigation', action: () => scrollTo('skills') },
    { id: 'experience', label: 'Go to Career Experience / Quests', type: 'navigation', action: () => scrollTo('experience') },
    { id: 'projects', label: 'Go to Projects Showcase', type: 'navigation', action: () => scrollTo('projects') },
    { id: 'education', label: 'Go to Education Timeline', type: 'navigation', action: () => scrollTo('education') },
    { id: 'contact', label: 'Go to Contact / Send Message', type: 'navigation', action: () => scrollTo('contact') },
    { id: 'resume', label: 'View Resume PDF 📥', type: 'action', action: () => window.open(links.resume, '_blank') },
    { id: 'github', label: 'Open GitHub Profile ↗', type: 'action', action: () => window.open(links.github, '_blank') },
    { id: 'linkedin', label: 'Open LinkedIn Profile ↗', type: 'action', action: () => window.open(links.linkedin, '_blank') },
    { id: 'leetcode', label: 'Open LeetCode Profile ↗', type: 'action', action: () => window.open(links.leetcode, '_blank') },
    { id: 'email', label: 'Copy Email to Clipboard 📋', type: 'action', action: () => { navigator.clipboard.writeText('shirisha1862@gmail.com'); alert('Email copied to clipboard!'); } },
  ];

  const scrollTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-base/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl bg-[#0D1117] border border-border/90 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-border/60">
              <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search section..."
                className="w-full bg-transparent text-text font-mono text-sm focus:outline-none"
              />
              <kbd className="hidden sm:inline-block font-mono text-[10px] text-muted border border-border px-2 py-0.5 rounded">
                ESC
              </kbd>
            </div>

            {/* Command List */}
            <div className="max-h-72 overflow-y-auto p-2 space-y-1">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { item.action(); onClose(); }}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-mono text-xs text-text-2 hover:text-accent hover:bg-surface-2 transition-colors text-left group"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] text-muted group-hover:text-accent uppercase">
                      {item.type}
                    </span>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center font-mono text-xs text-muted">
                  No matching commands found.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-base/50 border-t border-border/40 flex items-center justify-between font-mono text-[10px] text-muted">
              <span>Navigation & Actions</span>
              <span>Use <kbd className="text-text border border-border px-1 rounded">↑</kbd> <kbd className="text-text border border-border px-1 rounded">↓</kbd> to navigate</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
