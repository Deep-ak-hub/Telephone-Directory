const potentialContactsRouter = require('express').Router()
const potentialContactsController = require('./potentialContacts.controller')

potentialContactsRouter.get("/getPotentialContacts", potentialContactsController.getPotentialContact)
potentialContactsRouter.delete("/deletePotentialContacts", potentialContactsController.removeFromPotentialContact)

module.exports = potentialContactsRouter