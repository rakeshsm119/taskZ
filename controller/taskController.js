const Task = require('../model/taskModel')

const taskController = {

    index: async(req,res) => {
        const taskList = await Task.find({})
        // console.log('task = ', taskList)
        res.render(`index`,{tasks: taskList})
    },
    new: async(req,res) => {
        res.render(`create`)
    },
    edit: async (req,res) => {
        res.render(`update`)
    },
    createTask: async (req,res) => {
        // console.log('data',req.body);
        const { title,content,start,end,user} = req.body

        const newTask = Task({title,content,start,end,user})
        // console.log('data',newTask);
        newTask.save()
        console.log(`task create successfully`);
        res.redirect('/')
    }
}

module.exports = taskController