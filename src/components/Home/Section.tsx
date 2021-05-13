import { MutableRefObject, ReactNode } from "react";

interface Props {
	refTo: MutableRefObject<any>;
	children: ReactNode;
}

export function Section({ refTo, children }: Props) {
	return (
		<div className="flex flex-col space-y-4" ref={refTo}>
			{children}
		</div>
	);
}
