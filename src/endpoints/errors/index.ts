import { Application } from "express"
import path from "path"

export = (app: Application, config: any) => {
    app.get('/404', async (req, res) =>  {
        return res
                .status(200)
                .render(path.join("../public/errors/404.ejs"), {})
    })

    // app.get('/*', async (req, res) => {
    //     return res
    //             .status(404)
    //             .redirect('/404')
    // })
}