const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Listing = require("./models/listing")
const path = require("path")
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate")
const wrapAsync = require("./utils/wrapAsync")
const ExpressError = require("./utils/ExpressError")
const { listingSchema, reviewSchema } = require("./schema")
const Review = require("./models/review")

const listings = require("./routes/listing")

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust'
async function main() {
    await mongoose.connect(MONGO_URL);
}

main().then(() => {
    console.log('connected to DB')
}).catch((err) => {
    console.log(err)
})

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.send("Hi, I am root")
})



const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body)
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, errMsg)
    } else {
        next()
    }
}

app.use("/listings", listings)

//Reviews
//Post Route
app.post("/listings/:id/reviews",
    validateReview,
    wrapAsync(async (req, res) => {
        let listing = await Listing.findById(req.params.id)
        let newReview = new Review(req.body.review)

        listing.reviews.push(newReview)

        await newReview.save()
        await listing.save()
        // console.log("new review saved")
        // res.send("New Review Saved")
        res.redirect(`/listings/${listing._id}`)
    }))

// Delete Review Route
app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
    await Review.findByIdAndDelete(reviewId)

    res.redirect(`/listings/${id}`)
}))

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My new villa",
//         description: "by the beach",
//         price: 1200,
//         location: "Calangute Goa",
//         country: "India",
//     })
//     await sampleListing.save()
//     console.log("Sample saved")
//     res.send("Successfull Testing   ")
// })

app.all('{*splat}', (req, res, next) => {
    next(new ExpressError(404, "Page not found!"))
})

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err
    // res.status(statusCode).send(message)
    res.status(statusCode).render("error.ejs", { message })
})

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})