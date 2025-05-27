const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Hi I'm Root")
})

//Index - users
app.get("/users", (req, res) => {
    res.send("GET for users")
})

//Show - users
app.get("/users/:id", (req, res) => {
    res.send("GET for show users id")
})

//Post - users
app.post("/users", (req, res) => {
    res.send("POST for users")
})

//Delete - users
app.delete("/users/:id", (req, res) => {
    res.send("DELETE for users id")
})

//Posts
//Index 
app.get("/posts", (req, res) => {
    res.send("GET for posts")
})

//Show 
app.get("/posts/:id", (req, res) => {
    res.send("GET for show posts id")
})

//Post
app.post("/posts", (req, res) => {
    res.send("POST for posts")
})

//Delete 
app.delete("/posts/:id", (req, res) => {
    res.send("DELETE for Post id")
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})