import { get_posts } from "../../utils/blog";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Head from "next/head";

function CodeBlock({ language, value }) {
    return (
        <SyntaxHighlighter showLineNumbers={true} language={language}>
            {value}
        </SyntaxHighlighter>
    );
}

function Heading({ level, children }) {
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

function List({ ordered, children }) {
    return <div className={ordered ? "list-decimal" : "list-disc"}>{children}</div>;
}

function Emphasis({ children }) {
    return <div className="text-xs italic">{children}</div>;
}

export default function Post({ post }) {
    const time = Math.round(post.content.split(" ").length / 200);
    const description = `${post.content.substring(0, 100)}...`;

    return (
        <>
            <Head>
                <title>{post.name}</title>
                <meta name="twitter:title" content={post.name} key="twitter-title" />
                <meta name="twitter:description" content={description} key="twitter-description" />
                <meta name="description" content={description} key="description" />
                <meta property="og:title" content={post.name} key="og-title" />
                <meta property="og:image" content={post.image} key="og-image" />
                <meta property="og:description" content={description} key="og-description" />
            </Head>
            <div className="flex justify-center mb-16">
                <div className="w-10/12 md:w-8/12 lg:w-6/12 mt-36 relative">
                    <div className="font-bold text-base text-gray-400">
                        <div className="absolute right-0">
                            <Link href={`/blog`}>
                                <a>
                                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                                </a>
                            </Link>
                        </div>
                        <div className="inline-block">{post.date}</div>
                        <div className="inline-block mx-3">·</div>
                        <div className="inline-block">{time} min read</div>
                    </div>
                    <div className="font-bold text-3xl">{post.name}</div>
                    <div className="mt-3 text-justify">
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
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const paths = get_posts().map((post) => `/blog/${post.path}`);
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const posts = get_posts();
    const post = posts.find((p) => p.path == params.id);

    return {
        props: {
            post,
        },
    };
}
