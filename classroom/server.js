const express = require('express')
const app = express()
const users = require("./routes/user")
const posts = require("./routes/post")
const session = require("express-session")
const flash = require("connect-flash")
const path = require("path")

app.use("/posts", posts)

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
}
app.use(session(sessionOptions))
app.use(flash());

app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success")
    res.locals.errorMsg = req.flash("error")
    next()
})

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name
    if (name === "anonymous") {
        req.flash('error', 'user not registered!')
    } else {
        req.flash('success', 'user registered successfully!')

    }
    res.redirect("/hello")
})

app.get("/hello", (req, res) => {
    res.render("page.ejs", { name: req.session.name })
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
//