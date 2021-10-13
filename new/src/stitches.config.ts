import { createStitches, createTheme, globalCss } from '@stitches/react';

// Default theme color variables
export const { css, styled } = createStitches({
  theme: {
    colors: {
      foreground: 'rgba(0,0,0,1)',
      background: 'rgba(255,255,255,1)',
      toggleBase: 'rgba(0,0,0,0.05)',
      toggleStage: 'rgba(0,0,0,0.05)',
      toggleSelect: 'rgba(0,0,0,0.1)',
      toggleCheckedBase: 'rgba(0,0,0,1)',
      toggleCheckedStage: 'rgba(255,255,255,0.2)',
      toggleCheckedSelect: 'rgba(255,255,255,0.25)',
    },
  },
});

// Dark theme color variables
export const dark = createTheme({
  colors: {
    foreground: 'rgba(255,255,255,1)',
    background: 'rgba(0,0,0,1)',
    toggleBase: 'rgba(255,255,255,0.2)',
    toggleStage: 'rgba(255,255,255,0.05)',
    toggleSelect: 'rgba(255,255,255,0.1)',
    toggleCheckedBase: 'rgba(255,255,255,1)',
    toggleCheckedStage: 'rgba(0,0,0,0.1)',
    toggleCheckedSelect: 'rgba(0,0,0,0.2)',
  },
});

// Set the system font
export const font = globalCss({
  '@font-face': [
    {
      fontFamily: "inter",
      fontWeight: "700",
      src: "url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2')",
    },
    {
      fontFamily: "inter",
      fontWeight: "700",
      src: "url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2')",
    },
    {
      fontFamily: "inter",
      fontWeight: "300",
      src: "url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2')",
    },
  ],
});