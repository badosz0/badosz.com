import { ReactNode } from "react";
import { default as NextLink } from "next/link";
import clsx from "clsx";

interface Props {
	href: string;
  children: ReactNode;
  underline?: boolean;
}

export function Link({ children, href, underline = false }: Props) {
	return (
		<NextLink href={href}>
			<a
				target="_blank"
				className={clsx(underline && "underline")}
			>
				{children}
			</a>
		</NextLink>
	);
}

