import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Accent color utilities for skill badges
    'text-accent-blue', 'border-accent-blue/30', 'bg-accent-blue/5',
    'text-accent-green', 'border-accent-green/30', 'bg-accent-green/5',
    'text-accent-amber', 'border-accent-amber/30', 'bg-accent-amber/5',
    'text-accent-purple', 'border-accent-purple/30', 'bg-accent-purple/5',
    'text-accent-red', 'border-accent-red/30', 'bg-accent-red/5',
    'text-accent-cyan', 'border-accent-cyan/30', 'bg-accent-cyan/5',
    'text-accent-pink', 'border-accent-pink/30', 'bg-accent-pink/5',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-elevated': 'rgb(var(--color-surface-elevated) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        'accent-blue': 'rgb(var(--color-accent-blue) / <alpha-value>)',
        'accent-green': 'rgb(var(--color-accent-green) / <alpha-value>)',
        'accent-amber': 'rgb(var(--color-accent-amber) / <alpha-value>)',
        'accent-purple': 'rgb(var(--color-accent-purple) / <alpha-value>)',
        'accent-red': 'rgb(var(--color-accent-red) / <alpha-value>)',
        'accent-cyan': 'rgb(var(--color-accent-cyan) / <alpha-value>)',
        'accent-pink': 'rgb(var(--color-accent-pink) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
        sans: ['var(--font-sans)'],
      },
      borderRadius: {
        lg: 'calc(var(--radius) + 2px)',
        md: 'calc(var(--radius) + 0px)',
        sm: 'calc(var(--radius) - 2px)',
      },
    },
  },
  plugins: [],
};

export default config;
