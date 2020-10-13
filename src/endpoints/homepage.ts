import { Application } from "express"
import path from "path"

export = (app: Application, config: any) => {
    app.get("/:id?/:sub?", async (req, res) => {
        
        const id = req.params.id
        const sub = req.params.sub

        if (id) {
            switch (id) {
                case "home":
                case "projects":
                case "contact":
                    return res
                        .status(200)
                        .render(path.join("../public/homepage/index.ejs"), { 
                            section: id, 
                            timeline: config.timeline,
                            projects: config.projects,
                            contacts: config.contacts
                        })
                case "home.json":
                    return res.status(200).json(config.timeline)
                case "projects.json":
                    return res.status(200).json(config.projects)
                case "contact.json":
                    return res.status(200).json(config.contacts)
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