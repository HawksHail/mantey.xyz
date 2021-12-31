import Link from "@/components/Link";
import { AppBar, Toolbar, Typography } from "@mui/material";

import { ColorModeToggleButton } from "./ColorThemeProvider";

const Navbar = () => {
	return (
		<AppBar position="sticky" color="primary">
			<Toolbar>
				<Link
					href="/"
					color="inherit"
					underline="none"
					sx={{ flex: 1 }}
				>
					<Typography variant="h6" component="div">
						Zion
					</Typography>
				</Link>
				<ColorModeToggleButton />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
