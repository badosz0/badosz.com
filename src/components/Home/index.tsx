import { Container } from "@web/components/ui/Container";
import Link from "next/link";

interface ProjectProps {
	name: string;
	url: string;
	description: string;
}

function Project({ name, url, description }: ProjectProps) {
	return (
		<div className="flex flex-col items-start text-md">
			<Link href={url}>
				<a
					className="relative"
					target={url === "#" ? "" : "_blank"}
					rel="noopener"
				>
					<div className="px-1 py-0.5 bg-purple-200 bg-opacity-60 hover:bg-opacity-75 cursor-pointer text-md rounded-md">
						{name}
					</div>
				</a>
			</Link>
			<div className="text-md">{description}</div>
		</div>
	);
}

interface ContactLinkProps {
	name: string;
	url: string;
}

function ContactLink({ name, url }: ContactLinkProps) {
	return (
		<Link href={url}>
			<a
				target="_blank"
				className="text-purple-600 hover:text-purple-700"
			>
				{name}
			</a>
		</Link>
	);
}

export function HomePage() {
	return (
		<Container>
			<main className="my-16 flex flex-col space-y-16">
				<div className="flex justify-between items-center">
					<div>
						<div className="text-3xl font-bold">Bartosz Król</div>
						<div className="text-lg">Software engineer</div>
					</div>
					<div>
						<img
							src="/images/qr/qrcode.png"
							className="w-14 h-14"
							width={56}
							height={56}
							alt="qr code"
						/>
					</div>
				</div>
				<div>
					<div className="text-xl font-medium">Contact me</div>
					<div className="space-y-4 mt-4">
						You are most likely to reach me through{" "}
						<ContactLink name="Twitter" url="/twitter" /> or on my{" "}
						<ContactLink name="Discord" url="/discord" /> server.
						All of my open source projects are on{" "}
						<ContactLink name="Github" url="/github" />. You can
						also send me an email at{" "}
						<span className="text-purple-600">
							contact@
							<span className="hidden">I</span>
							<span className="relative">ba</span>
							<span className="hidden">love</span>
							<span className="relative">do</span>
							<span className="hidden">bots</span>
							<span className="relative">sz</span>
							<span className="hidden">!</span>
							<span className="relative">.com</span>
						</span>
					</div>
				</div>
				<div>
					<div className="text-xl font-medium">
						Currently Working On
					</div>
					<div className="space-y-4 mt-4">
						<Project
							name="rumibase"
							url="#"
							description="Keep everything in one place. Make it simple. Coming Soon."
						/>
						<Project
							name="MilkScript"
							url="#"
							description="A dynamic programming language. Currently still in development."
						/>
						<Project
							name="Dank Memer"
							url="https://dankmemer.lol/"
							description="A feature-rich bot with the original twist. One of the largest bots on Discord with over 20m users."
						/>
					</div>
				</div>
				<div>
					<div className="text-xl font-medium">Past Work</div>
					<div className="space-y-4 mt-4">
						<Project
							name="Salio"
							url="https://store.steampowered.com/app/875810/Salio/"
							description="A small and minimalistic, but still super hard platformer game about getting a tiny fellow through numerous rooms filled with various obstacles."
						/>
						<Project
							name="Dear President,"
							url="https://badosz.itch.io/dear-president"
							description="A skill point & click game. Made in 48 hours for Ludum Dare game jam."
						/>
						<Project
							name="Curfe"
							url="https://badosz.itch.io/curfe"
							description="A skill and luck based game about being a currency. Made in 48 hours for Ludum Dare game jam."
						/>
					</div>
				</div>
			</main>
		</Container>
	);
}
