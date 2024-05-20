import { defineConfig, defineGlobalStyles, defineTextStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  h1: {
    fontSize: "40px",
    lineHeight: "1",
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: "cal",
    fontWeight: "semibold",
  },
  body: {
    fontFamily: "cal",
    backgroundColor: "background",
  },
});

const textStyles = defineTextStyles({
  body: {
    description: "The body text style",
    value: {
      fontFamily: "figtree",
      fontWeight: "600",
      fontSize: "16px",
    }
  }
});

export default defineConfig({
  globalCss,
  presets: ["@qotum/panda-preset"],
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      textStyles,
      tokens: {
        fonts: {
          figtree: {
            value: "-apple-system, var(--font-figtree-sans)",
          },
          cal: {
            value: "var(--font-cal-sans), sans-serif",
          },
        },
        colors: {
          primary: {
            value: "#3D63DD",
          },
          background: {
            value: "#F5F8FB",
          },
          card: {
            background: {
              value: "#FFFFFF",
            },
            border: {
              value: "rgba(187, 197, 212, 0.50)",
            }
          },
          input: {
            border: {
              value: "rgba(187, 197, 212, 0.50)",
            },
            placeholder: {
              color: {
                value: "#BBC5D4",
              }
            },
          },
          button: {
            border: {
              primary: {
                value: "rgba(187, 197, 212, 0.50)",
              },
              secondary: {
                value: "#3D63DD",
              },
            },
            background: {
              primary: {
                value: "#FFFFFF",
              },
              secondary: {
                value: "#3D63DD",
              },
            },
            text: {
              primary: {
                value: "#0F0F0F",
              },
              secondary: {
                value: "#FFFFFF",
              },
            },
          },
          pure: {
            grey: {
              value: "#BBC5D4",
            }
          }
        }
      }
    },
  },
  outdir: "styled-system",
});
