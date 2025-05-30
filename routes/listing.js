const express = require('express')
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require("../utils/ExpressError")
const { listingSchema } = require("../schema")
const Listing = require("../models/listing")
const { isLoggedIn } = require("../middleware")

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
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({})
    res.render("listings/index.ejs", { allListings })
}))

//New/Create Route
router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new.ejs")
})

//Show Route
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews")
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!")
        return res.redirect("/listings")
    }
    res.render("listings/show.ejs", { listing })
}))


//Create Route
router.post("/", isLoggedIn, validateListing, wrapAsync(async (req, res, next) => {
    // let { title, description, image, price, country, location } = req.body
    const newListing = new Listing(req.body.listing)
    await newListing.save()
    req.flash("success", "New Listing Created!")
    res.redirect("/listings")
}))

//Edit Route 
router.get("/:id/edit", isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params
    const listing = await Listing.findById(id)
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!")
        return res.redirect("/listings")
    }
    res.render("listings/edit.ejs", { listing })
}))

//Update Route
router.put("/:id", isLoggedIn, validateListing, wrapAsync(async (req, res) => {
    if (!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listing")
    }
    let { id } = req.params
    await Listing.findByIdAndUpdate(id, { ...req.body.listing })
    req.flash("success", "Listing Updated!")
    res.redirect(`/listings/${id}`)
}))

//Delete Route
router.delete("/:id", isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params
    let deletedListing = await Listing.findByIdAndDelete(id)
    console.log(deletedListing)
    req.flash("success", "Listing Deleted!")
    res.redirect("/listings")
}))

module.exports = router;

