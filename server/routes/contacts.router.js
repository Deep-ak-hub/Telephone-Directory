const contactsRouter = require("express").Router()
const contactsController = require("../controllers/contacts.controller")
const validateBodyData = require("../middleware/validator.middleware")
const { createContactDTO } = require("../validators/contacts/create-contact.validator")
const { updateContactDTO } = require("../validators/contacts/update-contact.validator")

contactsRouter.post('/createContact', validateBodyData(createContactDTO) ,contactsController.createContact)
contactsRouter.get('/contactList', contactsController.getAllContactsList)
contactsRouter.post('/updateContact', validateBodyData(updateContactDTO) ,contactsController.updateContact)
contactsRouter.delete('/deleteContact', contactsController.deleteContact)

contactsRouter.get('/searchContacts', contactsController.searchContactsByName)

contactsRouter.post('/markPotentialContact', contactsController.markContactAsPotential)
contactsRouter.get('/potentialContacts', contactsController.getPotentialContacts)

module.exports = contactsRouter
