import type { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Typography from "@mui/material/Typography";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<Typography>
			{/* <Navbar /> */}
			<main>{children}</main>
			{/* <Footer /> */}
		</Typography>
	);
}
