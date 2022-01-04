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
								<Link
									href={`/${page.toLowerCase()}`}
									textAlign="center"
									component="a"
									underline="none"
									color="inherit"
								>
									{page}
								</Link>
							</MenuItem>
						))}
					</Menu>
				</Box>
				<Link
					href="/"
					variant="h6"
					component="a"
					sx={{
						flexGrow: { xs: "1", sm: "0" },
						display: { xs: "flex", sm: "block" },
						px: "1rem",
						py: ".5rem",
					}}
					underline="none"
					color="inherit"
				>
					Zion
				</Link>
				<Box
					sx={{
						flexGrow: 1,
						display: { xs: "none", sm: "flex" },
						ml: "1rem",
					}}
				>
					{pages.map(page => (
						<Link
							key={page}
							href={`/${page.toLowerCase()}`}
							underline="none"
						>
							<Button
								sx={{
									my: 2,
									color: "white",
									display: "block",
									textTransform: "none",
								}}
							>
								{page}
							</Button>
						</Link>
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
