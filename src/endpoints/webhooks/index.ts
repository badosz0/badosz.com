import { Application } from "express"

const fetch = require("node-fetch")

export = (app: Application, config: any) => {
    // @TODO panel with stats, "send test" etc
    app.get('/webhook/github', async (req, res) => {
        return res.status(200).send("hello world")
    })
    
    app.post('/webhook/github', async (req, res) => {
        const githubPayload = JSON.parse(req.body)//|| webhook.test
        if (!githubPayload) return res.status(200).send("hello world")
 
        const settings = config.webhooks[githubPayload.repository.full_name]

        if (settings) 
        {
            let payload = {
                avatar_url : settings.avatar,
                username: settings.name,
                embeds : [{
                    title : `${githubPayload.commits.length} new commit${githubPayload.commits.length == 1 ? "" : "s"}`,
                    author : {
                        name : githubPayload.sender.login,
                        icon_url : githubPayload.sender.avatar_url,
                        url : githubPayload.sender.html_url
                    },
                    description: githubPayload.commits.map((commit: any) => 
                        `[[-]](${commit.url}) ${commit.message}`
                    ).join("\n"),
                    footer : { text : `${githubPayload.repository.full_name} | ${githubPayload.repository.language}`}
                }],
            }
            
            await fetch(settings.webhook, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })

        }

        return res.send({})
    })
}