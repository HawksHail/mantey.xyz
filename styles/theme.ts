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
});

export const themeLight = createTheme(getThemeOptions("light"));
export const themeDark = createTheme(getThemeOptions("dark"));
export default themeLight;
