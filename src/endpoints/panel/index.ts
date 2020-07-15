import { Application } from "express"
import path from "path"

export = (app: Application, config: any) => {
    app.get('/panel', async (req, res) =>  {
        return res
                .status(200)
                .render(path.join("../public/panel/index.ejs"), {})
    })
}