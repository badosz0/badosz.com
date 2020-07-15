

import { Application } from "express"

export = (app: Application, config: any) => {
    // @TODO do this in panel
    app.get('/:id', async (req, res) => {
        if (config.redirect.hasOwnProperty(req.params.id)) {
            return res.status(200)
                      .redirect(config.redirect[req.params.id])
        } 
        else {
            return res.status(200)
                      .redirect('/404')
        }
    })
}