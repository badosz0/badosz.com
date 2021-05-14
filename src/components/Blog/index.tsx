import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { blogPost } from "../../util/blog";
import { Container } from "../ui/Container";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

function CodeBlock({ language, value }: { language: string; value: string }) {
	return (
		<SyntaxHighlighter showLineNumbers={true} language={language}>
			{value}
		</SyntaxHighlighter>
	);
}

function Heading({ level, children }: { level: number; children: ReactNode }) {
	let style = "";

	switch (level) {
		case 1:
			style = "text-3xl font-bold";
			break;
		case 2:
			style = "text-2xl font-bold";
			break;
		case 3:
			style = "text-xl font-bold";
			break;
		case 4:
			style = "text-lg font-bold";
			break;
	}

	return <div className={style}>{children}</div>;
}

function List({
	ordered,
	children,
}: {
	ordered: boolean;
	children: ReactNode;
}) {
	return (
		<div className={ordered ? "list-decimal" : "list-disc"}>{children}</div>
	);
}

function Emphasis({ children }: { children: ReactNode }) {
	return <div className="text-xs italic">{children}</div>;
}

interface Props {
	post: blogPost;
}

export function BlogPage({ post }: Props) {
	const time = Math.round(post.content.split(" ").length / 200);
	const description = `${post.content.substring(0, 100)}...`;

	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<>
			<Container>
				<div className="flex flex-col mt-24 space-y-4">
					<div className="flex justify-between text-lg text-grayed font-bold">
						<div className="">
							{post.date} · {time} min read
						</div>
						<div className="flex space-x-8">
							<Link href="/">
								<a className="hover:underline">
									<FontAwesomeIcon icon={faArrowLeft} /> Back
								</a>
							</Link>
							<div
								className="hover:underline"
								onClick={() => {
									setTheme(
										theme == "light" ? "dark" : "light"
									);
								}}
							>
								{`Lights ${theme == "light" ? "Off" : "On"}`}
							</div>
						</div>
					</div>
					<div className="text-4xl font-bold">{post.name}</div>
					<div>
						<ReactMarkdown
							escapeHtml={false}
							source={post.content}
							renderers={{
								code: CodeBlock,
								heading: Heading,
								list: List,
								emphasis: Emphasis,
							}}
						/>
					</div>
				</div>
			</Container>
		</>
	);
}
