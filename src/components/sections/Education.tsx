import { motion } from 'framer-motion';
import { educationList } from '../../data/profile';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-surface/30 relative overflow-hidden border-t border-border/40">
      {/* Glow effect background */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="section-wrapper relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase mb-2 block">
            // ACADEMIC BACKGROUND
          </span>
          <h2 className="font-mono text-3xl sm:text-5xl font-bold text-text tracking-tight mb-4">
            Education <span className="text-accent text-glow">& Qualifications</span>
          </h2>
          <p className="text-text-2 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Academic foundations, computer science specialization, and engineering coursework.
          </p>
        </div>

        {/* Vertical Neon Timeline */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-dashed border-accent/40 space-y-12">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Glowing Node Dot Beacon on the Neon Line */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-base border border-accent flex items-center justify-center shadow-glow-sm group-hover:scale-125 transition-transform duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              </div>

              {/* Education Card */}
              <div className="bg-[#0D1117] border border-border/80 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-accent/40 transition-all duration-300">
                {/* Header bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent">
                    {edu.period}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    📍 {edu.location}
                  </span>
                </div>

                {/* Degree & Field */}
                <h3 className="font-mono text-xl sm:text-2xl font-bold text-text mb-1">
                  {edu.degree}
                </h3>
                <h4 className="font-mono text-sm font-semibold text-accent-alt mb-4">
                  {edu.field}
                </h4>

                {/* Institution Name */}
                <div className="flex items-center gap-2 mb-6 text-sm font-sans font-medium text-text-2">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <span>{edu.institution}</span>
                </div>

                {/* Coursework & Highlights */}
                <div className="bg-base/60 border border-border/60 rounded-xl p-4 space-y-2">
                  <span className="font-mono text-[10px] font-bold text-muted uppercase tracking-widest block mb-1">
                    KEY HIGHLIGHTS & SPECIALIZATIONS
                  </span>
                  <ul className="space-y-1.5">
                    {edu.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-text-2">
                        <span className="text-accent font-mono mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
