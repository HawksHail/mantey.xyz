import { lightBlue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export default function theme(mode: "dark" | "light") {
	return createTheme({
		palette: {
			mode,
			primary: {
				main: lightBlue[500],
			},
		},
	});
}
