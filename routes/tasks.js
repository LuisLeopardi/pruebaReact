const router = require("express").Router()
const {
    adminAuthorize, 
    adminPostTask, 
    adminDeleteTask, 
    adminPathTask 
} = require("../services/adminService");


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