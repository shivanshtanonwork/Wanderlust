const express = require('express')
const app = express()
const users = require("./routes/user")
const posts = require("./routes/post")

app.get("/getcookies", (req, res) => {
    res.cookie("greet", "Hello")
    res.send("Sent you some cookies!")
})

app.get("/", (req, res) => {
    res.send("Hi I'm Root")
})

app.use("/users", users)
app.use("/posts", posts)

app.listen(3000, () => {
    console.log("Listening on port 3000")
})