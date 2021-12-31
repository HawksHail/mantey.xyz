import Link from "@/components/Link";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import { ColorModeToggleButton } from "./ColorThemeProvider";

const Navbar = () => {
	return (
		<AppBar position="sticky" color="primary">
			<Toolbar>
				<Link href="/" color="inherit" underline="none">
					Zion
				</Link>
				<ColorModeToggleButton />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
