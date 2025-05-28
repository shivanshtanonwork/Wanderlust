const express = require('express')
const app = express()
const users = require("./routes/user")
const posts = require("./routes/post")
const session = require("express-session")
// const cookieParser = require("cookie-parser")

// app.use(cookieParser("secretcode"))

// app.get("/getsignedcookies", (req, res) => {
//     res.cookie("made-in", " INDIA", { signed: true })
//     res.send("Signed cookie sent")
// })

// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies)
//     res.send("verified")
// })

// // Cookie middleware
// app.get("/getcookies", (req, res) => {
//     res.cookie("greet", "Namaste")
//     res.cookie("madeIn", "INDIA")
//     res.send("Sent you some cookies!")
// })

// app.get("/greet", (req, res) => {
//     let { name = "anonymous" } = req.cookies
//     res.send(`Hi ${name}`)
// })

// app.get("/", (req, res) => {
//     console.dir(req.cookies)   // passed middleware
//     res.send("Hi I'm Root")
// })

// app.use("/users", users)
// app.use("/posts", posts)

app.use(session({ secret: "mysupersecretstring" }))

app.get("/test", (req, res) => {
    res.send("test successful!")
})
app.listen(3000, () => {
    console.log("Listening on port 3000")
})