import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

import { LinkProps as MUILinkProps } from "@mui/material";
import MUILink from "@mui/material/Link";
import { MUIStyledCommonProps } from "@mui/system";

export default function Link(
	props: MUILinkProps & MUIStyledCommonProps & NextLinkProps
) {
	return (
		<NextLink {...props}>
			<MUILink {...props}>{props.children}</MUILink>
		</NextLink>
	);
}
