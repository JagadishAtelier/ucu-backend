const Media = require("../../Model/MediaModel/MediaPage");

// ------------------------------------------------------------
// CREATE OR PUSH (If gridHead exists → push inside data array)
// ------------------------------------------------------------
exports.createOrUpdateMedia = async (req, res) => {
  try {
    const { gridHead, data } = req.body;

    // Check if gridHead exists
    let existing = await Media.findOne({ gridHead });

    if (existing) {

      // FIX: push items correctly
      existing.data.push(...data);

      await existing.save();

      return res.status(200).json({
        success: true,
        message: "New media item added to existing gridHead",
        data: existing,
      });
    }

    // Create new document
    const newMedia = await Media.create(req.body);

    res.status(201).json({
      success: true,
      message: "New Media group created",
      data: newMedia,
    });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ------------------------------------------------------------
// GET ALL MEDIA
// ------------------------------------------------------------
exports.getAllMedia = async (req, res) => {
  try {
    const all = await Media.find();
    res.status(200).json({ success: true, data: all });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ------------------------------------------------------------
// GET MEDIA BY gridHead
// ------------------------------------------------------------
exports.getMediaByGridHead = async (req, res) => {
  try {
    const { gridHead } = req.params;

    const media = await Media.findOne({ gridHead });

    if (!media)
      return res
        .status(404)
        .json({ success: false, message: "No media found for this gridHead" });

    res.status(200).json({ success: true, data: media });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ------------------------------------------------------------
// UPDATE MEDIA DOCUMENT (not individual data item)
// ------------------------------------------------------------
exports.updateMedia = async (req, res) => {
  try {
    const updated = await Media.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ------------------------------------------------------------
// DELETE MEDIA DOCUMENT
// ------------------------------------------------------------
exports.deleteMedia = async (req, res) => {
  try {
    await Media.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Media deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ------------------------------------------------------------
// DELETE ONE DATA ITEM INSIDE ARRAY
// ------------------------------------------------------------
exports.deleteMediaItem = async (req, res) => {
  try {
    const { mediaId, itemId } = req.params;

    const updated = await Media.findByIdAndUpdate(
      mediaId,
      { $pull: { data: { _id: itemId } } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Media item removed",
      data: updated,
    });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
