import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '../../data/profile';

type CategoryFilter = 'All' | 'Live Production' | 'Full Stack' | 'AI & Automation' | 'Algorithms';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: CategoryFilter[] = ['All', 'Live Production', 'Full Stack', 'AI & Automation', 'Algorithms'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory || (selectedCategory === 'Live Production' && p.isLive));

  return (
    <section id="projects" className="py-24 bg-surface/40 relative border-t border-border/40 overflow-hidden">
      {/* Background Neon Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-accent/5 blur-[120px] pointer-events-none -z-10 rounded-full" />
      
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase mb-2 block">
            // FEATURED WORK & LIVE APPLICATIONS
          </span>
          <h2 className="font-mono text-3xl sm:text-5xl font-bold text-text tracking-tight mb-4">
            Engineering <span className="text-accent text-glow">Showcase</span>
          </h2>
          <p className="text-text-2 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Production-ready web applications, intelligent campus software systems, and optimized algorithms deployed live in the cloud.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs px-4 py-2 rounded-xl transition-all duration-300 border ${
                  isActive
                    ? 'bg-accent/15 border-accent text-accent shadow-glow-sm font-semibold'
                    : 'bg-[#0D1117]/80 border-border/60 text-muted hover:text-text hover:border-accent/40'
                }`}
              >
                {cat === 'Live Production' && <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-[#0D1117]/95 border rounded-2xl flex flex-col justify-between hover:shadow-glow-md transition-all duration-300 group overflow-hidden ${
                  project.isLive
                    ? 'border-accent/60 shadow-glow-sm'
                    : 'border-border/80 hover:border-accent/40'
                }`}
              >
                <div>
                  {/* Cyber Browser Topbar Header */}
                  <div className="bg-[#161B22] border-b border-border/60 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block" />
                      <span className="font-mono text-[11px] text-muted/70 ml-2 truncate max-w-[200px] sm:max-w-[280px]">
                        {project.domainUrl || `${project.id}.app`}
                      </span>
                    </div>

                    {project.isLive ? (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        LIVE DEPLOYMENT
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-surface-2 border border-border/60 text-muted">
                        {project.category || 'Engineering'}
                      </span>
                    )}
                  </div>

                  {/* Card Main Body */}
                  <div className="p-6">
                    {/* Visual Media Preview Mockup Frame */}
                    <div className="mb-6 rounded-xl border border-border/60 bg-[#050A0A] overflow-hidden relative group/img aspect-video flex items-center justify-center">
                      {/* Visual Cyber Card Graphic */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-alt/10 opacity-70 group-hover/img:opacity-100 transition-opacity" />
                      
                      {/* Visual Screenshot or Graphic Fallback */}
                      <div className="relative z-10 text-center p-6 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-3 text-accent shadow-glow-sm">
                          {project.isLive ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          )}
                        </div>
                        <span className="font-mono text-xs font-semibold text-text tracking-wide mb-1">
                          {project.title}
                        </span>
                        <span className="font-mono text-[10px] text-muted">
                          {project.role}
                        </span>
                      </div>

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-[#050A0A]/80 backdrop-blur-xs opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="font-mono text-xs font-bold px-4 py-2 rounded-xl bg-accent text-[#050A0A] hover:bg-accent-alt transition-colors shadow-glow-sm"
                        >
                          Inspect System 🔍
                        </button>
                      </div>

                      {/* PLACEHOLDER MEDIA NOTE FOR USER */}
                      {/* PLACEHOLDER MEDIA: replace with real deployment screenshot in public/projects/ */}
                    </div>

                    {/* Project Title & Metrics Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                      <h3 className="font-mono text-xl font-bold text-text group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {project.metrics && (
                      <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-accent/5 border border-accent/20 text-accent font-mono text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {project.metrics}
                      </div>
                    )}

                    {/* Problem Statement Box */}
                    <div className="mb-4 bg-[#161B22]/60 border border-border/40 rounded-xl p-3 text-xs font-mono text-text-2">
                      <span className="text-accent font-bold uppercase tracking-wider text-[10px] block mb-1">
                        // Core Problem Solved:
                      </span>
                      <p className="leading-relaxed font-sans">{project.problem}</p>
                    </div>

                    {/* Description */}
                    <p className="text-text-2 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Tech Stack & Action Links */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-surface-2 border border-border/60 text-muted group-hover:border-accent/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-border/40 pt-4 gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-text-2 hover:text-accent flex items-center gap-1.5 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      Repository ↗
                    </a>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-mono text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all font-semibold ${
                          project.isLive
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-black hover:brightness-110 shadow-glow-sm'
                            : 'bg-accent/10 text-accent hover:bg-accent/20 border border-accent/30'
                        }`}
                      >
                        {project.isLive ? 'Launch Live App ↗' : 'View Demo ↗'}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#0D1117] border border-accent/50 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-glow-lg relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 text-muted hover:text-text font-mono text-sm w-8 h-8 rounded-lg bg-surface-2 flex items-center justify-center"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-accent font-bold px-2.5 py-1 rounded-md bg-accent/10 border border-accent/30">
                  {activeModalProject.role}
                </span>
                {activeModalProject.isLive && (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE PRODUCTION
                  </span>
                )}
              </div>

              <h3 className="font-mono text-2xl font-bold text-text mb-4">
                {activeModalProject.title}
              </h3>

              {activeModalProject.metrics && (
                <p className="font-mono text-xs text-accent-alt mb-4">
                  ⚡ Impact Metric: {activeModalProject.metrics}
                </p>
              )}

              <div className="space-y-4 mb-6 text-sm text-text-2 font-sans">
                <div className="bg-[#161B22] p-4 rounded-xl border border-border/60 font-mono">
                  <span className="text-accent text-xs font-bold uppercase block mb-1">// Problem Statement:</span>
                  <p className="text-text font-sans text-xs sm:text-sm">{activeModalProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold text-text uppercase tracking-wider mb-2">// Architecture & Solution</h4>
                  <p className="leading-relaxed">{activeModalProject.description}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold text-text uppercase tracking-wider mb-2">// Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.techStack.map(t => (
                      <span key={t} className="font-mono text-xs px-3 py-1 rounded-md bg-surface-2 border border-border text-text">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-border/40 pt-4">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs px-4 py-2 rounded-xl bg-surface-2 border border-border text-text hover:border-accent"
                >
                  GitHub Source ↗
                </a>
                {activeModalProject.demoUrl && (
                  <a
                    href={activeModalProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs px-5 py-2 rounded-xl bg-accent text-[#050A0A] font-bold hover:bg-accent-alt shadow-glow-sm"
                  >
                    Open Live Application ↗
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
