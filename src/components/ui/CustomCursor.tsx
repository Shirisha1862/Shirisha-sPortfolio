import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only run on desktop with pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('a'))) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[99] rounded-full transition-transform duration-100 ease-out hidden lg:block ${
        isHovered
          ? 'w-12 h-12 -ml-6 -mt-6 bg-accent/15 border border-accent/40 shadow-glow-sm scale-110'
          : 'w-6 h-6 -ml-3 -mt-3 bg-accent/20 border border-accent/30 blur-[2px]'
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    />
  );
}
