import express  from "express"
import body_parser from "body-parser"
import { renderFile } from "ejs"
import { log } from "./utils/logger"

import cookie_parser from "cookie-parser"
// @ts-ignore
import minify_html from "express-minify-html"
const config = require("../config.json")
const app = express()

app.use(body_parser.text({
    type: "*/*"
}))
app.use(minify_html({
    override:      true,
    exception_url: false,
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true
    }
}))
app.use(cookie_parser())
app.use("/public", express.static("./public"))
app.engine("html", renderFile)
app.set("view engine", "ejs")


require("./endpoints/homepage")(app, config)

app.listen(config.port, () =>
    log("info", `Website started. (${config.port})`)
)