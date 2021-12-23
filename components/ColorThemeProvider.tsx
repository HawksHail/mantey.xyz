import React, { useEffect, useMemo, useState } from "react";

import themes from "@/styles/theme";
import { useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import type { ReactNode } from "react";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ColorMode({ children }: { children: ReactNode }) {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const [mode, setMode] = useState<"light" | "dark">(
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

	const theme = useMemo(
		() =>
			createTheme(themes(mode), {
				palette: {
					mode,
				},
			}),
		[mode]
	);

	useEffect(() => {
		setMode(prefersDarkMode ? "dark" : "light");
	}, [prefersDarkMode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
