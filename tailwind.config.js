module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        colors: {
          "primary": '#0370DD',
          "secondary": '#302B27',
          "red": '#FF5630',
        
        },
        fontFamily: {
          'manrope': 'Manrope',
        }
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
