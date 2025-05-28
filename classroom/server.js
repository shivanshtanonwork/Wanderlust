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

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
}
app.use(session(sessionOptions))

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name
    res.redirect("/hello")
})

app.get("/hello", (req, res) => {
    res.send(`hello, ${req.session.name}`)
})

// app.get("/reqcount", (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`You sent a request ${req.session.count} times`)
// })

// app.get("/test", (req, res) => {
//     res.send("test successful!")
// })
app.listen(3000, () => {
    console.log("Listening on port 3000")
})