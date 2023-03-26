const express = require("express")
const ejsmate = require("ejs-mate")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.engine("ejs", ejsmate)
app.set("view engine", "ejs")

// < ------------------------------------------------------------------------------- >

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/:id", (req, res) => {
    id = req.params["id"]
    res.render("map.ejs", { id })
})

app.listen(3000, () => {
})