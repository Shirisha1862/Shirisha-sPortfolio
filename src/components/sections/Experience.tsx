import { useState } from 'react';
import { motion } from 'framer-motion';
import { quests } from '../../data/profile';

export default function Experience() {
  const [activeQuestId, setActiveQuestId] = useState(quests[0]?.id || 'quest-1');
  const activeQuest = quests.find((q) => q.id === activeQuestId) || quests[0];

  return (
    <section id="experience" className="py-24 bg-base relative overflow-hidden border-t border-border/40">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="section-wrapper">
        {/* Section Header (Exact Screenshot 2 styling!) */}
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl sm:text-5xl font-bold text-text tracking-tight mb-4">
            Professional <span className="text-accent text-glow">Journey</span>
          </h2>
        </div>

        {/* Quest Map + Quest Directive Card Grid (Screenshot 2!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Waypoint Map */}
          <div className="lg:col-span-5 bg-[#0D1117]/90 border border-border/80 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
            {/* Coordinates overlay header */}
            <div className="flex items-center justify-between font-mono text-[10px] text-muted mb-6">
              <span>LAT: 17.3850° N</span>
              <span>LON: 78.4867° E</span>
            </div>

            {/* Waypoint Path Interactive Container */}
            <div className="relative py-4 pl-6 border-l-2 border-dashed border-accent/30 space-y-8">
              {quests.map((quest, index) => {
                const isActive = quest.id === activeQuestId;
                return (
                  <div
                    key={quest.id}
                    onClick={() => setActiveQuestId(quest.id)}
                    className="relative flex items-center gap-4 cursor-pointer group select-none"
                  >
                    {/* Node Dot Beacon */}
                    <div
                      className={`absolute -left-[31px] w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-accent text-base border-accent shadow-glow scale-125'
                          : 'bg-base border-border text-muted group-hover:border-accent'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-base' : 'bg-accent/60'}`} />
                    </div>

                    {/* Quest Button Pill */}
                    <div
                      className={`px-4 py-2.5 rounded-xl font-mono text-xs transition-all duration-300 flex items-center justify-between flex-1 ${
                        isActive
                          ? 'bg-accent/20 border border-accent/40 text-accent font-bold shadow-glow-sm'
                          : 'bg-surface-2/60 border border-border/60 text-text-2 group-hover:border-border group-hover:text-text'
                      }`}
                    >
                      <span>● Quest 0{index + 1}</span>
                      <span className="text-[10px] text-muted">{quest.company}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Mission Intel Card */}
          <motion.div
            key={activeQuest.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-[#0D1117] border border-border/90 rounded-2xl p-6 sm:p-8 shadow-2xl relative"
          >
            {/* Top Bar: Status Badge + Period Pill */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent tracking-widest uppercase">
                {activeQuest.status}
              </span>
              <span className="font-mono text-xs font-semibold px-3.5 py-1.5 rounded-full bg-surface-2 border border-border text-accent-alt">
                {activeQuest.period}
              </span>
            </div>

            {/* Role Title & Company */}
            <h3 className="font-mono text-2xl sm:text-3xl font-bold text-text mb-1">
              {activeQuest.title}
            </h3>
            <p className="font-mono text-sm font-semibold text-accent mb-6 flex items-center gap-1.5">
              {activeQuest.company}
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </p>

            {/* Quest Directive Box */}
            <div className="bg-base/60 border border-border/70 rounded-xl p-5 mb-6">
              <span className="font-mono text-[10px] font-bold text-muted uppercase tracking-widest block mb-2">
                🛡️ QUEST DIRECTIVE
              </span>
              <p className="text-text-2 text-sm sm:text-base leading-relaxed font-sans mb-4">
                {activeQuest.directive}
              </p>

              {/* Highlights List */}
              <ul className="space-y-2">
                {activeQuest.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-2">
                    <span className="text-accent font-mono mt-0.5">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <span className="font-mono text-[10px] text-muted tracking-wider block mb-3 uppercase">
                // TECHNOLOGIES DEPLOYED
              </span>
              <div className="flex flex-wrap gap-2">
                {activeQuest.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1 rounded-lg bg-surface border border-border text-text-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
