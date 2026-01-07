require("dotenv").config()
const express = require("express")

const app = express()

const port = process.env.PORT
const username = process.env.APP_USERNAME

app.get("/", (req, res)=>{
    res.send("Hello World!")
})

app.get("/twitter", (req, res) => {
    res.send("abhi10600")
})

app.get("/login", (req, res) =>{
    res.send("<h1>Please login to continue</h1>")
})

app.get("/register", (req, res) => {
    res.send("<h2>Create Your Account</h2>")
})

app.get("/test", (req, res) => {
    res.json({
        status: true,
        "message": `Welcome ${username}`
    })
})

app.get("/username", (req, res) => {
    res.json({
        email: "abhi10sheksharma@gmail.com",
        name: "Abhishek Sharma",
        age: 25,
        city: "Kolkata"
    })
})

app.listen(port, ()=> {
    console.log(`Server running on PORT ${port}`)
})