/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05070f',
          panel: '#0a1020',
          edge: '#1a2a48',
          neon: '#29c4ff',
          violet: '#706dff',
          text: '#d6ecff'
        }
      },
      boxShadow: {
        neon: '0 0 20px rgba(41,196,255,0.35), 0 0 40px rgba(112,109,255,0.2)',
        card: '0 10px 30px rgba(0,0,0,0.35)'
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(41,196,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(41,196,255,0.08) 1px, transparent 1px)'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(41,196,255,0.35)' },
          '50%': { boxShadow: '0 0 24px rgba(112,109,255,0.45)' }
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(300%)' }
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 2.8s ease-in-out infinite',
        scan: 'scan 6s linear infinite'
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
