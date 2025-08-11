const express = require("express")
const router = require("./router.config.js")
const ErrorHandler = require("../middleware/error-handling.middleware.js")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')


// app.get('/', (req, res, next) => {
//     res.send("API is running")
// })


// Parser
app.use(express.json({
    limit: "5mb"
}))

app.use(express.urlencoded({
    limit: "5mb"
}))

app.use("/api/v1", router)
app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) => {
    next({
        error: null,
        message: "not found",
        status: "NOT_FOUND_ERR"
    })
})

app.use(ErrorHandler)

module.exports = app
