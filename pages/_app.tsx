import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";

import Layout from "@/components/Layout";
import theme from "@/styles/theme";

import "../styles/globals.css";

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
