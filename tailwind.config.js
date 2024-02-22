/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        custom: "1fr 30%",
      },
      // Blog_Styles
      fontFamily: {
        Agency_bold: ["Agency_Bold", "sans-serif"],
        Agency_medium: ["Agency_Medium", "sans-serif"],
        Agency_light: ["Agency_Light", "sans-serif"],
        Agency_Extended: ["Agency_Extended", "sans-serif"],
      },
      background: {
        light_grey: "#F6F5F4",
      },
      maxWidth: {
        custom_1: "1004px",
        custom_2: "804px",
      },
      boxShadow: {
        custom:
          "0 0.3259259164px 0.7333333492px 0 rgba(0,0,0,.12), 0 1.5407407284px 2.8666665554px 0 rgba(0,0,0,.07), 0 4px 9px 0 rgba(0,0,0,.05)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        text_dark_1: "rgb(5, 5, 5)",
        text_grey_1: "rgba(255, 255, 255, 0.7)",
        light_grey: "#F6F5F4",
        green_1: "#1A8917",

        text_blue_1: "#0a85d1",
        text_dark_2: "rgb(18, 18, 18)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
