const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    dataImage: { type: String, required: true },
});
const strategicAssociationsSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        data: [dataSchema]
    },
    { timestamps: true }
);

module.exports = mongoose.model("strategicAssociations", strategicAssociationsSchema);
