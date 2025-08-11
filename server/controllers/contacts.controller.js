const Contact = require("../models/contacts.model");

class ContactsController {
  createContact = async (req, res, next) => {
    try {
      const { name, phone, email, address } = req.body;

      const newContact = await Contact.create({
        name,
        phone,
        email,
        address,
        isPotential: isPotential || false,
      });

      res.json({
        data: newContact,
        message: "Contact added successfully",
        status: "OK",
      });
    } catch (err) {
      next(err);
    }
  };

  getAllContactsList = async (req, res, next) => {
    try {
      const { isPotential } = req.query;

      const filter = {};
      if (!isPotential) {
        filter.isPotential = isPotential === "true";
      }

      const contacts = await Contact.find();
      res.json({
        data: contacts,
        message: "Contact fetched successfully",
        status: "OK",
      });
    } catch (err) {
      next(err);
    }
  };

  updateContact = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updated = await Contact.findByIdAndUpdate(id, req, body, {
        new: true,
      });

      if (!updated) {
        return res
          .status(404)
          .json({ message: "Contacts not found", status: "FAIL" });
      }

      res.json({
        data: updated,
        message: "Contact updated successfully",
        status: "OK",
      });
    } catch (err) {
      next(err);
    }
  };

  deleteContact = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleted = await Contact.findByIdAndDelete(id);

      if (!deleted) {
        return res
          .status(404)
          .json({ message: "Contacts not found", status: "FAIL" });
      }

      res.json({
        message: "Contact deleted successfully",
        status: "OK",
      });
    } catch (err) {
      next(err);
    }
  };

  searchContactsByName = async (req, res, next) => {
    try {
      const { name } = req.query;
      const results = await Contact.find({ name: new RegExp(name, "i") });

      res.json({
        data: results,
        message: "Contact fetched successfully",
        status: "OK",
      });
    } catch (err) {
      next(err);
    }
  };

  markContactAsPotential = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updated = Contact.findByIdAndUpdate(
        id,
        { isPotential: true },
        { new: true }
      );

      if (!updated) {
        return res
          .status(404)
          .json({ message: "Contact not found", status: "FAIL" });
      }

      res.json({
        data: updated,
        message: "Contact marked as potential successfully",
        status: "OK",
      });
    } catch (err) {
      next(err);
    }
  };

  getPotentialContacts = async (req, res, next) => {
    try {
      const potentials = await Contact.find({ isPotential: true });
      res.json({
        data: potentials,
        message: "Potential Contacts fetched successfully",
        status: "OK",
      });
    } catch (err) {
      next(err);
    }
  };
}

const contactsController = new ContactsController();

module.exports = contactsController;
