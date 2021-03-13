import { readdirSync, readFileSync } from "fs"

export function get_posts() {
    let posts = readdirSync(`./blog`)

    return posts.map(post => {
        const data = readFileSync(`./blog/${post}`, "utf-8").split(/\r?\n/)

        const name = data[0]
        const date = data[1]
        const image = data[2]
        
        data.splice(0, 3)

        return {
            name,
            date,
            image,
            path: post.replace(".md", ""),
            content: data.join("\n")
        }
    })
}