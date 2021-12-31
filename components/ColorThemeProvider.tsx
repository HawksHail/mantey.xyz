import React, { useContext, useEffect, useMemo, useState } from "react";

import { getThemeOptions } from "@/styles/theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
	IconButton,
	IconButtonProps,
	PaletteMode,
	useMediaQuery,
} from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import type { ReactNode } from "react";

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});

export default function ColorMode({ children }: { children: ReactNode }) {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const [mode, setMode] = useState<PaletteMode>(
		prefersDarkMode ? "dark" : "light"
	);

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

	useEffect(() => {
		setMode(prefersDarkMode ? "dark" : "light");
	}, [prefersDarkMode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export function ColorModeToggleButton(props: IconButtonProps) {
	const { toggleColorMode } = useContext(ColorModeContext);
	const theme = useTheme();

	return (
		<IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
			{theme.palette.mode === "dark" ? (
				<Brightness7Icon />
			) : (
				<Brightness4Icon />
			)}
		</IconButton>
	);
}
