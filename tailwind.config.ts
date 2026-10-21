import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#062232",
        brand: { orange: "#F57538", teal: "#3DDBC2" },
      },
      backgroundImage: {
        brand: "linear-gradient(90deg, #F57538, #3DDBC2)",
        "brand-diag": "linear-gradient(135deg, #F57538, #3DDBC2)",
      },
      fontFamily: { display: ["var(--font-display)"], body: ["var(--font-body)"] },
    },
  },
  plugins: [],
};
export default config;
