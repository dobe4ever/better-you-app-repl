  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./pages/**/*.{html,js}"
    ],
    mode: 'jit',
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 20s linear infinite',
          'fade-in': 'fadeIn 0.5s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
        variants: {
          extend: {
            scale: ['hover'],
            boxShadow: ['hover'],
          },
        },
        colors: {
          'orange': {
            'main': '#FF5300',
            'light': '#FFB700',
          },
        },
        backgroundImage: {
          'gradient-blue': 'linear-gradient(45deg, #faae7b, #432371)',
          'gradient-orange': 'linear-gradient(45deg, #f9a13d, #ee7539, #e55136)',
          'gradient-white': 'linear-gradient(45deg, #FFF3E2, #FFFFE2, #FFFFFF)',
          'gradient-tomato': 'linear-gradient(45deg, #ffd78a, #f4762d)',
          'gradient-pink': 'linear-gradient(45deg, #f74985, #46295c, #5355fb)',
          'artistic-home': "url('/src/assets/background.svg')",
        },
        borderColor: {
          'border-gradient-orange': 'linear-gradient(45deg, #FF5300, #FFB700)',
        },
        fontFamily: {
          'nunito': ['Nunito', 'sans-serif'],
          'sans': ['Inter', 'sans-serif'],
          'heading': ['Poppins', 'sans-serif'],
        },
        fontSize: {
          'xs': ['12px', { lineHeight: '16px' }],
          'sm': ['14px', { lineHeight: '20px' }],
          'base': ['16px', { lineHeight: '24px' }],
          'lg': ['18px', { lineHeight: '28px' }],
          'xl': ['20px', { lineHeight: '28px' }],
          '2xl': ['24px', { lineHeight: '32px' }],
          '3xl': ['30px', { lineHeight: '36px' }],
          '4xl': ['36px', { lineHeight: '40px' }],
        },
        spacing: {
          '0': '0px',
          '1': '4px',
          '2': '8px',
          '3': '12px',
          '4': '16px',
          '5': '20px',
          '6': '24px',
          '8': '32px',
          '10': '40px',
          '12': '48px',
          '16': '64px',
          '20': '80px',
          '24': '96px',
        },
        borderRadius: {
          'none': '0',
          'sm': '2px',
          'DEFAULT': '4px',
          'md': '6px',
          'lg': '8px',
          'xl': '12px',
          '2xl': '16px',
          'full': '9999px',
        },
      },
    },
    // Define custom plugins for Tailwind CSS
    plugins: [
      // Custom plugin function to add new utility classes
      function({ addUtilities }) {
        // Define new utility classes
        const newUtilities = {
          '.text-style-title-orange': {
            fontSize: '40px',
            lineHeight: '1', // 1 =  lineHeight to fontSize ratio (40px)
            fontWeight: '900',
            fontFamily: 'Nunito, sans-serif',
            backgroundClip: 'text',
            backgroundImage: 'linear-gradient(45deg, #FF5300, #FFB700)',
            textAlign: 'center',
            color: 'transparent',
          },
          '.text-style-title-white': {
            fontSize: '40px',
            lineHeight: '1', // 1 =  lineHeight to fontSize ratio (40px)
            fontWeight: '900',
            fontFamily: 'Nunito, sans-serif',
            backgroundClip: 'text',
            backgroundImage: 'linear-gradient(45deg, #FFF3E2, #FFFFE2, #FFFFFF)',
            textAlign: 'left',
            color: 'transparent',
          },
          '.text-style-title-yellow': {
            fontSize: '40px',
            lineHeight: '1', // 1 =  lineHeight to fontSize ratio (40px)
            fontWeight: '900',
            fontFamily: 'Nunito, sans-serif',
            backgroundClip: 'text',
            backgroundImage: 'linear-gradient(45deg, #f74985, #973fc0, #46295c)',
            textAlign: 'center',
            color: 'transparent',
          },
          // Custom class for heading style
          '.text-style-heading': {
            fontSize: '2rem',
            lineHeight: '2.5rem',
            fontWeight: '700',
            fontFamily: 'Nunito, sans-serif',
          },
          // Custom class for subheading style
          '.text-style-subheading': {
            fontSize: '1rem',
            lineHeight: '2rem',
            fontWeight: '600',
            fontFamily: 'Nunito',
          },
          // Custom class for base text style
          '.text-style-base': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: '500',
            fontFamily: 'Nunito, sans-serif',
          },
          // Custom class for decor text style
          '.text-style-decor': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: '600',
            fontFamily: 'Poppins, sans-serif',
          },
        }
        // Add the new utility classes to Tailwind, making them responsive and hoverable
        addUtilities(newUtilities, ['responsive', 'hover'])
      }
    ], // Closing the plugins array
  } // Closing the module.exports object
