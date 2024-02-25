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

const KitchenProductModel = mongoose.model("kitchen", ProductSchema)

module.exports = KitchenProductModel;