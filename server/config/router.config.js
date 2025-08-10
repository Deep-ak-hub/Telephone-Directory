const router = require("express").Router()

const authRouter = require("../modules/auth/auth.router")
const contactsRouter = require("../modules/contacts/contacts.router")
const potentialContactsRouter = require("../modules/potentialContacts/potentialContacts.router")

router.use("/auth", authRouter)
router.use("/contacts", contactsRouter)
router.use("/potentialContacts", potentialContactsRouter)

module.exports = router