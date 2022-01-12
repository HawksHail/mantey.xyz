import Head from "next/head";
import React from "react";

import Link from "@/components/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
	Chip,
	Container,
	Grid,
	IconButton,
	Paper,
	SvgIcon,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";

function about() {
	return (
		<>
			<Head>
				<title>About - Zion Mantey</title>
				<meta name="description" content="About Zion" />
			</Head>
			<Grid
				container
				justifyContent="center"
				alignContent="center"
				spacing={2}
				sx={{
					textAlign: "center",
				}}
			>
				<Grid
					item
					xs={12}
					sx={{ marginTop: { xs: "1rem", sm: "2rem" } }}
				>
					<Typography variant="h1">About</Typography>
					<Typography>
						Hello, I&apos;m Zion and I like these things 🙂
					</Typography>
				</Grid>
				<Grid container item spacing={1}>
					<Grid
						item
						component="section"
						xs={12}
						sm={4}
						sx={{ textAlign: "start" }}
					>
						<Paper sx={{ padding: 1 }}>
							<Typography
								variant="h2"
								mb={2}
								sx={{ textAlign: "center" }}
							>
								Programming
							</Typography>
							<Container sx={{ px: 2 }}>
								<Typography pb={1}>
									Currently at Cognizant as a Fullstack
									Engineer
								</Typography>
								<Typography pb={1}>
									Graduated from the University of Texas at
									Dallas with BS in CS Magna Cum Laude
								</Typography>
							</Container>
							<Grid
								container
								item
								justifyContent="center"
								spacing={0.5}
								pt={1}
							>
								<Grid item>
									<Chip label="Java" />
								</Grid>
								<Grid item>
									<Chip label="Javascript" />
								</Grid>
								<Grid item>
									<Chip label="Typescript" />
								</Grid>
								<Grid item>
									<Chip label="Python" />
								</Grid>
								<Grid item>
									<Chip label="C/C++" />
								</Grid>
								<Grid item>
									<Chip label="HTML5/CSS" />
								</Grid>
								<Grid item>
									<Chip label="MIPS assembly" />
								</Grid>
							</Grid>
							<Box sx={{ textAlign: "center" }}>
								<Link href="https://github.com/hawkshail">
									<IconButton>
										<GitHubIcon />
									</IconButton>
								</Link>
							</Box>
						</Paper>
					</Grid>
					<Grid item component="section" xs={12} sm={4}>
						<Paper>
							<Typography variant="h2" mb={2}>
								Gaming
							</Typography>
							<Container sx={{ px: 2 }}>
								<Typography pb={1}>
									I mostly singleplayer and co-op games with
									multiplayer phases
								</Typography>
								<Typography pb={1}>
									My computer is a Ryzen 7 37000x and an RTX
									2070
								</Typography>
								<Typography pb={1}>VR is awesome</Typography>
								<IconButton href="https://steamcommunity.com/id/HawksHail/">
									<SvgIcon viewBox="0 0 24 24">
										<path d="M21.18 6.21C21.18 8.05 19.71 9.54 17.92 9.54 16.11 9.54 14.65 8.05 14.65 6.21 14.65 4.36 16.11 2.87 17.92 2.87 19.71 2.87 21.18 4.36 21.18 6.21ZM24 6.21C24 9.66 21.27 12.44 17.91 12.44L12.05 16.8C11.84 19.15 9.88 21 7.53 21 5.36 21 3.53 19.43 3.08 17.34L0 16.07 0 10.21 5.21 12.36C6.02 11.85 6.93 11.63 7.99 11.73L11.8 6.17C11.82 2.76 14.55 0 17.9 0 21.27 0 24 2.79 24 6.21ZM10.88 16.35C10.88 14.45 9.39 12.93 7.53 12.93 7.29 12.93 7.05 12.96 6.8 13.01L8.2 13.59C9.56 14.14 10.23 15.72 9.68 17.11 9.13 18.51 7.58 19.19 6.21 18.62 5.67 18.4 5.12 18.16 4.57 17.95 5.13 19.03 6.24 19.77 7.53 19.77 9.39 19.77 10.88 18.25 10.88 16.35ZM21.99 6.21C21.99 3.92 20.15 2.05 17.91 2.05 15.64 2.05 13.81 3.92 13.81 6.21 13.81 8.52 15.65 10.38 17.91 10.38 20.15 10.39 21.99 8.53 21.99 6.21ZM21.99 6.21" />
									</SvgIcon>
								</IconButton>
							</Container>
						</Paper>
					</Grid>
					<Grid item component="section" xs={12} sm={4}>
						<Paper>
							<Typography variant="h2" mb={2}>
								Airsoft
							</Typography>
							<Container sx={{ px: 2 }}>
								<Typography>
									Airsoft is a fun and physical hobby where a
									bunch of people play soldier with replica
									firearms that shoot small plastic BBs
								</Typography>
								<Typography>Need to play more often</Typography>
								<Typography>
									Home field at D14 Airsoft
								</Typography>
							</Container>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default about;
