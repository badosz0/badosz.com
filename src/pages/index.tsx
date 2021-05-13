import { HomePage } from "~/components/Home";
import { getPosts } from "../util/blog";

export default HomePage;

export async function getServerSideProps() {
	return {
		props: { blogPosts: getPosts() }, // will be passed to the page component as props
	};
}
