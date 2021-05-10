import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface Props {
	link: string;
	icon: IconDefinition;
}

export function Contact({ link, icon }: Props) {
	return (
		<Link href={link}>
			<a target="_blank" className="text-gray">
				<FontAwesomeIcon icon={icon} className="h-8" />
			</a>
		</Link>
	);
}
