const mongoose = require('mongoose')
const { Schema } = mongoose
const Review = require("./review")

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
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } })
    }
})

//Creating our model
const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing;

