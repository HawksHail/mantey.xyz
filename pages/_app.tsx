import type { AppProps } from "next/app";

import "../styles/globals.css";

import Head from "next/head";

import ColorThemeProvider from "@/components/ColorThemeProvider";
import Layout from "@/components/Layout";
import { CssBaseline, Paper } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
			</Head>
			<ColorThemeProvider>
				<CssBaseline />
				<Layout>
					<Paper square style={{ minHeight: "100vh" }}>
						<Component {...pageProps} />
					</Paper>
				</Layout>
			</ColorThemeProvider>
		</>
	);
}

export default MyApp;
