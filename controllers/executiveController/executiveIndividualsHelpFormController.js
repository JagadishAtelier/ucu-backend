const ExecutiveIndividualsHelpForm = require("../../Model/ExecutiveEduPageModel/ExecutiveIndividualsHelpForm");

// CREATE FORM ENTRY
exports.createHelpForm = async (req, res) => {
  try {
    const form = await ExecutiveIndividualsHelpForm.create(req.body);
    res.status(201).json({ success: true, data: form });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL FORM ENTRIES
exports.getAllHelpForms = async (req, res) => {
  try {
    const forms = await ExecutiveIndividualsHelpForm.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: forms });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET SINGLE FORM ENTRY
exports.getSingleHelpForm = async (req, res) => {
  try {
    const form = await ExecutiveIndividualsHelpForm.findById(req.params.id);

    if (!form) {
      return res.status(404).json({ success: false, message: "Form not found" });
    }

    res.status(200).json({ success: true, data: form });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE FORM ENTRY
exports.deleteHelpForm = async (req, res) => {
  try {
    const form = await ExecutiveIndividualsHelpForm.findByIdAndDelete(req.params.id);

    if (!form) {
      return res.status(404).json({ success: false, message: "Form not found" });
    }

    res.status(200).json({ success: true, message: "Form entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
