const admin = require("../models/admin");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config() 

const handleResponse = ({content, error, status}, res, next) => {
    res.locals.data = { content, status, error }
    if (error) {
        next('route')
    } else {
        next()
    }
}

const admins = [{ username: "admin", password: "123", id:"1", tasks: [{ a:"a" }] }]

module.exports = {
    adminAuth: async ({ body: {username, password}}, res, next) => {
        const adminData = await admin.findOne({username}, 'password username');
        if (!adminData || (adminData.password !== password)) {
            return handleResponse({content:"invalid username or password", error:true, status: 400}, res, next)
        } else {
            const token = jwt.sign({ id:adminData.id }, process.env.TOKENSECRET)
            return handleResponse({content:token, error:false, status: 200}, res, next)
        }
    },
    adminAuthorize: async (req, res, next) => {
        const { id } = jwt.decode(req.cookies.token8baseE, process.env.TOKENSECRET)
        const adminData = await admin.findById(id);
        console.log(id)
        if (!adminData) {
            return handleResponse({content:"invalid token", error:true, status: 400}, res, next)
        } else {
            return handleResponse({content:id, error:false, status: 200}, res, next)
        }
    },
    adminTaskList: async (req, res, next) => {
        const {content} = res.locals.data;
        const {tasks} = await admin.findById({_id:content}, 'tasks -_id')
        console.log(tasks)
        return handleResponse({content:tasks, error:false, status: 200}, res, next)
    },
    adminPostTask: async (req, res, next) => {
        const {name} = req.body
        const {content} = res.locals.data;
        const newTask = {name, completed:false}
        await admin.findByIdAndUpdate({_id:content}, { $push:  { tasks: newTask }})
        return handleResponse({content:"task submited succsesfully", error:false, status: 200}, res, next)
    },
    adminDeleteTask: async (req, res, next) => {
        const {id} = req.query
        const {content} = res.locals.data;
        await admin.findByIdAndUpdate({_id:content}, { $pull:  { tasks: { _id: id} }})
        return handleResponse({content:"task deleted succsesfully", error:false, status: 200}, res, next)
    },
    adminPathTask: async (req, res, next) => {
        const {id} = req.query
        const {content} = res.locals.data;
        await admin.updateOne({_id:content, 'tasks._id': id }, { $set:  { 'tasks.$.completed': true}})
        return handleResponse({content:"task modified succsesfully", error:false, status: 200}, res, next)
    },
}