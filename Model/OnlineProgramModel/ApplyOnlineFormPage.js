const mongoose = require("mongoose");

const applyOnlineFormSchema = new mongoose.Schema(
    {
        stepNumber: { type: Number, required: true },
        title: { type: String, required: true },
        iconName: { type: String },
        descriptionPoints: [{ type: String }]
    },
    { timestamps: true }
);
const WorkflowSchema = new mongoose.Schema({
    steps: [applyOnlineFormSchema]
});
module.exports = mongoose.model("ApplyOnlineForm", WorkflowSchema);
