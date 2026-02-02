const FounderMessagePage = require('../../Model/AboutModel/FounderMessagePageModel');

exports.getAllPages = async (req, res) => {
    try {
        const pages = await FounderMessagePage.find().select('title slug createdAt');
        res.status(200).json({ success: true, data: pages });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.createPage = async (req, res) => {
    try {
        const { title } = req.body;
        const slug = title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');

        const exists = await FounderMessagePage.findOne({ slug });
        if (exists) return res.status(400).json({ message: "Page with this title already exists" });

        const newPage = new FounderMessagePage({ title, slug, ...req.body });
        await newPage.save();
        res.status(201).json({ success: true, data: newPage });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.getPageBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const page = await FounderMessagePage.findOne({ slug });
        if (!page) return res.status(404).json({ message: "Page not found" });
        res.status(200).json({ success: true, data: page });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.updatePage = async (req, res) => {
    try {
        const { slug } = req.params;
        const page = await FounderMessagePage.findOne({ slug });
        if (!page) return res.status(404).json({ message: "Page not found" });

        Object.assign(page, req.body);
        await page.save();
        res.status(200).json({ success: true, message: "Updated Successfully", data: page });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.deletePage = async (req, res) => {
    try {
        const { id } = req.params;
        await FounderMessagePage.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
