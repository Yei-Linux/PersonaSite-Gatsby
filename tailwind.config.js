const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  ...defaultTheme,
  theme: {
    flex: {
      ...defaultTheme.flex,
      grow: "0.7 0",
      shrink: "0 1",
      height: "20rem"
    },
    extend: {
      height: {
        xs: "20rem"
      },
      width: {
        80: "25rem",
        90: "30rem",
        "fit": "fit-content"
      },
      minHeight: {
        "screen-80": "80vh"
      }
    }
  }
}