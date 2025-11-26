const UcuDirector = require("../../Model/FacultyPageModel/UcuDirectors");

// CREATE
exports.createDirector = async (req, res) => {
    try {
        const director = await UcuDirector.create(req.body);
        res.status(201).json({ success: true, data: director });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// GET ALL
exports.getAllDirectors = async (req, res) => {
    try {
        const directors = await UcuDirector.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: directors });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// GET ONE
exports.getDirectorById = async (req, res) => {
    try {
        const director = await UcuDirector.findById(req.params.id);
        if (!director) return res.status(404).json({ success: false, message: "Director not found" });

        res.status(200).json({ success: true, data: director });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// UPDATE
exports.updateDirector = async (req, res) => {
    try {
        const director = await UcuDirector.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!director) return res.status(404).json({ success: false, message: "Director not found" });

        res.status(200).json({ success: true, data: director });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// DELETE
exports.deleteDirector = async (req, res) => {
    try {
        const director = await UcuDirector.findByIdAndDelete(req.params.id);

        if (!director) return res.status(404).json({ success: false, message: "Director not found" });

        res.status(200).json({ success: true, message: "Director deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
