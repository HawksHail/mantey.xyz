import type { AppProps } from "next/app";

import "../styles/globals.css";

import Head from "next/head";
import createEmotionCache from "src/createEmotionCache";

import ColorThemeProvider from "@/components/ColorThemeProvider";
import Layout from "@/components/Layout";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, Paper } from "@mui/material";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
				<title>Zion Mantey</title>
			</Head>
			<ColorThemeProvider>
				<CssBaseline />
				<Layout>
					<Paper square style={{ minHeight: "100vh" }}>
						<Component {...pageProps} />
					</Paper>
				</Layout>
			</ColorThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
