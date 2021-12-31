import { PaletteMode } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		primary: {
			main: lightBlue[500],
		},
	},
});

export const themeLight = createTheme(getDesignTokens("light"));
export const themeDark = createTheme(getDesignTokens("dark"));
export default themeLight;
