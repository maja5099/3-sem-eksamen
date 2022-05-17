module.exports = {
  
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        'myHeight': '1.875rem',
      },
      fontSize: {
        'h1': '5.313rem',
        'h2': '3.125rem',
        'h3': '2.5rem',
        'h4': '1.875rem',
        'h5': '1.563rem',
        'h6': '1.25rem',
        'p-focus': '1.125rem',
        'p': '1rem',
      },
    },
    colors: {
      color1: "#EDE9E4",
      color2: "#EFE4D4",
      color3: "#BFAE98",
      color4: "#6E5039",
      color5: "#342213",
      color5Hover: "#9F7656",
      color6: "#425944",
      color6Hover: "#618363",
    },
    fontFamily: {
      'roboto': "'Roboto', sans-serif",
      'playfair': "'Playfair Display', serif",
    },
    backgroundImage: {
      'coffee-bean-bg': "url('/img/coffee_bg.png')",
    },
    backgroundOpacity: {
      '10': '0.1',
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
