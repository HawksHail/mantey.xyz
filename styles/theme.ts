import { PaletteMode, ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const getThemeOptions = (mode: PaletteMode): ThemeOptions => ({
	palette: {
		mode,
		primary: {
			main: "#165fb2",
		},
		secondary: {
			main: "#b26916",
		},
		error: {
			main: "#f44336",
		},
	},
	typography: {
		h1: { fontSize: "3.5rem" },
		h2: { fontSize: "2.75rem" },
		h3: { fontSize: "2.25rem" },
		h4: { fontSize: "1.75rem" },
	},
});

export const themeLight = createTheme(getThemeOptions("light"));
export const themeDark = createTheme(getThemeOptions("dark"));
export default themeLight;
