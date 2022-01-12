import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

import { LinkProps as MUILinkProps } from "@mui/material";
import MUILink from "@mui/material/Link";

export default function Link(props: MUILinkProps & NextLinkProps) {
	return (
		<NextLink {...props}>
			<MUILink {...props}>{props.children}</MUILink>
		</NextLink>
	);
}
