const Contact = require("../Model/ContactUsModel");

/**
 * CREATE Contact Page Data
 */
exports.createContact = async (req, res) => {
  try {
    const contactData = req.body;

    const contact = new Contact(contactData);
    await contact.save();

    res.status(201).json({
      success: true,
      message: "Contact data created successfully",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating contact data",
      error: error.message,
    });
  }
};

/**
 * GET Contact Page Data (Single)
 */
exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact data not found",
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching contact data",
      error: error.message,
    });
  }
};

/**
 * UPDATE Contact Page Data
 */
exports.updateContact = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({
        success: false,
        message: "Contact data not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact data updated successfully",
      data: updatedContact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating contact data",
      error: error.message,
    });
  }
};

/**
 * DELETE Contact Page Data
 */
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({
        success: false,
        message: "Contact data not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting contact data",
      error: error.message,
    });
  }
};
