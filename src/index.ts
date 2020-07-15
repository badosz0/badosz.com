import express  from "express"
import body_parser from "body-parser"
import { renderFile } from "ejs"
import { log } from "./utils/logger"

const cookie_parser = require('cookie-parser')
const config = require("../config.json")
const app = express()
const minify_html = require('express-minify-html')

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
require("./endpoints/milkscript")(app, config)
require("./endpoints/panel")(app, config)
require("./endpoints/errors")(app, config)

app.listen(config.port, () =>
    log("info", `Website started. (${config.port})`)
)