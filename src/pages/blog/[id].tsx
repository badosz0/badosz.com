import { BlogPage } from "~/components/Blog";
import { getPosts } from "../../util/blog";

export default BlogPage;

export async function getStaticPaths() {
	const paths = getPosts().map((post) => `/blog/${post.path}`);
	return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: any }) {
	const posts = getPosts();
	const post = posts.find((p) => p.path == params.id);

	return {
		props: {
			post,
		},
	};
}
