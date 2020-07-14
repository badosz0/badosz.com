import { Application } from "express"
import path from "path"

export = (app: Application, config: any) => {
    app.get('/milkscript', async (req, res) =>  {
        return res
                .status(200)
                .render(path.join("../public/milkscript/index.ejs"), {})
    })

    app.get('/milkscript/wiki', async (req, res) => {
        return res
                .status(200)
                .render(path.join("../public/milkscript/index.ejs"), {})
    })
}