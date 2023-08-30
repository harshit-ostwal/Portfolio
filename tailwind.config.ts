/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      extend: {
          backgroundColor: {
              body: 'var(--bg-primary)',
              cardPrimary: 'var(--card-primary)',
              btnHighlight: 'var(--btn-highlight)',
          },
          colors: {
              highlight: 'var(--text-highlight)',
              primary: 'var(--text-primary)',
              secondary: 'var(--text-secondary)',
              info: 'var(--text-info)',
          },
          borderColor: {
              highlight: 'var(--btn-highlight)',
          },
          keyframes: {
            'fade-in': {
                '0%': {
                    opacity: '0',
                },
                '100%': {
                    opacity: '1',
                },
            },
            'fade-out': {
                '0%': {
                    opacity: '1',
                },
                '100%': {
                    opacity: '0',
                },
            },
            'fade-in-top': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(-50px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)'
                },
            },
            'fade-in-down': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(50px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)'
                },
            },
            'fade-in-right': {
                '0%': {
                    opacity: '0',
                    transform: 'translateX(50px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateX(0)'
                },
            },
            'fade-in-left': {
                '0%': {
                    opacity: '0',
                    transform: 'translateX(-50px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateX(0)'
                },
            }
        },
        animation: {
            'fade-in': 'fade-in 2s ease-out',
            'fade-out': 'fade-out 2s ease-out',
            'fade-in-top': 'fade-in-top 2s ease-out',
            'fade-in-down': 'fade-in-down 2s ease-out',
            'fade-in-right': 'fade-in-right 2s ease-out',
            'fade-in-left': 'fade-in-left 2s ease-out'
        }
      },
  },
  plugins: [],
};
