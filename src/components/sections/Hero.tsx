import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personal, links } from '../../data/profile';

const roles = [
  "Full Stack Developer",
  "Problem Solver",
  "AI Enthusiast"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect loop
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText !== currentRole) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 90);
    } else if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText !== '') {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 45);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-base"
    >
      {/* Background Image & Glowing Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={personal.bgUrl}
          alt="Atmospheric Background"
          className="w-full h-full object-cover object-center opacity-30 blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A0A] via-[#050A0A]/90 to-[#050A0A]/95" />
        <div className="absolute inset-0 bg-grid opacity-60" />
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent-alt/10 blur-[120px] pointer-events-none" />
      </div>

      <div className="section-wrapper relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start"
        >

          {/* Typewriter Role Title */}
          <div className="min-h-[140px] sm:min-h-[180px] flex flex-col justify-center mb-4 select-none">
            <span className="font-mono text-sm sm:text-base text-muted uppercase tracking-widest block mb-2">
              //HI, MY NAME IS SHIRISHA MANGALI
            </span>
            <h1 className="font-mono font-bold tracking-tight text-4xl sm:text-6xl lg:text-7xl leading-none text-text">
             <br className="hidden sm:inline" />
              <span className="text-accent text-glow">
                {displayText}
              </span>
              <span className="text-accent animate-blink">|</span>
            </h1>
          </div>

          {/* Bio tagline */}
          <p className="text-text-2 text-base sm:text-lg max-w-xl mb-8 leading-relaxed font-sans">
            {personal.bio}
          </p>

          {/* Action Buttons Bar */}
          <div className="flex flex-wrap items-center gap-4">
            {/* View Resume Button */}
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-drip group"
            >
              <svg
                className="w-5 h-5 text-base transition-transform group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>View Resume</span>
            </a>

            {/* Social Icon Buttons */}
            <div className="flex items-center gap-2.5">
              {/* Email */}
              <a
                href={links.email}
                className="w-12 h-12 rounded-2xl bg-surface/90 border border-border/90 flex items-center justify-center text-text-2 hover:text-accent hover:border-accent/50 hover:shadow-glow-sm hover:scale-105 transition-all duration-200"
                title="Send Email"
                aria-label="Email Shirisha"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-surface/90 border border-border/90 flex items-center justify-center text-text-2 hover:text-accent hover:border-accent/50 hover:shadow-glow-sm hover:scale-105 transition-all duration-200"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-surface/90 border border-border/90 flex items-center justify-center text-text-2 hover:text-accent hover:border-accent/50 hover:shadow-glow-sm hover:scale-105 transition-all duration-200"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* LeetCode */}
              {/* <a
                href={links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-surface/90 border border-border/90 flex items-center justify-center font-mono font-bold text-xs text-text-2 hover:text-accent hover:border-accent/50 hover:shadow-glow-sm hover:scale-105 transition-all duration-200"
                title="LeetCode Profile"
                aria-label="LeetCode Profile"
              >
                LC
              </a> */}
            </div>
          </div>
        </motion.div>

        {/* Right Avatar Card Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-border/80 bg-surface-2/60 shadow-2xl p-4 flex flex-col justify-between group hover:border-accent/40 transition-all duration-500">
            {/* Watermark text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
              <span className="font-mono font-bold text-9xl text-white/5 tracking-tighter">
                AI
              </span>
            </div>
            {/* Avatar Character Image */}
            <div className="relative z-10 flex-1 my-3 rounded-2xl overflow-hidden border border-border/50 bg-base/40">
              <img
                src={personal.avatarUrl}
                alt={personal.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
