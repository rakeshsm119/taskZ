const mongoose=require('mongoose')

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        trim: true
    },
    content:{
        type:String,
        require: true,
        trim: true
    },
    start:{
        type: String,
        require: true,
        trim: true
    },
    end:{
        type: String,
        require: true,
        trim: true
    },
    user:{
        type: String,
        require:true,
        trim: true
    }
},{
    collection:"task",
    timestamps:true
})

module.exports = mongoose.model("Task",TaskSchema)