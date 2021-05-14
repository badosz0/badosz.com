import { Container } from "../ui/Container";
import { PageLink } from "./PageLink";
import { Title } from "./Title";
import { Section } from "./Section";
import { Projects } from "./sections/Projects";
import { Blog } from "./sections/Blog";
import { Contact } from "./sections/Contact";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { blogPost } from "../../util/blog";

interface Props {
	blogPosts: blogPost[];
}

export function HomePage({ blogPosts }: Props) {
	const open = (url: string) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) {
			newWindow.opener = null;
		}
	};

	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const projectsRef = useRef(null);
	const blogRef = useRef(null);
	const contactRef = useRef(null);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<Container>
			<div className="flex flex-col mt-10 space-y-24 text-main dark:text-milk">
				<div className="flex flex-col space-y-12">
					<div className="flex justify-end space-x-12 font-semibold">
						<div
							onClick={() => {
								setTheme(theme == "light" ? "dark" : "light");
							}}
						>
							<PageLink
								name={`Lights ${
									theme == "light" ? "Off" : "On"
								}`}
							/>
						</div>
						<PageLink name="Projects" scroll={projectsRef} />
						<PageLink name="Blog" scroll={blogRef} />
						<PageLink name="Contact" scroll={contactRef} />
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
				</div>
				<div className="flex justify-center ">
					<Link href="mailto:m@badosz.com">
						<a className="bg-main dark:bg-milk text-milk dark:text-main font-bold px-6 py-4 rounded-2xl hover:bg-main-hover dark:hover:bg-light hover:shadow-xl transition ease-in-out duration-200">
							Contact Me
						</a>
					</Link>
				</div>

				<Section refTo={projectsRef}>
					<Projects />
				</Section>

				<Section refTo={blogRef}>
					<Blog blogPosts={blogPosts} />
				</Section>

				<Section refTo={contactRef}>
					<Contact />
				</Section>

				<div
					className="pb-12 flex justify-center text-3xl cursor-pointer"
					onClick={() => {
						if (Math.random() <= 0.01) {
							open("https://www.youtube.com/watch?v=bvim4rsNHkQ");
						} else {
							window.scrollTo({
								top: 0,
								left: 0,
								behavior: "smooth",
							});
						}
					}}
				>
					🚀
				</div>
			</div>
		</Container>
	);
}
