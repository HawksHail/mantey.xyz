import type { ReactNode } from "react";

import { Typography } from "@mui/material";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<Typography>
			{/* <Navbar /> */}
			<main>{children}</main>
			{/* <Footer /> */}
		</Typography>
	);
}
