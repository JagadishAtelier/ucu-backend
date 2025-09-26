const CouncilAdivsories = require('../Model/CouncilDataModel')

exports.createAdivsories = async(req,res)=>{
    try {
        const advisoriesData =new CouncilAdivsories(req.body)

        await advisoriesData.save()

        res.status(200).json({success : true , message : "Created Successfully",data : advisoriesData})

    } catch (error) {
        res.status(400).json({success : false , message : error.message})
    }
}

exports.getAdivsories = async(req,res) =>{
    try {
        const advisoriesData = await CouncilAdivsories.find()
        res.status(200).json({success : true , data :advisoriesData })
    } catch (error) {
        res.status(400).json({success : false , message : error.message})
    }
}

exports.getAdivsoriesById = async(req,res) =>{
    try {
        const { id } = req.params
        const advisoriesData = await CouncilAdivsories.findById(id)
        if(!advisoriesData){
            return res.status(400).json({message : "Adivsories Not Found"})
        }
        res.status(200).json({success : true , data : advisoriesData})
    } catch (error) {
        res.status(400).json({success : false , message : error.message})
    }
}

exports.updateAdivsories = async(req,res) =>{
    try {
       const { id } = req.params

       const advisoriesData = await CouncilAdivsories.findById(id)
        if(!advisoriesData){
            return res.status(400).json({message :"Adivsories Not Found"})
        }

        Object.assign(advisoriesData , req.body)
        await advisoriesData.save()

        res.status(200).json({success : true , message : "Updated Successfully",data :advisoriesData })
    } catch (error) {
        res.status(400).json({success : false , message : error.message})
    }
}


exports.deleteAdivsories = async(req,res) =>{
    try {
        const { id } = req.params

        const advisoriesData = await CouncilAdivsories.findByIdAndDelete(id)

        if(!advisoriesData){
            return res.status(400).json({message : "Invalid Id Not Found"})
        }

        res.status(200).json({message : "Deleted Successfully"})
    } catch (error) {
        res.status(400).json({success : false , message : error.message})
    }
}