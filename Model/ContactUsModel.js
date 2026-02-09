const { mediaFile } = require("google-ads-api/build/src/protos/autogen/resourceNames");
const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
    {
        bannerTitle: { type: String, required: true },

        bannerContent: { type: String, required: true },

        bannerImage: [{ type: String }],
    },
);

const introSection = new mongoose.Schema(
    {
        title: { type: String, required: true },
    }
);

const contactCardSection = new mongoose.Schema(
    {
        image: { type: String, },
        tagName: { type: String, },
        iconImage: { type: String, },
        title: { type: String, },
        content: [{ type: String, }],
        link: { type: String, },
    },
);



const contactFormSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    number: { type: String, required: true },
    mail: { type: String, required: true },
    city: { type: String, required: true },
    describe: { type: String, required: true },
    message: { type: String }
});

const initiativesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: mongoose.Schema.Types.Mixed
});


const indiaCentersSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    tag: { type: String, required: true },
    states: [{
        name: { type: String, required: true },
        image: { type: String },
    }]
});

const internationalCentersSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    tag: { type: String, required: true },
    countries: [{
        name: { type: String, required: true },
        image: { type: String },
    }]
});


const contactSchema = new mongoose.Schema({
    hero: bannerSchema,
    introSection: introSection,
    contactCard: [contactCardSection],
    formData: contactFormSchema,
    initiatives: [initiativesSchema],
    indiaCenter: [indiaCentersSchema],
    iternationalCenter: [internationalCentersSchema],
}, { timestamps: true });

module.exports = mongoose.model("Contact", contactSchema);
