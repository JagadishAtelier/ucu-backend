const mongoose = require("mongoose")

const openProgramSchema = new mongoose.Schema({
     date : { type : Date , required : true },
     programTitle : { type : String , required : true },
     time : { type : String , required : true },
     fees : { type : String , required : true },
     pdf : { type : String , required : true },    
},{ timestamps: true }
)

module.exports = mongoose.model("OpenProgram", openProgramSchema);