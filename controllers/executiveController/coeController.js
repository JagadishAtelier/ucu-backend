const COE = require("../../Model/ExecutiveEduPageModel/COEPage");

// ------------------------------------------------------------
// CREATE OR PUSH DATA (IF gridHead EXISTS → PUSH DATA)
// ------------------------------------------------------------
exports.createOrUpdateCOE = async (req, res) => {
  try {
    const { title, content, gridHead, data } = req.body;

    // 1️⃣ Check if gridHead already exists
    let existing = await COE.findOne({ gridHead });

    if (existing) {
      // 2️⃣ Push new data into existing document
      existing.data.push(data);
      await existing.save();

      return res.status(200).json({
        success: true,
        message: "Data added to existing gridHead",
        data: existing,
      });
    }

    // 3️⃣ Create new document if gridHead not found
    const newCOE = await COE.create(req.body);

    res.status(201).json({
      success: true,
      message: "New COE entry created",
      data: newCOE,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ------------------------------------------------------------
// GET ALL COE
// ------------------------------------------------------------
exports.getAllCOE = async (req, res) => {
  try {
    const all = await COE.find();
    res.status(200).json({ success: true, data: all });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ------------------------------------------------------------
// GET BY gridHead
// ------------------------------------------------------------
exports.getByGridHead = async (req, res) => {
  try {
    const { gridHead } = req.params;

    const result = await COE.findOne({ gridHead });

    if (!result)
      return res
        .status(404)
        .json({ success: false, message: "No record found" });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ------------------------------------------------------------
// UPDATE COE BY ID
// ------------------------------------------------------------
exports.updateCOE = async (req, res) => {
  try {
    const updated = await COE.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ------------------------------------------------------------
// DELETE COE BY ID
// ------------------------------------------------------------
exports.deleteCOE = async (req, res) => {
  try {
    await COE.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
