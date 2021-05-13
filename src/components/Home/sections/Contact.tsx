import { Title } from "../Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelopeOpen,
	IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
	faDiscord,
	faGithub,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface ContactLinkProps {
	link: string;
	icon: IconDefinition;
}

function ContactLink({ link, icon }: ContactLinkProps) {
	return (
		<Link href={link}>
			<a target="_blank">
				<FontAwesomeIcon icon={icon} />
			</a>
		</Link>
	);
}

export function Contact() {
	return (
		<>
			<div className="flex flex-col items-center space-y-4">
				<Title>Contact</Title>
				<div className="flex justify-center text-4xl space-x-12">
					<ContactLink link="/github" icon={faGithub} />
					<ContactLink link="/twitter" icon={faTwitter} />
					<ContactLink link="/discord" icon={faDiscord} />
					<ContactLink
						link="mailto:m@badosz.com"
						icon={faEnvelopeOpen}
					/>
				</div>
			</div>
		</>
	);
}
