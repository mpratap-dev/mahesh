module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        dark: '#222',
        white: '#fff',
        primary: '#4c51bf'
      },
      screens: {
        light: {
          raw: "(prefers-color-scheme: light)"
        },
        dark: {
          raw: "(prefers-color-scheme: dark)"
        }
      }
    }
  },
  plugins: [
    function ({
      addBase,
      config
    }) {
      addBase({
        body: {
          color: config("theme.colors.dark"),
          backgroundColor: config("theme.colors.white")
        },
        "@screen dark": {
          body: {
            color: config("theme.colors.white"),
            backgroundColor: config("theme.colors.dark")
          }
        }
      });
    }
  ],
  variants: {},
}