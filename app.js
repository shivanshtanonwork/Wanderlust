const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Listing = require("./models/listing")

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust'
async function main() {
    await mongoose.connect(MONGO_URL);
}

main().then(() => {
    console.log('connected to DB')
}).catch((err) => {
    console.log(err)
})

app.get("/", (req, res) => {
    res.send("Hi, I am root")
})

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My new villa",
        description: "by the beach",
        price: 1200,
        location: "Calangute Goa",
        country: "India",
    })
    await sampleListing.save()
    console.log("Sample saved")
    res.send("Successfull Testing   ")
})

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})