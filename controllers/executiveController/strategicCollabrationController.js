const StrategicCollab = require("../../Model/ExecutiveEduPageModel/StrategicCollab");

// ------------------------------------------------------------
// CREATE STRATEGIC PAGE (If SAME gridHead → Add Inside Existing Page)
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
// GET ALL STRATEGIC COLLABRATIONS
// ------------------------------------------------------------
exports.getAllCollab = async (req, res) => {
  try {
    const data = await StrategicCollab.find();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// GET SINGLE STRATEGIC COLLABRATION
// ------------------------------------------------------------
exports.getSingleCollab = async (req, res) => {
  try {
    const item = await StrategicCollab.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: "Not Found" });
    }

    res.status(200).json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
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
// UPDATE STRATEGIC COLLABRATION
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
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// DELETE STRATEGIC COLLABRATION
// ------------------------------------------------------------
exports.deleteCollab = async (req, res) => {
  try {
    await StrategicCollab.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// ADD DATA INSIDE data[]
// ------------------------------------------------------------
exports.addCollabData = async (req, res) => {
  try {
    const collab = await StrategicCollab.findById(req.params.id);

    if (!collab) {
      return res.status(404).json({ success: false, message: "Not Found" });
    }

    collab.data.push(req.body);
    await collab.save();

    res.status(200).json({
      success: true,
      message: "Data added",
      data: collab,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// UPDATE SINGLE DATA ITEM INSIDE data[]
// ------------------------------------------------------------
exports.updateCollabData = async (req, res) => {
  try {
    const { id, dataId } = req.params;

    const collab = await StrategicCollab.findById(id);
    if (!collab) {
      return res.status(404).json({ success: false, message: "Not Found" });
    }

    const item = collab.data.id(dataId);
    if (!item) {
      return res.status(404).json({ success: false, message: "Data item not found" });
    }

    Object.assign(item, req.body); // update values
    await collab.save();

    res.status(200).json({
      success: true,
      message: "Data updated",
      data: collab,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ------------------------------------------------------------
// DELETE SINGLE DATA ITEM FROM data[]
// ------------------------------------------------------------
exports.deleteCollabData = async (req, res) => {
  try {
    const { id, dataId } = req.params;

    const collab = await StrategicCollab.findById(id);
    if (!collab) {
      return res.status(404).json({ success: false, message: "Not Found" });
    }

    const item = collab.data.id(dataId);
    if (!item) {
      return res.status(404).json({ success: false, message: "Data item not found" });
    }

    item.deleteOne();
    await collab.save();

    res.status(200).json({
      success: true,
      message: "Data deleted",
      data: collab,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
