/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{html,js}"  
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'orange': {
          'main': '#FF5300',
          'light': '#FFB700',
        },
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(45deg, #FF5300, #FFB700)',
        'gradient-white': 'linear-gradient(45deg, #FFF3E2, #FFFFE2, #FFFFFF)',
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
        'small': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'large': ['1.25rem', { lineHeight: '1.75rem' }],
        'title': ['1.5rem', { lineHeight: '2rem' }],
        'heading': ['2rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        'tight': '0.5rem',
        'base': '1rem',
        'relaxed': '1.5rem',
        'loose': '2rem',
      },
      borderRadius: {
        'brand': '0.375rem',
      },
    },
  },
  // Define custom plugins for Tailwind CSS
  plugins: [
    // Custom plugin function to add new utility classes
    function({ addUtilities }) {
      // Define new utility classes    
      const newUtilities = {
        // Custom class for title style
        '.text-style-title': {
          // fontSize in px
          fontSize: '40px',
          // lineHeight = space between lines
          lineHeight: '1', // 1 =  lineHeight to fontSize ratio (40px)
          fontWeight: '900',
          fontFamily: 'Nunito, sans-serif',
          // the background image or color will be clipped to the text itself, allowing the background to show through the text (if the text color is set to transparent)
          backgroundClip: 'text', // Other Values:
// border-box: Clips the background to the border box.
// padding-box: Clips the background to the padding box.
// content-box: Clips the background to the content box. 
          backgroundImage: 'linear-gradient(45deg, #FF5300, #FFB700)',
          textAlign: 'center',  
          // text color  
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
          fontFamily: 'Poppins',
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

// Explanation of module.exports:
// In Node.js, module.exports is used to define what a module exports and makes available for other files to import.
// Here, it's exporting the entire Tailwind configuration object.