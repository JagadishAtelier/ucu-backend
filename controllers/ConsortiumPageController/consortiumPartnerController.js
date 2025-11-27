const ConsortiumPartner = require("../../Model/ConsortiumPageModel/ConsortiumPartners");

// ✅ Create a new consortium partner
exports.createPartner = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newPartner = new ConsortiumPartner({ title, content });
    const savedPartner = await newPartner.save();

    res.status(201).json({
      success: true,
      message: "Consortium Partner created successfully",
      data: savedPartner,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get all consortium partners
exports.getAllPartners = async (req, res) => {
  try {
    const partners = await ConsortiumPartner.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: partners });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get a single partner by ID
exports.getPartnerById = async (req, res) => {
  try {
    const partner = await ConsortiumPartner.findById(req.params.id);
    if (!partner) {
      return res.status(404).json({ success: false, message: "Partner not found" });
    }
    res.status(200).json({ success: true, data: partner });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update partner by ID
exports.updatePartner = async (req, res) => {
  try {
    const { title, content } = req.body;

    const updatedPartner = await ConsortiumPartner.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true }
    );

    if (!updatedPartner) {
      return res.status(404).json({ success: false, message: "Partner not found" });
    }

    res.status(200).json({
      success: true,
      message: "Partner updated successfully",
      data: updatedPartner,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete partner by ID
exports.deletePartner = async (req, res) => {
  try {
    const deletedPartner = await ConsortiumPartner.findByIdAndDelete(req.params.id);
    if (!deletedPartner) {
      return res.status(404).json({ success: false, message: "Partner not found" });
    }

    res.status(200).json({
      success: true,
      message: "Partner deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
