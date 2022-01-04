import React, { useState } from "react";

import Link from "@/components/Link";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { ColorModeToggleButton } from "./ColorThemeProvider";

const pages = ["Contact"];

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="sticky" color="primary">
			<Toolbar>
				<Box sx={{ display: { xs: "flex", sm: "none" } }}>
					<IconButton
						size="large"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="inherit"
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: "block", sm: "none" },
						}}
					>
						{pages.map(page => (
							<MenuItem key={page} onClick={handleCloseNavMenu}>
								<Typography textAlign="center">
									<Link
										href={`/${page.toLowerCase()}`}
										color="inherit"
										underline="none"
									>
										{page}
									</Link>
								</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
				<Typography
					variant="h6"
					component="div"
					sx={{
						flexGrow: { xs: "1", sm: "0" },
						display: { xs: "flex", sm: "block" },
					}}
				>
					<Link href="/" color="inherit" underline="none">
						Zion
					</Link>
				</Typography>
				<Box
					sx={{
						flexGrow: 1,
						display: { xs: "none", sm: "flex" },
						ml: "1rem",
					}}
				>
					{pages.map(page => (
						<Button
							key={page}
							sx={{
								my: 2,
								color: "white",
								display: "block",
								textTransform: "none",
							}}
						>
							<Link
								href={`/${page.toLowerCase()}`}
								color="inherit"
								underline="none"
							>
								{page}
							</Link>
						</Button>
					))}
				</Box>
				<Box sx={{ flexGrow: 0 }}>
					<ColorModeToggleButton />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
