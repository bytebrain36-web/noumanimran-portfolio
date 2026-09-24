/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05070b',
          surface: '#0b0f19',
          elevated: '#111726',
          border: 'rgba(255, 255, 255, 0.08)',
          green: {
            DEFAULT: '#00ff66',
            hover: '#1aff7a',
            dim: 'rgba(0, 255, 102, 0.12)',
            glow: 'rgba(0, 255, 102, 0.35)',
          },
          cyan: {
            DEFAULT: '#00f0ff',
            hover: '#33f3ff',
            dim: 'rgba(0, 240, 255, 0.12)',
            glow: 'rgba(0, 240, 255, 0.35)',
          },
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'cyber-sm': '0 0 12px rgba(0, 255, 102, 0.15)',
        'cyber-md': '0 0 24px rgba(0, 255, 102, 0.22)',
        'cyber-lg': '0 0 40px rgba(0, 255, 102, 0.30)',
        'cyan-sm': '0 0 12px rgba(0, 240, 255, 0.15)',
        'cyan-md': '0 0 24px rgba(0, 240, 255, 0.22)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
