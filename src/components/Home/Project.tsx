import { ReactNode } from "react";

interface Props {
	name: string;
	sub: string;
	children: ReactNode;
	icon: string;
	image: string;
}

export function Project({ name, sub, icon, image, children }: Props) {
	return (
		<div className="flex flex-col space-y-4">
			<div className="flex space-x-4">
				<div className="w-16 h-16 bg-light flex justify-center items-center rounded-xl">
					<div className="w-14 h-14 bg-blue-200 flex justify-center items-center rounded-xl">
						<img src={icon} />
					</div>
				</div>
				<div className="flex flex-col justify-center">
					<div className="font-bold text-3xl text-main">{name}</div>
					<div className="text-lg text-gray">{sub}</div>
				</div>
			</div>
			<div className="text-justify text-main">{children}</div>
			<img src={image} />
		</div>
	);
}
