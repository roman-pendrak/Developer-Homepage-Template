/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        ping: "ping 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
