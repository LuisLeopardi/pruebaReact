module.exports = (app) => {
    app.use("/login", require("./login"))
    app.use("/tasks", require("./tasks"))
}