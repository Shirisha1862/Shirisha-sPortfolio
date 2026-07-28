/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base backgrounds
        'base':       '#050A0A',
        'surface':    '#0D1117',
        'surface-2':  '#111827',
        'border':     '#1E293B',
        'border-2':   '#2D3748',

        // Accent palette
        'accent':     '#00FF88',   // neon green — primary
        'accent-alt': '#00D4FF',   // cyan — secondary
        'accent-dim': '#00CC6F',   // slightly dimmer green for hover states

        // Text
        'text':       '#E2E8F0',
        'text-2':     '#94A3B8',
        'muted':      '#64748B',
      },

      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'ui-monospace', 'monospace'],
      },

      fontSize: {
        'display':  ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading':  ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subhead':  ['clamp(1.125rem, 2vw, 1.375rem)', { lineHeight: '1.4' }],
      },

      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #00FF88 0%, #00D4FF 100%)',
        'gradient-dark':   'linear-gradient(180deg, #050A0A 0%, #0D1117 100%)',
        'glow-green':      'radial-gradient(ellipse at center, rgba(0,255,136,0.15) 0%, transparent 70%)',
        'glow-cyan':       'radial-gradient(ellipse at center, rgba(0,212,255,0.15) 0%, transparent 70%)',
        'grid-pattern':    `linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)`,
      },

      backgroundSize: {
        'grid': '60px 60px',
      },

      boxShadow: {
        'glow-sm':   '0 0 12px rgba(0,255,136,0.25)',
        'glow':      '0 0 24px rgba(0,255,136,0.35)',
        'glow-lg':   '0 0 48px rgba(0,255,136,0.25)',
        'glow-cyan': '0 0 24px rgba(0,212,255,0.35)',
        'card':      '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover':'0 8px 40px rgba(0,0,0,0.6)',
      },

      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 12px rgba(0,255,136,0.25)' },
          '50%':       { boxShadow: '0 0 32px rgba(0,255,136,0.55)' },
        },
        'slide-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },

      animation: {
        'fade-up':        'fade-up 0.6s ease-out forwards',
        'fade-in':        'fade-in 0.5s ease-out forwards',
        'blink':          'blink 1s step-end infinite',
        'glow-pulse':     'glow-pulse 2s ease-in-out infinite',
        'slide-in-left':  'slide-in-left 0.6s ease-out forwards',
        'float':          'float 3s ease-in-out infinite',
      },

      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}
