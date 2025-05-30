const express = require("express")
const router = express.Router()

//Index 
router.get("/", (req, res) => {
    res.send("GET for posts")
})

//Show 
router.get("/:id", (req, res) => {
    res.send("GET for show posts id")
})

//Post
router.post("/", (req, res) => {
    res.send("POST for posts")
})

//Delete 
router.delete("/:id", (req, res) => {
    res.send("DELETE for Post id")
})

module.exports = router;