import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Earth tone palette matching dress code
        earth: {
          brown: '#5D4037',
          chocolate: '#6D4C41',
          tan: '#8B7355',
          caramel: '#A67B5B',
          sand: '#C4A77D',
          beige: '#D4C4A8',
          cream: '#E8DCC4',
          ivory: '#FAF8F5',
          gold: '#B8860B',
          'gold-light': '#D4AF37',
        },
        // Background colors
        brand: {
          dark: '#2C2416',
          medium: '#3D3225',
          light: '#4E4233',
        }
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        script: ['var(--font-great-vibes)', 'cursive'],
        body: ['var(--font-lato)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(135deg, #5D4037 0%, #8B7355 50%, #D4AF37 100%)',
        'gradient-gold': 'linear-gradient(135deg, #B8860B 0%, #D4AF37 100%)',
        'gradient-cream': 'linear-gradient(180deg, #FAF8F5 0%, #E8DCC4 100%)',
        'gradient-earth': 'linear-gradient(180deg, #2C2416 0%, #3D3225 50%, #2C2416 100%)',
      },
    },
  },
  plugins: [],
}

export default config
