import { createTheme } from "@mui/material/styles";
import { getPalette } from "./palette";
import { typography } from "./typography";

export const createAppTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: getPalette(mode),
    typography,
    shape: {
      borderRadius: 12, // Apple/Vercel standard
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "9999px", // Pill style
            padding: "8px 20px",
            boxShadow: "none",
            textTransform: "none",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "16px",
            backgroundImage: "none", // Remove default greyish-white overlay in MUI dark mode
          },
        },
      },
    },
  });
};
