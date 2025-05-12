const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Listing = require("./models/listing")
const path = require("path")

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

app.get("/", (req, res) => {
    res.send("Hi, I am root")
})

//Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({})
    res.render("listings/index.ejs", { allListings })
})

//New/Create Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs")
})

//Show Route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    res.render("listings/show.ejs", { listing })
})

//Create Route
app.post("/listings", async (req, res) => {
    // let { title, description, image, price, country, location } = req.body
    const newListing = new Listing(req.body.listing)
    await newListing.save()
    res.redirect("/listings")
})

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

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})