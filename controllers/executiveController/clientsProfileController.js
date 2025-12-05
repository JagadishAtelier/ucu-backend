const ClientsProfile = require("../../Model/ExecutiveEduPageModel/clientsProfile");

// CREATE
exports.createClientsProfile = async (req, res) => {
  try {
    const data = new ClientsProfile(req.body);
    const saved = await data.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL
exports.getAllClientsProfile = async (req, res) => {
  try {
    const data = await ClientsProfile.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET BY ID
exports.getClientsProfileById = async (req, res) => {
  try {
    const data = await ClientsProfile.findById(req.params.id);

    if (!data)
      return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE
exports.updateClientsProfile = async (req, res) => {
  try {
    const updated = await ClientsProfile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE
exports.deleteClientsProfile = async (req, res) => {
  try {
    const deleted = await ClientsProfile.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({
      success: true,
      message: "Deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
