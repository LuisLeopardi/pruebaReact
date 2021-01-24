const router = require("express").Router()
const {
    adminTaskList, 
    adminAuthorize, 
    adminPostTask, 
    adminDeleteTask, 
    adminPathTask 
} = require("../services/adminService");

router.get("/", 
adminAuthorize,
adminTaskList,
(req, res) => {
    const {error, status, content} = res.locals.data;
    res.json({ error, status, content })
})

router.post("/", 
adminAuthorize,
adminPostTask,
(req, res) => {
    const {error, status, content} = res.locals.data;
    res.json({ error, status, content })
})

router.delete("/", 
adminAuthorize,
adminDeleteTask,
(req, res) => {
    const {error, status, content} = res.locals.data;
    res.json({ error, status, content })
})

router.patch("/", 
adminAuthorize,
adminPathTask,
(req, res) => {
    const {error, status, content} = res.locals.data;
    res.json({ error, status, content })
})

module.exports = router;