import type { ReactNode } from "react";

import { Typography } from "@mui/material";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			{/* <Navbar /> */}
			<main>{children}</main>
			{/* <Footer /> */}
		</>
	);
}
