const StrategicCollab = require("../../Model/ExecutiveEduPageModel/StrategicInternationalCollab");

// ------------------------------------------------------------
// CREATE STRATEGIC PAGE (If SAME TITLE → Add Inside Existing Page)
// ------------------------------------------------------------
exports.createStrategic = async (req, res) => {
  try {
    const { gridHead, data } = req.body;

    // Check for existing gridHead (case-insensitive)
    const existing = await StrategicCollab.findOne({
      gridHead: { $regex: new RegExp("^" + gridHead + "$", "i") }
    });

    if (existing) {

      // If incoming data is array → push all
      if (Array.isArray(data)) {
        existing.data.push(...data);
      } 
      // If single object → push single
      else if (data) {
        existing.data.push(data);
      }

      await existing.save();

      return res.status(200).json({
        success: true,
        message: "Data added to existing gridHead",
        data: existing,
      });
    }

    // No match → Create new doc
    const newDoc = await StrategicCollab.create(req.body);

    return res.status(201).json({
      success: true,
      message: "New Strategic Collaboration created successfully",
      data: newDoc,
    });

  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};


// ------------------------------------------------------------
// GET ALL
// ------------------------------------------------------------
exports.getAllCollab = async (req, res) => {
  try {
    const list = await StrategicCollab.find();

    res.status(200).json({
      success: true,
      data: list,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ------------------------------------------------------------
// GET COLLAB BY gridHead
// ------------------------------------------------------------
exports.getByGridHead = async (req, res) => {
  try {
    const { gridHead } = req.params;

    const item = await StrategicCollab.findOne({
      gridHead: { $regex: new RegExp("^" + gridHead + "$", "i") }
    });

    if (!item) {
      return res.status(404).json({ success: false, message: "No data found for this gridHead" });
    }

    res.status(200).json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// GET SINGLE
// ------------------------------------------------------------
exports.getSingleCollab = async (req, res) => {
  try {
    const item = await StrategicCollab.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    res.status(200).json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ------------------------------------------------------------
// UPDATE
// ------------------------------------------------------------
exports.updateCollab = async (req, res) => {
  try {
    const updated = await StrategicCollab.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Updated successfully",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ------------------------------------------------------------
// DELETE
// ------------------------------------------------------------
exports.deleteCollab = async (req, res) => {
  try {
    await StrategicCollab.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ------------------------------------------------------------
// ADD DATA inside data[]
// ------------------------------------------------------------
exports.addCollabData = async (req, res) => {
  try {
    const collab = await StrategicCollab.findById(req.params.id);

    if (!collab) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    collab.data.push(req.body);
    await collab.save();

    res.status(200).json({
      success: true,
      message: "Data added",
      data: collab,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ------------------------------------------------------------
// UPDATE SINGLE DATA OBJECT
// ------------------------------------------------------------
exports.updateCollabData = async (req, res) => {
  try {
    const { id, dataId } = req.params;

    const collab = await StrategicCollab.findById(id);
    if (!collab) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    const dataObj = collab.data.id(dataId);
    if (!dataObj) {
      return res.status(404).json({ success: false, message: "Data not found" });
    }

    Object.assign(dataObj, req.body);
    await collab.save();

    res.status(200).json({
      success: true,
      message: "Data updated",
      data: collab,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ------------------------------------------------------------
// DELETE SINGLE DATA OBJECT
// ------------------------------------------------------------
exports.deleteCollabData = async (req, res) => {
  try {
    const { id, dataId } = req.params;

    const collab = await StrategicCollab.findById(id);
    if (!collab) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    const dataObj = collab.data.id(dataId);
    if (!dataObj) {
      return res.status(404).json({ success: false, message: "Data not found" });
    }

    dataObj.deleteOne();
    await collab.save();

    res.status(200).json({
      success: true,
      message: "Data deleted",
      data: collab,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
