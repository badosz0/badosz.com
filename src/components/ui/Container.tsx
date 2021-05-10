import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export function Container({ children }: Props) {
	return <div>{children}</div>;
}
