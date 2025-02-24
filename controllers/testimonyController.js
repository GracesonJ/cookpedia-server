// 1. import model
const testimonials = require('../models/testimonyModel')

// add Testimony
exports.addTestimonyController = async (req, res) => {
    console.log("Inside AddTestimonyController");
//destructure
    const {name, email, message } = req.body 

    try {
        const newTestimony = new testimonials({
            name, email, message
        })
        await newTestimony.save()
        res.status(200).json(newTestimony)
    } catch (err) {
        res.status(401).json(err)
    }

}

//get all feedback
exports.getAllFeedbackController = async (req,res)=>{
    console.log("inside getAllFeedbackController");
    try{
        allFeedbacks = await testimonials.find()
        res.status(200).json(allFeedbacks)
    }catch(err){
        res.status(401).json(err)
    }
}

//feedback status update 
exports.updateFeedbackStatusContoller = async (req,res)=>{
    console.log("Inside updateFeedbackStatusContoller");
    // get feedback id from url parameter
    const {id} = req.params
    // get status of feedback from url  query
    const status = req.query.status
    // update status of feeback with given id
    try{
        const existingFeedback = await testimonials.findById({_id:id})
        existingFeedback.status = status
        await existingFeedback.save()
        res.status(200).json(existingFeedback)
    }catch(err){
        res.status(401).json(err)
    }
}