import React, { useContext, useMemo } from "react";

import { useLocalStorage } from "@/src/hooks/useLocalStorage";
import { getThemeOptions } from "@/styles/theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton, IconButtonProps, PaletteMode } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import type { ReactNode } from "react";

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});

/**
 * Creates a context for MUI theme that has dark/light mode
 * @param param0 children components
 * @returns wrapper context for a light/dark color mode, and a theme
 */
export default function ColorThemeProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [mode, setMode] = useLocalStorage<PaletteMode>("colorMode", "light");

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[setMode]
	);

	const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

/**
 * A button that toggles dark mode
 * @param props button props
 * @returns styled button to toggle dark mode
 */
export function ColorModeToggleButton(props: IconButtonProps) {
	const { toggleColorMode } = useContext(ColorModeContext);
	const theme = useTheme();

	return (
		<IconButton
			sx={{ ml: 1 }}
			onClick={toggleColorMode}
			color="inherit"
			{...props}
		>
			{theme.palette.mode === "dark" ? (
				<Brightness7Icon />
			) : (
				<Brightness4Icon />
			)}
		</IconButton>
	);
}
