const express = require("express")
const ejsmate = require("ejs-mate")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.engine("ejs", ejsmate)
app.set("view engine", "ejs")

// < ------------------------------------------------------------------------------- >

app.get("/", (req, res) => {
    let home = 1
    let id = 0
    res.render("home.ejs", { id,home})
})

app.get("/:id", (req, res) => {
    id = req.params["id"]
    let home = 0
    res.render("map.ejs", { id,home })
})

app.listen(3000, () => {
})