import Head from "next/head";

import Link from "@/components/Link";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

function contact() {
	return (
		<>
			<Head>
				<title>Contact Me - Zion Mantey</title>
				<meta name="description" content="Contact Zion" />
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
							sx={{ textTransform: "none" }}
							href="mailto:contact@mantey.xyz"
						>
							Email
						</Button>
					</Grid>
					<Grid item>
						<Link
							href="https://twitter.com/messages/compose?recipient_id=399105671"
							target="_blank"
							rel="noopener noreferrer"
							underline="none"
						>
							<Button
								variant="contained"
								color="primary"
								startIcon={<TwitterIcon />}
								sx={{ textTransform: "none" }}
							>
								Twitter
							</Button>
						</Link>
					</Grid>
					<Grid item>
						<Link
							href="https://www.linkedin.com/in/zion-mantey"
							target="_blank"
							rel="noopener noreferrer"
							underline="none"
						>
							<Button
								variant="contained"
								color="primary"
								startIcon={<LinkedInIcon />}
								sx={{ textTransform: "none" }}
							>
								LinkedIn
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default contact;
