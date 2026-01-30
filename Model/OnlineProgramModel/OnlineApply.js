const mongoose = require("mongoose");

const onlineApplySchema = new mongoose.Schema(
    {
        stepNumber: { type: Number, required: true },
        title: { type: String, required: true },
        iconName: { type: String },
        descriptionPoints: [{ type: String }]
    },
    { timestamps: true }
);
const WorkflowSchema = new mongoose.Schema({
    steps: [onlineApplySchema]
});
module.exports = mongoose.model("OnlineApply", WorkflowSchema);
