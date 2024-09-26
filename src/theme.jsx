// src/theme.js
export const customTheme = {
  colorScheme: "light",
  fontFamily: "Arial, sans-serif",
  colors: {
    colorPrimary: ["#54BD95"], // You can define a range of shades here
  },
  components: {
    Button: {
      styles: (theme) => ({
        root: {
          "&:hover": {
            backgroundColor: theme.colors.blue[7],
          },
          "&:focus": {
            outline: "none",
          },
        },
      }),
    },
  },
};
