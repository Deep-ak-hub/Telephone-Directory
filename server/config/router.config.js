const router = require("express").Router()

const authRouter = require("../routes/auth.router")
const contactsRouter = require("../routes/contacts.router")


router.use("/auth", authRouter)
router.use("/contacts", contactsRouter)


module.exports = router
