/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        flow: {
          DEFAULT: '#0B4F87',
          light: '#2E9CDB',
          mist: '#EAF4FB',
          ripple: '#8FE3D9',
        },
        ink: '#0F172A',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 3.5s ease-in-out infinite',
        ripple: 'ripple 2.2s ease-out infinite',
        drift: 'drift 18s linear infinite',
      },
    },
  },
  plugins: [],
};
