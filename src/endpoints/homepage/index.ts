import { Application } from "express"
import path from "path"

export = (app: Application, config: any) => {
    app.get("/", async (req, res) => {
        return res
                .status(200)
                .render(path.join("../public/homepage/index.ejs"), {
                    section: "Home",
                })
    })

    app.get("/home", async (req, res) => {
        return res
                .status(200)
                .redirect("/")
    })

    app.get("/projects", async (req, res) => {
        return res
                .status(200)
                .render(path.join("../public/homepage/index.ejs"), {
                    section: "Projects",
                })
    })

    app.get("/contact", async (req, res) => {
        return res
                .status(200)
                .render(path.join("../public/homepage/index.ejs"), {
                    section: "Contact",
                })
    })

    app.get("/blog", async (req, res) => {
        return res
                .status(200)
                .render(path.join("../public/homepage/index.ejs"), {
                    section: "Blog",
                })
    })
}