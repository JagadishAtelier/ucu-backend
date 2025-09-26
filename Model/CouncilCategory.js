const mongoose = require('mongoose')

const councilCategorySchema = new mongoose.Schema({
    councilTitle : { type : String , required : true }
})

module.exports = mongoose.model("Council Category",councilCategorySchema)