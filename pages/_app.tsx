import type { AppProps } from "next/app";

import "@/styles/globals.css";

import Head from "next/head";

import Layout from "@/components/Layout";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material/styles";

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
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
