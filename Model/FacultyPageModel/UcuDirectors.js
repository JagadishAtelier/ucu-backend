const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
    eduTitle: { type: String, required: true },
    eduList: { type: [String], required: true }
});

const experienceSchema = new mongoose.Schema({
    expTitle: { type: String, required: true },
    expEduList: { type: [String], required: true }
});

const directorsArticleSchema = new mongoose.Schema({
    articleTitle: { type: String, required: true },
    articleContent: { type: String, required: true },
    articleImage: { type: String, required: true }
});

const tabSchema = new mongoose.Schema({
    linedinLink: { type: String, required: true },
    educationData: { type: mongoose.Schema.Types.Mixed, required: true },
    directorsArticle: [directorsArticleSchema]
});

const ucuDirectorSchema = new mongoose.Schema({
    ucuDirectorsImage: { type: String, required: true },
    directorsName: { type: String, required: true },
    directoryName: { type: String, required: true },
    tabs: [tabSchema],
    education: { type: [educationSchema], required: true },
    experience: { type: [experienceSchema], required: true }
}, { timestamps: true });

module.exports = mongoose.model("ucuDirectors", ucuDirectorSchema);
