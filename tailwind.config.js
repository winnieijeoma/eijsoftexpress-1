module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "btn-color": "#61C2E1"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
