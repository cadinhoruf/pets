  import type { Config } from "tailwindcss"

  const config = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "#e6e6e6",
          input: "#e6e6e6",
          ring: "#0a0a0a",
          background: "#ffffff",
          foreground: "#0a0a0a",
          primary: {
            DEFAULT: "#004aad",
            foreground: "#fafafa",
          },
          secondary: {
            DEFAULT: "#f7f7f7",
            foreground: "#004aad",
          },
          destructive: {
            DEFAULT: "#ff3333",
            foreground: "#fafafa",
          },
          muted: {
            DEFAULT: "#f7f7f7",
            foreground: "#757575",
          },
          accent: {
            DEFAULT: "#f7f7f7",
            foreground: "#004aad",
          },
          popover: {
            DEFAULT: "#ffffff",
            foreground: "#0a0a0a",
          },
          card: {
            DEFAULT: "#ffffff",
            foreground: "#0a0a0a",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  } satisfies Config

  export default config
