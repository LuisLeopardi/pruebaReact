const mongoose = require("mongoose");
const taskSchema = require("./task")

const adminSchema = new mongoose.Schema({
    password: {
        type: String
    },
    username:{
        type: String
    },
    tasks: [taskSchema]
})

module.exports = admin =  mongoose.model("admins", adminSchema)