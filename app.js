const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Listing = require("./models/listing")
const path = require("path")
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate")
const wrapAsync = require("./utils/wrapAsync")
const ExpressError = require("./utils/ExpressError")
const { listingSchema } = require("./schema")

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

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body)
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, errMsg)
    } else {
        next()
    }
}

//Index Route
app.get("/listings", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({})
    res.render("listings/index.ejs", { allListings })
}))

//New/Create Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs")
})

//Show Route
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    res.render("listings/show.ejs", { listing })
}))

//Create Route
app.post("/listings", validateListing, wrapAsync(async (req, res, next) => {
    // let { title, description, image, price, country, location } = req.body
    const newListing = new Listing(req.body.listing)
    await newListing.save()
    res.redirect("/listings")
}))

//Edit Route 
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params
    const listing = await Listing.findById(id)
    res.render("listings/edit.ejs", { listing })
}))

//Update Route
app.put("/listings/:id", validateListing, wrapAsync(async (req, res) => {
    if (!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listing")
    }
    let { id } = req.params
    await Listing.findByIdAndUpdate(id, { ...req.body.listing })
    res.redirect(`/listings/${id}`)
}))

//Delete Route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params
    let deletedListing = await Listing.findByIdAndDelete(id)
    console.log(deletedListing)
    res.redirect("/listings")
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