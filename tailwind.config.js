/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RivieraNightsTrialExtraLight: ["RivieraNightsTrialExtraLight"],
        RivieraNightsBlack: [" RivieraNightsTrialblack"],
        RivieraNightsBold: ["RivieraNightsTrialBold"],
        RivieraNightsLight: ["RivieraNightsTrialLight "],
        RivieraNightsMedium: ["RivieraNightsTrialMedium"],
        RivieraNightsRegular: ["RivieraNightsTrialRegular"],
        plusJarka: ["Plus-Jakart-Sans", "sans-serif"],
      },
      screens: {
        xs: "500px",
        xl: "1440px",
      },
      colors: {
        melonseed: "#32281f",
        darkGray: "#a8a9ad4d",
      },
    },
  },
  plugins: [],
};