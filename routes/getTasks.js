const router = require("express").Router()
const {
    adminTaskList, 
    adminAuthorize
} = require("../services/adminService");

router.post("/", 
adminAuthorize,
adminTaskList,
(req, res) => {
    const {error, status, content} = res.locals.data;
    console.log(error, status, content)
    res.json({ error, status, content })
})


module.exports = router;