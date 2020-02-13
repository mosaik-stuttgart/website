//let defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
  theme: {
    extend: {
      colors: {
        black: '#010001'
      },
      width: {
        '28': '7rem'
      },
      height: {
        '14': '3.5rem',
        '72': '18rem',
        '100': '25rem',
        '114': '28.5rem',
        'square': '94vw'
      },
      maxWidth: {
        'base': '31rem',
      },
      maxHeight: {
        'xl': '36rem'
      },
    },
    fontFamily: {
      sans: [
        'Basier Circle',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Playfair Display',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4xxl': '2.6rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem'
    },
  },
  variants: {
    cursor: ['responsive', 'hover', 'focus']
  }
}
