const router = require("express").Router()
const { adminAuth } = require("../services/adminService");

router.post("/", 
adminAuth,
(req, res) => {
    const {error, status, content} = res.locals.data;
    if (error) return res.status(status).json(content);
    res.status(status).cookie('token8baseE', content).send()
})

module.exports = router;