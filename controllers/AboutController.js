const AboutNavigation = require('../Model/AboutNavigation');
const AboutPageData = require('../Model/AboutPageData');

// --- Navigation ---
exports.getNavigation = async (req, res) => {
    try {
        const nav = await AboutNavigation.find().sort({ order: 1 });
        res.status(200).json({ success: true, data: nav });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.createNavigation = async (req, res) => {
    try {
        const { title } = req.body;
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

        // Check duplicate
        const exists = await AboutNavigation.findOne({ slug });
        if (exists) return res.status(400).json({ message: "Page with this name already exists" });

        const nav = new AboutNavigation({ title, slug });
        await nav.save();

        // Create empty page data
        const pageData = new AboutPageData({ pageSlug: slug, title: title });
        await pageData.save();

        res.status(200).json({ success: true, data: nav });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.updateNavigation = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;

        const nav = await AboutNavigation.findById(id);
        if (!nav) return res.status(404).json({ message: "Not found" });

        const oldSlug = nav.slug;
        const newSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

        // Update nav
        nav.title = title;
        nav.slug = newSlug;
        await nav.save();

        // Update linked page data
        await AboutPageData.findOneAndUpdate({ pageSlug: oldSlug }, { pageSlug: newSlug, title: title });

        res.status(200).json({ success: true, data: nav });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.deleteNavigation = async (req, res) => {
    try {
        const { id } = req.params;
        const nav = await AboutNavigation.findById(id);
        if (nav) {
            await AboutPageData.deleteOne({ pageSlug: nav.slug });
            await AboutNavigation.findByIdAndDelete(id);
        }
        res.status(200).json({ success: true, message: "Deleted successfully" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// --- Page Data ---
exports.getPageData = async (req, res) => {
    try {
        const { slug } = req.params;
        let data = await AboutPageData.findOne({ pageSlug: slug });
        // If navigation exists but data missing, create generic
        if (!data) {
            const nav = await AboutNavigation.findOne({ slug });
            if (nav) {
                data = new AboutPageData({ pageSlug: slug, title: nav.title });
                await data.save();
            } else {
                return res.status(404).json({ message: "Page not found" });
            }
        }
        res.status(200).json({ success: true, data: data });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.updatePageData = async (req, res) => {
    try {
        const { slug } = req.params;
        // Upsert true to create if missing
        const data = await AboutPageData.findOneAndUpdate({ pageSlug: slug }, req.body, { new: true, upsert: true });
        res.status(200).json({ success: true, data: data });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
