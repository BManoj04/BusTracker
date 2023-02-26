const express = require("express")
const ejsmate = require("ejs-mate")
const {initializeApp} = require("firebase/app");
const path = require("path")
const { getDatabase,onValue,ref} = require("firebase/database");

const app = express()

app.use(express.static(path.join(__dirname,"public")))

const firebaseConfig = {databaseURL: "https://locationtracker-62c3f-default-rtdb.firebaseio.com/",};
const app2 = initializeApp(firebaseConfig);
const database = getDatabase(app2);

app.engine("ejs",ejsmate)
app.set("view engine","ejs")

//< ------------------------------------------------------------------------------- >//

const db = getDatabase();
const d = ref(db,"users/");

onValue(d,(snapshot) => {
    datas = snapshot.val()
    console.log(datas)
})

app.get("/",(req,res) => {
    res.render("home.ejs",{datas})
})

app.listen(3000,() => {
})

