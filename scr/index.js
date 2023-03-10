const express = require("express")
const ejsmate = require("ejs-mate")
const { initializeApp } = require("firebase/app");
const path = require("path")
const { getDatabase, onValue, ref } = require("firebase/database");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding")
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');



const mapboxtoken = "pk.eyJ1Ijoia2FydGhpa2V5YW5iYWxhamkiLCJhIjoiY2xlbXZvajRsMDdnODN5bzh0dW94MDdsaSJ9.nAKCXeUn9ulAsNwit8IqmA"
const geocoder = mbxGeocoding({ accessToken: mapboxtoken })

const app = express()

app.use(express.static(path.join(__dirname, "public")))

const firebaseConfig = { databaseURL: "https://locationtracker-62c3f-default-rtdb.firebaseio.com/", };
const app2 = initializeApp(firebaseConfig);
const database = getDatabase(app2);

app.engine("ejs", ejsmate)
app.set("view engine", "ejs")

// < ------------------------------------------------------------------------------- >

const db = getDatabase();
const d = ref(db, "users/");

onValue(d, (snapshot) => {
    datas = snapshot.val()
    console.log(datas)
})

app.get("/", (req, res) => {
    res.render("home.ejs", { datas })
})

app.get("/:id", (req, res) => {
    id = req.params["id"]
    try {
        lat = datas[id].lat
        lon = datas[id].lon
    } catch {
        res.send("Can't Find Location")
    }
    res.render("map.ejs", { lat, lon })

})

app.listen(3000, () => {
})

