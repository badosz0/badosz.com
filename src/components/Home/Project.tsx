import { ReactNode } from "react";

interface Props {
	name: string;
	children: ReactNode;
	image: string;
	color: string;
}

export function Project({ name, image, color, children }: Props) {
	return (
		<div className="flex flex-col space-y-4">
			<div className={`p-4 ${color}`}>
				<img src={image} className="rounded-sm" />
			</div>
			<div className="flex flex-col space-y-2">
				<div className="text-xl font-semibold">{name}</div>
				<div className="text-justify">{children}</div>
			</div>
		</div>
	);
}
