import type { NextPage } from "next";
import Head from "next/head";

import styles from "@/styles/Home.module.css";
import { Container } from "@mui/material";

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
					<h1>Zion Mantey</h1>
					<ul className={styles.list}>
						<li>Software Developer</li>
						<li>Gamer</li>
						<li>Airsofter</li>
					</ul>
				</section>
				<section>
					<p>Hey, I&apos;m Zion!</p>
					<p>
						I write <code>code</code> sometimes
					</p>
					<p>I love watching Youtube and movies</p>
					<p>I play video games</p>
					<p>I sling plastic bbs at people for fun</p>
				</section>
			</div>
		</Container>
	);
};

export default Home;
