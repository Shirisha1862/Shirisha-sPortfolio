import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  tag?: string;
  title?: string;
}

export default function Section({ id, className = '', children, tag, title }: SectionProps) {
  const { ref, isVisible } = useScrollReveal();
  const prefersReduced = useReducedMotion();

  const variants: any = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id={id} className={`py-24 md:py-32 scroll-mt-16 ${className}`}>
      <div className="section-wrapper">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={variants}
        >
          {(tag || title) && (
            <div className="mb-12">
              {tag && <span className="section-tag">{tag}</span>}
              {title && <h2 className="section-heading">{title}</h2>}
            </div>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
