const StrategicAssociations = require("../../Model/ExecutiveEduPageModel/StrategicAssociations");

// ------------------------------------------------------------
// SMART CREATE: IF TITLE EXISTS, PUSH IMAGE. ELSE CREATE NEW.
// ------------------------------------------------------------
exports.createAssociation = async (req, res) => {
    try {
        const { title, data } = req.body;

        // Make sure title is provided
        if (!title) {
            return res.status(400).json({ success: false, message: "Title is required" });
        }

        // Check if Association with same title exists
        let existing = await StrategicAssociations.findOne({
            title: { $regex: new RegExp("^" + title + "$", "i") }
        });

        if (existing) {
            if (data) {
                if (Array.isArray(data)) {
                    existing.data.push(...data); // push each object individually
                } else {
                    existing.data.push(data);
                }
                await existing.save();
            }

            return res.status(200).json({
                success: true,
                message: "Image(s) added to existing title",
                data: existing
            });
        }


        // If not exists → create new
        const newAssociation = await StrategicAssociations.create(req.body);

        res.status(201).json({
            success: true,
            message: "New association created",
            data: newAssociation
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


// ------------------------------------------------------------
// GET ALL
// ------------------------------------------------------------
exports.getAllAssociations = async (req, res) => {
    try {
        const list = await StrategicAssociations.find();

        res.status(200).json({
            success: true,
            data: list,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ------------------------------------------------------------
// GET BY TITLE
// ------------------------------------------------------------
exports.getByTitle = async (req, res) => {
    try {
        const { title } = req.params;

        const item = await StrategicAssociations.findOne({
            title: { $regex: new RegExp("^" + title + "$", "i") }
        });

        if (!item) {
            return res.status(404).json({ success: false, message: "No data found for this title" });
        }

        res.status(200).json({
            success: true,
            data: item
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ------------------------------------------------------------
// GET SINGLE
// ------------------------------------------------------------
exports.getSingleAssociation = async (req, res) => {
    try {
        const item = await StrategicAssociations.findById(req.params.id);

        if (!item) {
            return res.status(404).json({ success: false, message: "Not Found" });
        }

        res.status(200).json({ success: true, data: item });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ------------------------------------------------------------
// UPDATE
// ------------------------------------------------------------
exports.updateAssociation = async (req, res) => {
    try {
        const updated = await StrategicAssociations.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Updated successfully",
            data: updated,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ------------------------------------------------------------
// DELETE
// ------------------------------------------------------------
exports.deleteAssociation = async (req, res) => {
    try {
        await StrategicAssociations.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ------------------------------------------------------------
// ADD IMAGE INSIDE data[]
// ------------------------------------------------------------
exports.addAssociationImage = async (req, res) => {
    try {
        const association = await StrategicAssociations.findById(req.params.id);

        if (!association) {
            return res.status(404).json({ success: false, message: "Not Found" });
        }

        association.data.push(req.body);
        await association.save();

        res.status(200).json({
            success: true,
            message: "Image added",
            data: association,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ------------------------------------------------------------
// UPDATE SINGLE IMAGE
// ------------------------------------------------------------
exports.updateAssociationImage = async (req, res) => {
    try {
        const { id, dataId } = req.params;

        const association = await StrategicAssociations.findById(id);
        if (!association) {
            return res.status(404).json({ success: false, message: "Not Found" });
        }

        const imageItem = association.data.id(dataId);
        if (!imageItem) {
            return res.status(404).json({ success: false, message: "Image not found" });
        }

        Object.assign(imageItem, req.body);
        await association.save();

        res.status(200).json({
            success: true,
            message: "Image updated",
            data: association,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ------------------------------------------------------------
// DELETE SINGLE IMAGE
// ------------------------------------------------------------
exports.deleteAssociationImage = async (req, res) => {
    try {
        const { id, dataId } = req.params;

        const association = await StrategicAssociations.findById(id);
        if (!association) {
            return res.status(404).json({ success: false, message: "Not Found" });
        }

        const imageItem = association.data.id(dataId);
        if (!imageItem) {
            return res.status(404).json({ success: false, message: "Image not found" });
        }

        imageItem.deleteOne();
        await association.save();

        res.status(200).json({
            success: true,
            message: "Image deleted",
            data: association,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
