import { Application } from "express"
import path from "path"

export = (app: Application, config: any) => {
    app.get("/:id?/:sub?", async (req, res) => {
        
        const id = req.params.id

        if (id) {
            switch (id) {
                case "home":
                case "projects":
                case "contact":
                case "blog":
                    return res
                        .status(200)
                        .render(path.join("../public/homepage/index.ejs"), { 
                            section: id, 
                            timeline: config.timeline,
                            projects: config.projects,
                            contacts: config.contacts
                        })
                default: 
                    if (config.redirect[id]) {
                        res.redirect(config.redirect[id])
                    } else {
                        return res.redirect("/home") // @TODO 404?
                    }
            }
        } else {
            return res.redirect("/home")
        }
               
    })
}