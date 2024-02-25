const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    id:String,
    product:String,
    image:String,
    company:String,
    model:String,
    price:String,
    category:String,
    description:String
})

const MobileProductModel = mongoose.model("mobiles", ProductSchema)

module.exports = MobileProductModel;