import { Title } from "../Title";
import { blogPost } from "../../../util/blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface Props {
	blogPosts: blogPost[];
}

export function Blog({ blogPosts }: Props) {
	return (
		<>
			<Title>Blog</Title>
			<div className="flex">
				{blogPosts.map((post) => (
					<Link href={`/blog/${post.path}`}>
						<a className="flex flex-col">
							<div className="text-lg font-semibold flex space-x-4">
								<div>{post.name}</div>
								<div className="flex justify-center items-center">
									<FontAwesomeIcon icon={faExternalLinkAlt} />
								</div>
							</div>
							<div className="text-grayed">{post.date}</div>
						</a>
					</Link>
				))}
			</div>
		</>
	);
}
