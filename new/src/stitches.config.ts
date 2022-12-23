import { createStitches, createTheme, globalCss } from "@stitches/react";

// Default theme color variables
export const { css, styled } = createStitches({
  theme: {
    colors: {
      foreground: "rgba(0,0,0,1)",
      background: "rgba(255,255,255,1)",
      toggleBase: "rgba(0,0,0,0.05)",
      toggleStage: "rgba(0,0,0,0.05)",
      toggleSelect: "rgba(0,0,0,0.1)",
      toggleCheckedBase: "rgba(0,0,0,1)",
      toggleCheckedStage: "rgba(255,255,255,0.2)",
      toggleCheckedSelect: "rgba(255,255,255,0.25)",
      highlight: "lavender"
    },
  },
});

// Dark theme color variables
export const dark = createTheme({
  colors: {
    foreground: "rgba(255,255,255,0.9)",
    background: "rgba(0,0,0,1)",
    toggleBase: "rgba(255,255,255,0.2)",
    toggleStage: "rgba(255,255,255,0.05)",
    toggleSelect: "rgba(255,255,255,0.1)",
    toggleCheckedBase: "rgba(255,255,255,1)",
    toggleCheckedStage: "rgba(0,0,0,0.1)",
    toggleCheckedSelect: "rgba(0,0,0,0.2)",
    highlight: "mediumpurple"
  },
});

// Set the system font
export const font = globalCss({
  "@font-face": [
    /* latin-ext */
    {
      fontFamily: 'Inter',
      fontWeight: "700",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2')"
    },
    /* latin */
    {
      fontFamily: 'Inter',
      fontWeight: "700",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2')",
    },

    /* latin-ext */
    {
      fontFamily: 'Inter',
      fontWeight: "300",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2')"
    },

    /* latin */
    {
      fontFamily: 'Inter',
      fontWeight: "300",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');"
    }
  ],
});
