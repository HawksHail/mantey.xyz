import Head from "next/head";
import React from "react";

import { Grid, Paper, Typography } from "@mui/material";

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
					sx={{ marginTop: { xs: "2rem", sm: "6rem" } }}
				>
					<Typography variant="h1">About</Typography>
				</Grid>
				<Grid container item spacing={1}>
					<Grid
						item
						component="section"
						direction="column"
						xs={12}
						sm={4}
					>
						<Paper>
							<Typography variant="h2" mb={2}>
								Programming
							</Typography>
							<Typography>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Cupiditate quos accusantium
								expedita reiciendis nemo ratione eius ad
								repudiandae eligendi corrupti?
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
