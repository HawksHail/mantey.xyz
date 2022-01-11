import Head from "next/head";

import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

function contact() {
	return (
		<>
			<Head>
				<title>Contact Me - Zion Mantey</title>
				<meta name="description" content="About Zion" />
			</Head>
			<Box
				sx={{
					textAlign: "center",
					height: "80vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<Grid container spacing={2} justifyContent="center">
					<Grid item xs={12}>
						<Typography variant="h1">Contact Me</Typography>
					</Grid>
					<Grid item>
						<Button
							variant="contained"
							color="primary"
							startIcon={<EmailIcon />}
							href="mailto:contact@mantey.xyz"
						>
							Email
						</Button>
					</Grid>
					<Grid item>
						<Button
							variant="contained"
							color="primary"
							startIcon={<TwitterIcon />}
							href="https://twitter.com/messages/compose?recipient_id=399105671"
						>
							Twitter
						</Button>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default contact;
