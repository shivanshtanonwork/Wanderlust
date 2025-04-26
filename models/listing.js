const mongoose = require("mongoose");
const Schema = mongoose.Schema

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: "https://www.istockphoto.com/photo/sunset-on-beach-gm825319778-133848233",
        set: (v) => v === "" ? "https://www.istockphoto.com/photo/sunset-on-beach-gm825319778-133848233" : v,
    },
    price: Number,
    location: String,
    country: String,
})

const Listing = mongoose.model("Listing", listingSchema)
module.exports = Listing;