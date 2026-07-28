import { motion } from 'framer-motion';
import { personal } from '../../data/profile';

const stats = [
  { label: 'Core Focus', value: 'Full Stack & AI' },
  { label: 'Tech Stack', value: '20+ Technologies' },
  { label: 'Problem Solving', value: 'DSA & Algorithms' },
  { label: 'Code Quality', value: 'Clean & Scalable' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface/50 relative border-t border-border/40">
      <div className="section-wrapper">
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase mb-2 block">
          
          </span>
          <h2 className="font-mono text-3xl sm:text-5xl font-bold text-text tracking-tight">
            Driven by curiosity, <span className="text-accent text-glow">built on precision.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Code Terminal / System Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0D1117] border border-border/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="font-mono text-xs text-muted">shirisha@dev-workstation:~</span>
            </div>

            {/* Code / Bio Lines */}
            <div className="font-mono text-xs sm:text-sm space-y-3 leading-relaxed">
              <p className="text-muted">
                <span className="text-accent">const</span> developer = &#123;
              </p>
              <p className="pl-4 text-text-2">
                name: <span className="text-accent-alt">"{personal.name}"</span>,
              </p>
              <p className="pl-4 text-text-2">
                role: <span className="text-accent-alt">"{personal.title}"</span>,
              </p>
              <p className="pl-4 text-text-2">
                passions: [<span className="text-accent-alt">"Scalable Web Apps"</span>, <span className="text-accent-alt">"Data Structures & Algorithms"</span>, <span className="text-accent-alt">"AI Innovations"</span>],
              </p>
              <p className="pl-4 text-text-2">
                location: <span className="text-accent-alt">"{personal.location}"</span>,
              </p>
              <p className="text-muted">&#125;;</p>

              <div className="pt-4 border-t border-border/40 text-text-2 space-y-3 font-sans text-sm sm:text-base">
                <p>
                  As a Software Engineer and Full Stack Developer, I specialize in crafting robust, high-performance web applications with seamless frontend user experiences and architecturally sound backend microservices.
                </p>
                <p>
                  I thrive on solving complex computational challenges and leveraging modern AI-assisted engineering tools like Claude Code and GitHub Copilot to optimize software delivery pipelines.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Engineering Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#0D1117]/80 border border-border/80 rounded-2xl p-5 hover:border-accent/40 transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <span className="font-mono text-xs text-muted mb-2">{stat.label}</span>
                <span className="font-mono text-base sm:text-lg font-bold text-accent text-glow">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
