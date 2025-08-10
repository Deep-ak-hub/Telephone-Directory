const contactsRouter = require("express").Router()
const contactsController = require("./contacts.controller")

contactsRouter.post('/createContact', contactsController.createContact)
contactsRouter.get('/contactList', contactsController.getAllContactsList)
contactsRouter.post('/updateContact', contactsController.updateContact)
contactsRouter.delete('/deleteContact', contactsController.deleteContact)

contactsRouter.get('/searchContacts', contactsController.searchContactsByName)

contactsRouter.post('/markPotentialContact', contactsController.markContactAsPotential)
contactsRouter.get('/potentialContacts', contactsController.getPotentialContacts)

module.exports = contactsRouter
