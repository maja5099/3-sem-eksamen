module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        myHeight: "1.875rem",
      },
      fontSize: {
        "h1-desktop": "3rem",
        "h2-desktop": "1.875rem",
        "h3-desktop": "1.375rem",
        "h4-desktop": "1.266rem",
        "h5-desktop": "1.156rem",
        "h6-desktop": "1.125rem",
        "p-focus-desktop": "1.0625rem",
        "p-desktop": "1rem",

        "h1-mobil": "2.375rem",
        "h2-mobil": "1.5625rem",
        "h3-mobil": "1.266rem",
        "h4-mobil": "1.125rem",
        "h5-mobil": "1.0625rem",
        "h6-mobil": "1rem",
        "p-focus-mobil": "0.9375rem",
        "p-mobil": "0.889rem",
      },
    },
    colors: {
      color1: "#EDE9E4",
      color2: "#EFE4D4",
      color3: "#BFAE98",
      color4: "#6E5039",
      color4Hover: "#856145",
      color5: "#342213",
      color5Hover: "#4C311C",
      color6: "#425944",
      color6Hover: "#506C52",
      "cta-background-color": "#425944",
      "button-cta-background-color": "#425944",
    },

    fontFamily: {
      roboto: "'Roboto', sans-serif",
      playfair: "'Playfair Display', serif",
    },
    backgroundImage: {
      "coffee-bean-bg": "url('/img/coffee_bg.png')",
    },
    backgroundOpacity: {
      10: "0.1",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
