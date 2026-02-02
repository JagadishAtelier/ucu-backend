const LeadershipPage = require('../../Model/AboutModel/LeadershipPageModel');

// Get all pages list
exports.getAllPages = async (req, res) => {
    try {
        const pages = await LeadershipPage.find().select('title slug createdAt');
        res.status(200).json({ success: true, data: pages });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Create new page
exports.createPage = async (req, res) => {
    try {
        const { title } = req.body;
        const slug = title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');

        const exists = await LeadershipPage.findOne({ slug });
        if (exists) return res.status(400).json({ message: "Page with this title already exists" });

        const newPage = new LeadershipPage({ title, slug, ...req.body });
        await newPage.save();
        res.status(201).json({ success: true, data: newPage });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Get single page by slug
exports.getPageBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const pageData = await LeadershipPage.findOne({ slug });
        if (!pageData) return res.status(404).json({ message: "Page not found" });
        res.status(200).json({ success: true, data: pageData });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update page
exports.updatePage = async (req, res) => {
    try {
        const { slug } = req.params;
        const pageData = await LeadershipPage.findOne({ slug });
        if (!pageData) return res.status(404).json({ message: "Page not found" });

        Object.assign(pageData, req.body);
        await pageData.save();
        res.status(200).json({ success: true, message: "Updated Successfully", data: pageData });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Delete page
exports.deletePage = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await LeadershipPage.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: "Page not found" });
        res.status(200).json({ success: true, message: "Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
