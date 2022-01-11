import Head from "next/head";
import React from "react";

import Link from "@/components/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Chip, Grid, IconButton, Paper, Typography } from "@mui/material";
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
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Aliquid praesentium recusandae incidunt non, sit
						autem id sunt a fugit ad.
					</Typography>
				</Grid>
				<Grid container item spacing={1}>
					<Grid
						item
						component="section"
						direction="column"
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
							<Typography pb={1}>
								Currently at Cognizant as a Fullstack Engineer.
							</Typography>
							<Typography pb={1}>
								Graduated from the University of Texas at Dallas
								with BS in CS Magna Cum Laude.
							</Typography>
							<Typography pb={1}>
								Started with Java and HTML/CSS in highschool.
							</Typography>
							<Grid
								container
								item
								justifyContent="center"
								spacing={1}
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
					<Grid
						item
						component="section"
						direction="column"
						xs={12}
						sm={4}
					>
						<Paper>
							<Typography variant="h2" mb={2}>
								Gaming
							</Typography>
							<Typography>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Id consequuntur temporibus
								asperiores hic iure aspernatur recusandae magni?
								Quos, laborum ipsum!
							</Typography>
						</Paper>
					</Grid>
					<Grid
						item
						component="section"
						direction="column"
						xs={12}
						sm={4}
					>
						<Paper>
							<Typography variant="h2" mb={2}>
								Airsoft
							</Typography>
							<Typography>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Amet quibusdam eaque corporis
								quisquam provident possimus quas officia dolore
								eum distinctio!
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default about;
