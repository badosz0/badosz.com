import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export function Title({ children }: Props) {
	return (
		<div className="flex">
			<div className="text-2xl font-semibold relative">
				<div className="z-10 px-1">{children}</div>
				<div className="bg-yellow-200 w-full h-2 z-0 -mt-1"></div>
			</div>
		</div>
	);
}
