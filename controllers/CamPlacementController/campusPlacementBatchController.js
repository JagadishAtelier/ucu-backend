const CampusPlacementBatch = require("../../Model/CamPlacement/CamplacementBatch");

/* =========================
   CREATE
========================= */
exports.createBatch = async (req, res) => {
  try {
    const batch = new CampusPlacementBatch(req.body);
    const savedBatch = await batch.save();

    res.status(201).json({
      success: true,
      message: "Campus placement batch created successfully",
      data: savedBatch
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create batch",
      error: error.message
    });
  }
};

/* =========================
   GET ALL
========================= */
exports.getAllBatches = async (req, res) => {
  try {
    const batches = await CampusPlacementBatch.find();

    res.status(200).json({
      success: true,
      count: batches.length,
      data: batches
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch batches",
      error: error.message
    });
  }
};

/* =========================
   GET BY ID
========================= */
exports.getBatchById = async (req, res) => {
  try {
    const batch = await CampusPlacementBatch.findById(req.params.id);

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found"
      });
    }

    res.status(200).json({
      success: true,
      data: batch
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch batch",
      error: error.message
    });
  }
};

/* =========================
   UPDATE BY ID
========================= */
exports.updateBatchById = async (req, res) => {
  try {
    const updatedBatch = await CampusPlacementBatch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedBatch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Batch updated successfully",
      data: updatedBatch
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update batch",
      error: error.message
    });
  }
};

/* =========================
   DELETE BY ID
========================= */
exports.deleteBatchById = async (req, res) => {
  try {
    const deletedBatch = await CampusPlacementBatch.findByIdAndDelete(req.params.id);

    if (!deletedBatch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Batch deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete batch",
      error: error.message
    });
  }
};
