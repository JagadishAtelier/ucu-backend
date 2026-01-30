const CampusPlacementIntro = require("../../Model/CamPlacement/CamplacementIntro");

// Create new document
exports.createIntro = async (req, res) => {
  try {
    const intro = new CampusPlacementIntro({
      tabs: req.body.tabs || [],
    });
    const savedIntro = await intro.save();
    res.status(201).json(savedIntro);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all intros
exports.getAllIntros = async (req, res) => {
  try {
    const intros = await CampusPlacementIntro.find();
    res.status(200).json(intros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single intro by ID
exports.getIntroById = async (req, res) => {
  try {
    const intro = await CampusPlacementIntro.findById(req.params.id);
    if (!intro) return res.status(404).json({ message: "Intro not found" });
    res.status(200).json(intro);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update entire intro document
exports.updateIntro = async (req, res) => {
  try {
    const updatedIntro = await CampusPlacementIntro.findByIdAndUpdate(
      req.params.id,
      { tabs: req.body.tabs },
      { new: true }
    );
    if (!updatedIntro) return res.status(404).json({ message: "Intro not found" });
    res.status(200).json(updatedIntro);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a tab
exports.addTab = async (req, res) => {
  try {
    const intro = await CampusPlacementIntro.findById(req.params.id);
    if (!intro) return res.status(404).json({ message: "Intro not found" });

    intro.tabs.push({ sections: req.body.sections || [] });
    await intro.save();
    res.status(200).json(intro);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a section to a specific tab
exports.addSection = async (req, res) => {
  try {
    const { tabIndex } = req.params; // index of the tab
    const intro = await CampusPlacementIntro.findById(req.params.id);
    if (!intro) return res.status(404).json({ message: "Intro not found" });

    if (!intro.tabs[tabIndex]) return res.status(404).json({ message: "Tab not found" });

    intro.tabs[tabIndex].sections.push(req.body); // req.body = { title, contentData }
    await intro.save();
    res.status(200).json(intro);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a tab
exports.deleteTab = async (req, res) => {
  try {
    const { tabIndex } = req.params;
    const intro = await CampusPlacementIntro.findById(req.params.id);
    if (!intro) return res.status(404).json({ message: "Intro not found" });

    intro.tabs.splice(tabIndex, 1);
    await intro.save();
    res.status(200).json(intro);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a section from a tab
exports.deleteSection = async (req, res) => {
  try {
    const { tabIndex, sectionIndex } = req.params;
    const intro = await CampusPlacementIntro.findById(req.params.id);
    if (!intro) return res.status(404).json({ message: "Intro not found" });

    if (!intro.tabs[tabIndex]) return res.status(404).json({ message: "Tab not found" });

    intro.tabs[tabIndex].sections.splice(sectionIndex, 1);
    await intro.save();
    res.status(200).json(intro);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Delete entire intro by ID
exports.deleteIntroById = async (req, res) => {
  try {
    const deletedIntro = await CampusPlacementIntro.findByIdAndDelete(req.params.id);
    if (!deletedIntro) {
      return res.status(404).json({ message: "Intro not found" });
    }
    res.status(200).json({ message: "Intro deleted successfully", deletedIntro });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
