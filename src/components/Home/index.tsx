import { Container } from "../ui/Container";
import { PageLink } from "./PageLink";
import { Title } from "./Title";
import { Project } from "./Project";
import { array_random } from "../../util/array";
import Link from "next/link";

export function HomePage() {
	const open = (url: string) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) {
			newWindow.opener = null;
		}
	};

	return (
		<Container>
			<div className="flex flex-col mt-10 space-y-12 text-main">
				<div className="flex justify-end space-x-12 font-semibold">
					<PageLink name="Lights Off" />
					<PageLink name="Projects" />
					<PageLink name="Resume" />
					<PageLink name="Blog" />
					<PageLink name="Contact" />
				</div>
				<div className="flex flex-col items-center space-y-4">
					<div className="rounded-full w-48 h-48 flex justify-center items-center bg-yellow-200">
						<img src="/images/avatar/badosz.png" />
					</div>
					<div className="text-center">
						<div className="text-7xl font-extrabold">
							Bartosz Kr
							<span
								onClick={() =>
									open(
										"https://www.youtube.com/watch?v=b0q5PR1xpA0"
									)
								}
							>
								ó
							</span>
							l
						</div>
						<div className="text-3xl">
							I code, most of the time.
						</div>
					</div>
				</div>

				<div className="flex justify-center ">
					<Link href="mailto:m@badosz.com">
						<a className="bg-main text-white px-6 py-4 rounded-2xl hover:bg-main-hover hover:shadow-2xl transition ease-in-out duration-200">
							Contact Me
						</a>
					</Link>
				</div>

				<div className="flex flex-col space-y-4">
					<Title>Projects</Title>
					<div className="grid grid-cols-2 gap-12">
						<div className="flex flex-col space-y-20">
							<Project
								color="bg-blue-200"
								name="MilkScript"
								image={
									"/images/projects/milkscript/screenshot.png"
								}
							>
								A dynamic programming language that compiles
								into Lua. It provides things that are not
								normally possible in Lua like default
								parameters, switches, classes and much more.
								MilkScript also catches many errors like
								undeclared identifier. Unlike lua, arrays are
								zero-based. Currently, this language is still in
								development.
							</Project>
							<Project
								color="bg-pink-200"
								name="Salio"
								image={"/images/projects/salio/screenshot.png"}
							>
								A small and minimalistic, but still super hard
								platformer game about getting a tiny fellow
								through numerous rooms filled with various
								obstacles. Developed only in free time. This
								game was released on Steam and programmed in
								Lua.
							</Project>
							<Project
								color="bg-purple-200"
								name="Curfe"
								image={"/images/projects/curfe/screenshot.png"}
							>
								A skill and luck based game about being a
								currency. Made in 48 hours for Ludum Dare game
								jam.
							</Project>
						</div>
						<div className="mt-32 flex flex-col space-y-20">
							<Project
								color="bg-green-200"
								name="Obrazium"
								image={
									"/images/projects/obrazium/dashboard.png"
								}
							>
								An api for image generation and text
								manipulation. Mostly used in discord bots.
								Obrazium contains 40+ different endpoints.
							</Project>
							<Project
								color="bg-yellow-300"
								name="Dear President,"
								image={
									"/images/projects/dear-president/screenshot.png"
								}
							>
								A skill point & click game. Made in 48 hours for
								Ludum Dare game jam.
							</Project>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
