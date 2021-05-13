import { Title } from "../Title";
import { blogPost } from "../../../util/blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {
	blogPosts: blogPost[];
}

export function Blog({ blogPosts }: Props) {
	return (
		<>
			<Title>Blog</Title>
			<div className="flex">
				{blogPosts.map((post) => (
					<div className="flex flex-col">
						<div className="text-lg font-semibold flex space-x-4">
							<div>{post.name}</div>
							<div className="flex justify-center items-center">
								<FontAwesomeIcon icon={faExternalLinkAlt} />
							</div>
						</div>
						<div className="text-light dark:text-grayed">
							{post.date}
						</div>
					</div>
				))}
			</div>
		</>
	);
}
