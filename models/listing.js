const mongoose = require('mongoose')
const { Schema } = mongoose

const listingSchema = new Schema({   //Created our Schema
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://media.istockphoto.com/id/825319778/photo/sunset-on-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=vh8kD3q4WUMTZsdsC678GCPMm_y13ncqQ-K_WVLz5Zk=",
        set: (v) => v === "" ? "https://media.istockphoto.com/id/825319778/photo/sunset-on-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=vh8kD3q4WUMTZsdsC678GCPMm_y13ncqQ-K_WVLz5Zk=" : v,
    },
    price: Number,
    location: String,
    country: String,
})

//Creating our model
const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing;

