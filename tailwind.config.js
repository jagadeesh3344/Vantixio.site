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
        glacier: {
          shadow: '#253B54',
          navy: '#314A66',
          blue: '#415C7A',
          steel: '#506A89',
          mid: '#597594',
          ice: '#819AB8',
          silver: '#A1B6CF',
          white: '#D0DBE9',
          soft: '#F4F7FC',
        },
        vantix: {
          void: '#253B54',
          space: '#314A66',
          abyss: '#415C7A',
          slate: '#506A89',
          surface: 'rgba(49, 74, 102, 0.45)',
          'surface-hover': 'rgba(80, 106, 137, 0.65)',
          cyan: '#A1B6CF',
          'cyan-glow': '#D0DBE9',
          'cyan-light': '#D0DBE9',
          'ice-blue': '#819AB8',
          'royal-blue': '#415C7A',
          'deep-cobalt': '#253B54',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'Satoshi', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        md: '12px',
        lg: '20px',
        xl: '32px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
}
