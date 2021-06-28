const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        unique: true,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    }
},{
    timestamps:true
});

const taskModel  = mongoose.model("Task", TaskSchema);

module.exports = taskModel;