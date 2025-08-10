const express = require("express")
const router = require("./router.config.js")
const app = express()

app.get('/', (req, res, next) => {
    res.send("API is running")
})

app.use("/api/v1", router)

app.use((req, res, next) => {
    res.status(404).json({
        error: null,
        message: "not found",
        status: "NOT_FOUND_ERR"
    })
})

module.exports = app