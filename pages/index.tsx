import type { NextPage } from "next";
import Head from "next/head";

import { Container, Typography } from "@mui/material";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<Container className={styles.container}>
			<Head>
				<title>Zion Mantey</title>
				<meta name="description" content="Zion's website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.slide}>
				<section className={styles.title}>
					<Typography variant="h1">Zion Mantey</Typography>
					<ul className={styles.list}>
						<Typography variant="subtitle1" component="li">
							Software Developer
						</Typography>
						<Typography variant="subtitle1" component="li">
							Gamer
						</Typography>
						<Typography variant="subtitle1" component="li">
							Airsofter
						</Typography>
					</ul>
				</section>
				<section>
					<Typography variant="body1">Hey, I&apos;m Zion!</Typography>
					<Typography variant="body1">
						I write <code>code</code> sometimes
					</Typography>
					<Typography variant="body1">
						I love watching Youtube and movies
					</Typography>
					<Typography variant="body1">I play video games</Typography>
					<Typography variant="body1">
						I sling plastic bbs at people for fun
					</Typography>
				</section>
			</div>
		</Container>
	);
};

export default Home;
