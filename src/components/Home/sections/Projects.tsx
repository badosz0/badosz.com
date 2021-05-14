import { Title } from "../Title";
import { Project } from "../Project";

export function Projects() {
	return (
		<>
			<Title>Projects</Title>
			<div className="grid grid-cols-2 gap-12">
				<div className="flex flex-col space-y-20">
					<Project
						color="bg-blue-200"
						name="MilkScript"
						image={"/images/projects/milkscript/screenshot.png"}
						links={[["Coming Soon", "#"]]}
					>
						A dynamic programming language that compiles into Lua.
						It provides things that are not normally possible in Lua
						like default parameters, switches, classes and much
						more. MilkScript also catches many errors like
						undeclared identifier. Unlike lua, arrays are
						zero-based. Currently, this language is still in
						development.
					</Project>
					<Project
						color="bg-pink-200"
						name="Salio"
						image={"/images/projects/salio/screenshot.png"}
						links={[
							[
								"Steam",
								"https://store.steampowered.com/app/875810/Salio/",
							],
						]}
					>
						A small and minimalistic, but still super hard
						platformer game about getting a tiny fellow through
						numerous rooms filled with various obstacles. Developed
						only in free time. This game was released on Steam and
						programmed in Lua.
					</Project>
					<Project
						color="bg-purple-200"
						name="Curfe"
						image={"/images/projects/curfe/screenshot.png"}
						links={[["Itch.io", "https://badosz.itch.io/curfe"]]}
					>
						A skill and luck based game about being a currency. Made
						in 48 hours for Ludum Dare game jam.
					</Project>
				</div>
				<div className="mt-32 flex flex-col space-y-20">
					<Project
						color="bg-green-200"
						name="Obrazium"
						image={"/images/projects/obrazium/dashboard.png"}
						links={[["Website", "https://obrazium.com"]]}
					>
						An api for image generation and text manipulation.
						Mostly used in discord bots. Obrazium contains 40+
						different endpoints.
					</Project>
					<Project
						color="bg-yellow-300"
						name="Dear President,"
						image={"/images/projects/dear-president/screenshot.png"}
						links={[
							[
								"Itch.io",
								"https://badosz.itch.io/dear-president",
							],
						]}
					>
						A skill point & click game. Made in 48 hours for Ludum
						Dare game jam.
					</Project>
				</div>
			</div>
		</>
	);
}
