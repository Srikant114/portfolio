/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#FF651C",
          // secondary: "#ec4899",
          // accent: "#212121",
          // neutral: "#9ca3af",
          // "base-100": "#FFFFFF",
          // info: "#3ABFF8",
          // success: "#36D399",
          // warning: "#FBBD23",
          // error: "#f87272",
          primary: "#00b0ff",
          secondary: "#af3700",
          accent: "#0000ff",
          neutral: "#999",
          "base-100": "#1c2323",
          info: "#00d6ff",
          success: "#6ca300",
          warning: "#ba6100",
          error: "#c81e44",
        },
      },
    ],
  },
};
