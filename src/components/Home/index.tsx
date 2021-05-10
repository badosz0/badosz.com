import {
	faDiscord,
	faGithub,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "../ui/Container";
import { Contact } from "../ui/Contact";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { Project } from "./Project";

export function HomePage() {
	return (
		<Container>
			<div className="flex flex-col space-y-20  mt-10">
				<div className="flex justify-center">
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
				</div>
				<div className="flex justify-center">
					<div className="flex justify-center space-x-4 border-t-4 border-b-4 py-2 border-light">
						<Contact link="/github" icon={faGithub} />
						<Contact
							link="mailto:m@badosz.com"
							icon={faEnvelopeSquare}
						/>
						<Contact link="/twitter" icon={faTwitter} />
						<Contact link="/discord" icon={faDiscord} />
					</div>{" "}
				</div>
				<div className="flex justify-center">
					<div className="flex flex-col max-w-xl">
						<Project
							name="MilkScript"
							sub="Programming Language"
							icon={
								"/images/projects/milkscript/milkscript_sygnet.svg"
							}
							image={"/images/projects/milkscript/screenshot.png"}
						>
							A dynamic programming language that compiles into
							Lua. It provides things that are not normally
							possible in Lua like default parameters, switches,
							classes and much more. MilkScript also catches many
							errors like undeclared identifier. Unlike lua,
							arrays are zero-based. Currently, this language is
							still in development.
						</Project>
					</div>
				</div>
			</div>
		</Container>
	);
}
