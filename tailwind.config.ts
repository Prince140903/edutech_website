import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ice: '#F7FAFF',
        pearl: '#EEF4FF',
        navy: '#0B1F4D',
        royal: '#3B82F6',
        gold: '#E7B94C',
        goldsoft: '#F3D27A',
        ink: '#101828',
        muted: '#667085',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.18), transparent 60%)',
        'hero-gradient':
          'linear-gradient(135deg, #F7FAFF 0%, #EEF4FF 40%, #DCE9FF 100%)',
        'gold-gradient':
          'linear-gradient(135deg, #E7B94C 0%, #F3D27A 100%)',
        'royal-gradient':
          'linear-gradient(135deg, #0B1F4D 0%, #3B82F6 100%)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(59,130,246,0.12), 0 0 60px rgba(59,130,246,0.06)',
        'glow-lg':
          '0 0 30px rgba(59,130,246,0.25), 0 0 80px rgba(59,130,246,0.12)',
        soft: '0 10px 40px -10px rgba(11,31,77,0.12)',
        gold: '0 0 30px rgba(231,185,76,0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow:
              '0 0 20px rgba(59,130,246,0.12), 0 0 60px rgba(59,130,246,0.06)',
          },
          '50%': {
            boxShadow:
              '0 0 35px rgba(59,130,246,0.28), 0 0 90px rgba(59,130,246,0.14)',
          },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'floatSlow 6.5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4.5s ease-in-out infinite',
        'float-glow': 'float 5s ease-in-out infinite, glowPulse 4.5s ease-in-out infinite',
        blob: 'blob 14s ease-in-out infinite',
        'blob-slow': 'blob 22s ease-in-out infinite',
        shimmer: 'shimmer 2.2s linear infinite',
        'spin-slow': 'spinSlow 12s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
    },
  },
  plugins: [],
};

export default config;
