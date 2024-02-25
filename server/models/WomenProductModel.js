const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    id:String,
    product:String,
    image:String,
    type:String,
    brand:String,
    model:String,
    price:String,
    category:String,
    description:String
})

const WomenProductModel = mongoose.model("women-wear", ProductSchema)

module.exports = WomenProductModel;