import { PaletteOptions } from "@mui/material";
import { COLORS } from "../constants/colors";

export const getPalette = (mode: "light" | "dark"): PaletteOptions => ({
  mode,
  primary: {
    main: COLORS.primary,
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: COLORS.secondary,
    contrastText: "#FFFFFF",
  },
  success: {
    main: COLORS.success,
  },
  warning: {
    main: COLORS.warning,
  },
  error: {
    main: COLORS.error,
  },
  background: {
    default: mode === "dark" ? COLORS.dark.background : COLORS.light.background,
    paper: mode === "dark" ? COLORS.dark.surface : COLORS.light.surface,
  },
  text: {
    primary: mode === "dark" ? COLORS.dark.text : COLORS.light.text,
    secondary: mode === "dark" ? "#94A3B8" : "#475569", // Gray slate-400 vs slate-600
  },
  divider: mode === "dark" ? COLORS.dark.border : COLORS.light.border,
});
