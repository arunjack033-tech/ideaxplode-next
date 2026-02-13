import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fff9f4",
        text: "#111111",
        muted: "#6f6f6f",
        accent: "#ff7a59",
        "accent-blue": "#3b7dff",
        "accent-pink": "#e75aa3",
        "accent-purple": "#8b5cf6",
        "accent-orange": "#ff8a5c",
        line: "#d9d9d9",
        soft: "#f7f1eb",
      },
      boxShadow: {
        card: "0 10px 24px rgba(0, 0, 0, 0.06)",
        cardStrong: "0 12px 26px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
