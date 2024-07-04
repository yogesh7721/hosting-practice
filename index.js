const express = require("express")

const app = express()

app.use(express.static("dist"))

app.use("/api/users", (req, res) => {
    res.json({ message: "User Fetch Success" })
})
app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})

app.listen(process.env.PORT || 5000, console.log("SERVER RUNNING"))