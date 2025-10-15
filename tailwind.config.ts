import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        spidey: {
          red: "#FF1F47",
          deepRed: "#B3001B",
          blue: "#0070F3",
          darkBlue: "#001B44",
          black: "#050505",
          gray: "#1C1F24"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Rajdhani", "system-ui", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 112, 243, 0.35)",
        redGlow: "0 0 25px rgba(255, 31, 71, 0.35)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
};

export default config;
