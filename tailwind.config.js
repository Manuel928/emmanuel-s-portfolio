// tailwind.config.js
export const theme = {
  extend: {
    keyframes: {
      typing: {
        "0%": { width: "0" },
        "100%": { width: "100%" },
      },
      blink: {
        "50%": { borderColor: "transparent" },
        "100%": { borderColor: "black" },
      },
    },
    animation: {
      typing: "typing 3s steps(20) infinite alternate",
      blink: "blink 0.7s step-end infinite",
    },
  },
};
export const plugins = [];
