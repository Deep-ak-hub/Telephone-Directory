class PotentialContactsController {
  getPotentialContact = (req, res, next) => {
    res.json({
      data: {},
      message: "Potential Contacts fetched successfully",
      status: "OK",
    });
  };

  removeFromPotentialContact = (req, res, next) => {
    res.json({ message: "Removed from potential contacts", status: "OK" });
  };
}

const potentialContactsController = new PotentialContactsController()

module.exports = potentialContactsController