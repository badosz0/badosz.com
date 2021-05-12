import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export function Container({ children }: Props) {
	return (
		<div className="max-w-6xl mx-auto">
			<div className="w-full">{children}</div>
		</div>
	);
}
