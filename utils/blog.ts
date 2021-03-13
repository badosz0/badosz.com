import { readdirSync, readFileSync } from "fs"

export function get_posts() {
    let posts = readdirSync(`./blog`)

    return posts.map(post => {
        const data = readFileSync(`./blog/${post}`, "utf-8").split(/\r?\n/)

        const name = data[0]
        const date = data[1]
        data.splice(0, 2)

        return {
            name,
            date,
            path: post.replace(".md", ""),
            content: data.join("\n")
        }
    })
}