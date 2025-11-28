const Strategic = require("../../Model/ExecutiveEduPageModel/StrategicPageModel");

// ------------------------------------------------------------
// CREATE STRATEGIC PAGE (If SAME TITLE → Add Inside Existing Page)
// ------------------------------------------------------------
exports.createStrategic = async (req, res) => {
  try {
    const { gridHead, data } = req.body;

    // Check for existing gridHead (case-insensitive)
    const existing = await Strategic.findOne({
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
    const newDoc = await Strategic.create(req.body);

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
// GET ALL STRATEGIC PAGES
// ------------------------------------------------------------
exports.getAllStrategic = async (req, res) => {
  try {
    const pages = await Strategic.find();

    res.status(200).json({
      success: true,
      data: pages,
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

    const item = await Strategic.findOne({
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
// GET SINGLE STRATEGIC PAGE BY ID
// ------------------------------------------------------------
exports.getSingleStrategic = async (req, res) => {
  try {
    const page = await Strategic.findById(req.params.id);

    if (!page) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    res.status(200).json({ success: true, data: page });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ------------------------------------------------------------
// UPDATE STRATEGIC PAGE
// ------------------------------------------------------------
exports.updateStrategic = async (req, res) => {
  try {
    const updatedPage = await Strategic.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Updated successfully",
      data: updatedPage,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ------------------------------------------------------------
// DELETE STRATEGIC PAGE
// ------------------------------------------------------------
exports.deleteStrategic = async (req, res) => {
  try {
    await Strategic.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ------------------------------------------------------------
// ADD DATA (dataSchema Object) INSIDE strategicPage.data[]
// ------------------------------------------------------------
exports.addStrategicData = async (req, res) => {
  try {
    const page = await Strategic.findById(req.params.id);

    if (!page) {
      return res.status(404).json({ success: false, message: "Page not found" });
    }

    page.data.push(req.body);
    await page.save();

    res.status(200).json({
      success: true,
      message: "Data added",
      data: page,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ------------------------------------------------------------
// UPDATE A SINGLE DATA ITEM INSIDE data[]
// ------------------------------------------------------------
exports.updateStrategicData = async (req, res) => {
  try {
    const { id, dataId } = req.params;

    const page = await Strategic.findById(id);
    if (!page) {
      return res.status(404).json({ success: false, message: "Page not found" });
    }

    const dataItem = page.data.id(dataId);
    if (!dataItem) {
      return res.status(404).json({ success: false, message: "Data item not found" });
    }

    Object.assign(dataItem, req.body);
    await page.save();

    res.status(200).json({
      success: true,
      message: "Data updated",
      data: page,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ------------------------------------------------------------
// DELETE A SINGLE DATA ITEM INSIDE data[]
// ------------------------------------------------------------
exports.deleteStrategicData = async (req, res) => {
  try {
    const { id, dataId } = req.params;

    const page = await Strategic.findById(id);
    if (!page) {
      return res.status(404).json({ success: false, message: "Page not found" });
    }

    const dataItem = page.data.id(dataId);
    if (!dataItem) {
      return res.status(404).json({ success: false, message: "Data item not found" });
    }

    dataItem.deleteOne();
    await page.save();

    res.status(200).json({
      success: true,
      message: "Data deleted",
      data: page,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
