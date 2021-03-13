import Layout from "../components/Layout"
import Link from 'next/link'
import { get_posts } from "../utils/blog"

interface BlogPostProps {
    name: string
    date: string
    link: string
}

function BlogPost({name, date, link}: BlogPostProps) {
    return (
        <Link href={link}>
            <a>
                <div className="text-base w-96 relative border-b border-gray-300 py-1.5 cursor-pointer">
                    <div className="inline-block">{name}</div>
                    <div className="inline-block absolute right-0 text-gray-400">{date}</div>
                </div>
            </a>
        </Link>
    )
}

export async function getStaticProps() {
    const posts = get_posts()

    return {
        props: {
            posts
        }
    }
}

export default function Contact({posts}) {
    return (
        <>
            <Layout section="blog">
                 <div className="mt-16 space-y-2">
                    {posts.map(post => {
                    return (
                        <BlogPost
                            name={post.name}
                            date={post.date}
                            link={`/blog/${post.path}`}
                        />)
                    })}
                </div>
            </Layout>
        </>
    )
}