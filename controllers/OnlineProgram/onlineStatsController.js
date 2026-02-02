const OnlineStats = require("../../Model/OnlineProgramModel/OnlineStats");

// ------------------- CREATE (Single & Bulk Combined) -------------------

exports.createOnlineStats = async (req, res) => {
  try {
    const data = req.body;

    // Check if data is an array (bulk) or a single object
    let savedStats;
    if (Array.isArray(data)) {
      if (data.length === 0) {
        return res.status(400).json({ message: "Please provide at least one stat" });
      }
      // Bulk insert
      savedStats = await OnlineStats.insertMany(data, { ordered: true });
    } else {
      // Single insert
      const newStat = new OnlineStats(data);
      savedStats = await newStat.save();
    }

    res.status(201).json(savedStats);
  } catch (error) {
    res.status(500).json({ message: "Failed to create stat(s)", error });
  }
};

// ------------------- READ -------------------

// Get all stats
exports.getAllOnlineStats = async (req, res) => {
  try {
    const stats = await OnlineStats.find();
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch stats", error });
  }
};

// Get single stat by ID
exports.getOnlineStatById = async (req, res) => {
  try {
    const stat = await OnlineStats.findById(req.params.id);
    if (!stat) return res.status(404).json({ message: "Stat not found" });
    res.status(200).json(stat);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch stat", error });
  }
};

// ------------------- UPDATE -------------------

// Update single stat by ID
exports.updateOnlineStat = async (req, res) => {
  try {
    const { count, content, iconImage } = req.body;

    const updatedStat = await OnlineStats.findByIdAndUpdate(
      req.params.id,
      { count, content, iconImage },
      { new: true, runValidators: true }
    );

    if (!updatedStat) return res.status(404).json({ message: "Stat not found" });

    res.status(200).json(updatedStat);
  } catch (error) {
    res.status(500).json({ message: "Failed to update stat", error });
  }
};

// Update multiple stats at once
exports.updateMultipleOnlineStats = async (req, res) => {
  try {
    const updates = req.body; // expect array [{_id, count, content, iconImage}, ...]
    if (!Array.isArray(updates) || updates.length === 0) {
      return res.status(400).json({ message: "Please provide an array of updates" });
    }

    const results = [];
    for (const stat of updates) {
      const updated = await OnlineStats.findByIdAndUpdate(stat._id, stat, { new: true, runValidators: true });
      if (updated) results.push(updated);
    }

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Failed to update multiple stats", error });
  }
};

// ------------------- DELETE -------------------

// Delete single stat by ID
exports.deleteOnlineStat = async (req, res) => {
  try {
    const deletedStat = await OnlineStats.findByIdAndDelete(req.params.id);
    if (!deletedStat) return res.status(404).json({ message: "Stat not found" });

    res.status(200).json({ message: "Stat deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete stat", error });
  }
};

// Delete multiple stats by IDs
exports.deleteMultipleOnlineStats = async (req, res) => {
  try {
    const { ids } = req.body; // expect { ids: ["id1", "id2", ...] }
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: "Please provide an array of IDs to delete" });
    }

    const result = await OnlineStats.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ message: `${result.deletedCount} stats deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete multiple stats", error });
  }
};
