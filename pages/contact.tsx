import Head from "next/head";

import Link from "@/components/Link";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Grid, Typography } from "@mui/material";

function contact() {
	return (
		<>
			<Head>
				<title>Contact Me - Zion Mantey</title>
				<meta name="description" content="Contact Zion" />
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
					<Typography variant="h1">Contact Me</Typography>
				</Grid>
				<Grid
					container
					item
					spacing={2}
					justifyContent="center"
					xs={1}
					sm="auto"
				>
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
			</Grid>
		</>
	);
}

export default contact;
