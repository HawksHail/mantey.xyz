import type { AppProps } from "next/app";

import "@/styles/globals.css";

import Layout from "@/components/Layout";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
