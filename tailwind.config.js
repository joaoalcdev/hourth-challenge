module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui',],
        'serif': ['ui-serif', 'Georgia',],
        'mono': ['ui-monospace', 'SFMono-Regular',],
        'display': ['Oswald',],
        'body': ['"Open Sans"',],
        'dosis': ['"Dosis"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}