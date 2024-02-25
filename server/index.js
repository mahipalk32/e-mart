const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const MensProductModel = require("./models/MeasProductModel")
const KitchenProductModel = require("./models/KitchenProductModel")
const MobileProductModel = require("./models/MobilesProductModel")
const TvProductModel = require("./models/TvProductModel")
const WatchProductModel = require("./models/WatchProductModel")
const WomenProductModel = require("./models/WomenProductModel")

const PORT = process.env.PORT || 5000;

const app = express();
const DB =
    "mongodb+srv://mahipalkeluth143:uK0niUwwZG9FOCHp@majordb.cb49png.mongodb.net/e-mart?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((res) => {
    console.log("Atlas Connected")
})
    .catch((err) => {
        console.log(err);
    })

app.use(express.json());
app.use(cors())

// Get the Products */
app.get("/get-mens-wear", (req, res) => {
    MensProductModel.find()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

app.get("/get-women-wear", (req, res) => {
    WomenProductModel.find()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})
app.get("/get-mobile", (req, res) => {
    MobileProductModel.find()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})
app.get("/get-kitchen", (req, res) => {
    KitchenProductModel.find()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

app.get("/get-tv", (req, res) => {
    TvProductModel.find()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})
app.get("/get-watch", (req, res) => {
    WatchProductModel.find()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

app.listen(PORT, () => {
    console.log("Server Connected");
})