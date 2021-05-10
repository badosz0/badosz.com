import {
	faDiscord,
	faGithub,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "../ui/Container";
import { Contact } from "../ui/Contact";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export function HomePage() {
	return (
		<Container>
			<div className="flex justify-center">
				<div className="flex flex-col mt-10 space-y-14">
					<div className="text-main text-center">
						<div className="text-5xl font-extrabold">
							Bartosz Król
						</div>
						<div className="text-2xl flex justify-between">
							{"I code, most of the time".split(" ").map((e) => (
								<span>{e}</span>
							))}
						</div>
					</div>

					<div className="flex justify-center space-x-4 border-t-4 border-b-4 py-2 border-light">
						<Contact link="/github" icon={faGithub} />
						<Contact
							link="mailto:m@badosz.com"
							icon={faEnvelopeSquare}
						/>
						<Contact link="/twitter" icon={faTwitter} />
						<Contact link="/discord" icon={faDiscord} />
					</div>
				</div>
			</div>
		</Container>
	);
}
