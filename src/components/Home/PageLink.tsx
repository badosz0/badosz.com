import { MutableRefObject } from "react";

interface Props {
	name: string;
	scroll?: MutableRefObject<any>;
}

export function PageLink({ name, scroll }: Props) {
	function handleScroll() {
		if (!scroll) {
			return;
		}
		scroll.current!.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<div
			className="cursor-pointer hover:underline select-none"
			onClick={handleScroll}
		>
			{name}
		</div>
	);
}
