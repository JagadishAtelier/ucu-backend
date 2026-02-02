const AdvisoryNavigation = require('../Model/AdvisoryNavigation');

exports.getNavigation = async (req, res) => {
    try {
        const nav = await AdvisoryNavigation.find();
        res.status(200).json({ success: true, data: nav });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.createNavigation = async (req, res) => {
    try {
        const nav = new AdvisoryNavigation(req.body);
        await nav.save();
        res.status(200).json({ success: true, data: nav });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.updateNavigation = async (req, res) => {
    try {
        const { id } = req.params;
        const nav = await AdvisoryNavigation.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ success: true, data: nav });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.deleteNavigation = async (req, res) => {
    try {
        const { id } = req.params;
        await AdvisoryNavigation.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Deleted successfully" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
