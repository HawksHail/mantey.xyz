import type { AppProps } from "next/app";

import "../styles/globals.css";

import Head from "next/head";

import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import Layout from "../components/Layout";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
			</Head>
			<Layout>
				<Paper square style={{ minHeight: "100vh" }}>
					<Component {...pageProps} />
				</Paper>
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
