const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    id:String,
    product:String,
    image:String,
    brand:String,
    model:String,
    price:String,
    category:String,
    description:String
})

const TvProductModel = mongoose.model("tv", ProductSchema)

module.exports = TvProductModel;