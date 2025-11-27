const ConsortiumTeam = require("../../Model/ConsortiumPageModel/ConsortiumTeam");

// ✅ Create a new team member
exports.createTeamMember = async (req, res) => {
  try {
    const { name, professional, image } = req.body;

    if (!name || !professional || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMember = new ConsortiumTeam({ name, professional, image });
    await newMember.save();

    res.status(201).json({ message: "Team member created successfully", data: newMember });
  } catch (error) {
    res.status(500).json({ message: "Error creating team member", error: error.message });
  }
};

// ✅ Get all team members
exports.getAllTeamMembers = async (req, res) => {
  try {
    const members = await ConsortiumTeam.find().sort({ createdAt: -1 });
    res.status(200).json({ data: members });
  } catch (error) {
    res.status(500).json({ message: "Error fetching team members", error: error.message });
  }
};

// ✅ Get a single team member by ID
exports.getTeamMemberById = async (req, res) => {
  try {
    const member = await ConsortiumTeam.findById(req.params.id);
    if (!member) return res.status(404).json({ message: "Team member not found" });

    res.status(200).json({ data: member });
  } catch (error) {
    res.status(500).json({ message: "Error fetching team member", error: error.message });
  }
};

// ✅ Update a team member
exports.updateTeamMember = async (req, res) => {
  try {
    const { name, professional, image } = req.body;

    const updatedMember = await ConsortiumTeam.findByIdAndUpdate(
      req.params.id,
      { name, professional, image },
      { new: true, runValidators: true }
    );

    if (!updatedMember) return res.status(404).json({ message: "Team member not found" });

    res.status(200).json({ message: "Team member updated successfully", data: updatedMember });
  } catch (error) {
    res.status(500).json({ message: "Error updating team member", error: error.message });
  }
};

// ✅ Delete a team member
exports.deleteTeamMember = async (req, res) => {
  try {
    const deletedMember = await ConsortiumTeam.findByIdAndDelete(req.params.id);
    if (!deletedMember) return res.status(404).json({ message: "Team member not found" });

    res.status(200).json({ message: "Team member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting team member", error: error.message });
  }
};
